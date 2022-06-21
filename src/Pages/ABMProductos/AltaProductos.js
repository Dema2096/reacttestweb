import React,{useState} from "react"
import { useForm } from "react-hook-form";
import FormGroup from "../../Components/FormGroup";
import Button from 'react-bootstrap/Button'
import firebase from '../../Config/firebase'
import {useHistory} from "react-router-dom"
import AlertCustom from "../../Components/AlertCustom";
function AltaProducto (){
    const [alert,setAlert]=useState({variant:"",text:""})
    const history = useHistory()
    const { register, handleSubmit,formState:{errors} } = useForm();
    
    const onSubmit = async (data) => {
        try{
            const document = await firebase.db.collection("productos")
            .add(data)
            console.log(document)
            setAlert({variant:"success",text:"Producto guardado con exito"})
                  setTimeout(()=> {
                        history.push("/");
                     }, 1500);
        }catch(e){
        }
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Nombre" register={{...register("title",{required:true})}}  />
                {errors.title && <span>El campo es obligatorio</span>}
                <FormGroup label="Descripcion" type="text" register={{...register("description",{required:true})}}  />
                {errors.description && <span>El campo es obligatorio</span>}
                <FormGroup label="Precio" register={{...register("price",{required:true})}}  />
                {errors.price && <span>El campo es obligatorio</span>}
                <FormGroup label="SKU" type="text" register={{...register("sku",{required:true})}}  />
                {errors.sku && <span>El campo es obligatorio</span>}
                <div>
                <Button type="submit" variant="primary">Guardar</Button>
                </div>
                <AlertCustom variant={alert.variant} text={alert.text}  />
                
            </form>
        </div>
    )
      
    
    
    
}
export default AltaProducto