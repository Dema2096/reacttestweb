import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import firebase from "../../Config/firebase"
import FormGroup from "../../Components/FormGroup"
import { useForm } from "react-hook-form";
import  Button  from "react-bootstrap/Button";
import {useHistory} from "react-router-dom"
import Loading from "../../Components/Loading";
import AlertCustom from "../../Components/AlertCustom";
function ModificarProducto (){
    const history = useHistory()
    const { register, handleSubmit,setValue } = useForm();
    const [alert,setAlert]=useState({variant:"",text:""})
    const onSubmit = async (data) => {
        try{
            const document = await firebase.db.doc("productos/"+id)
            .set(data)
            console.log(document)
            setAlert({variant:"success",text:"Producto modificado con exito"})
            setTimeout(()=> {
                  history.push("/");
               }, 1500);
            
            }catch(e){
        }
        
    }
    const [cargando,setCargando] = useState(true)
    const {id}=useParams()
    useEffect(
        ()=>{
            async function request(){
                try{
                    const response = await firebase.db.doc("productos/"+id)
                    .get()
                    if(response){
                        setCargando(false)

                        setValue("title",response.data().title)
                        setValue("description",response.data().description)
                        setValue("price",response.data().price)
                        setValue("sku",response.data().sku)
                    }
                }catch(e){

                }
                
            }
            request()
            
        },[id, setValue]
    )
    const handleDelete = async ()=>{
        try{
            const document = await firebase.db.doc("productos/"+id)
            .delete()
            console.log(document)
            setAlert({variant:"success",text:"Producto eliminado con exito"})
            setTimeout(()=> {
                  history.push("/");
               }, 1500);
        }catch(e){

        }
    }

        return(
            <Loading active={cargando}>
            <>
            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>

            <h1>Modificar</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup label="Nombre" register={{...register("title",{required:true})}}  />
            <FormGroup label="Descripcion" type="text" register={{...register("description",{required:true})}}  />
            <FormGroup label="Precio" type="number" register={{...register("price",{required:true})}}  />
            <FormGroup label="SKU"  register={{...register("sku",{required:true})}}  />
            

            <div>
            <Button type="submit" variant="primary">Guardar</Button>
            </div>
            <AlertCustom variant={alert.variant} text={alert.text}  />
            </form>
            </>
            </Loading>
        )
    
}
export default ModificarProducto
