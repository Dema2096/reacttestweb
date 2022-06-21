import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import Detalle from "../Components/Detalle";
import firebase from "../Config/firebase"
import Loading from "../Components/Loading"

function ItemDetalle (){

    const [producto,setProducto] = useState(false)
    const [cargando,setCargando] = useState(true)
    const {id}=useParams()
    useEffect(
        ()=>{
            async function request(){
                try{
                    const response = await firebase.db.doc("productos/"+id)
                    .get()
                    if(response){
                        setProducto(response)
                        setCargando(false)
                        

                    }
                }catch(e){

                }
                
            }
            request()
            
        },[id]
    )

        return(
            <Loading active={cargando}>
            <>
            {
                producto &&
                <Detalle datos={producto.data()} />
            }
            

            </>
        </Loading>
        )
    
}
export default ItemDetalle