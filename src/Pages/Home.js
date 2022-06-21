import React,{useState,useEffect} from "react"
import Items from "../Components/Items"
import Loading from "../Components/Loading"
import firebase from "../Config/firebase"
import Carrusel from "../Components/Carousel"


function Home(){
    const[productos,setProductos]=useState([])
    const[cargando, setCargando]=useState(true)
    const[reload,setReload]=useState(true)
    async function request(){
        try{
            const querySnapshot = await firebase.db.collection("productos")
            .get()
            if(querySnapshot.docs){
                setProductos(querySnapshot.docs)
                setCargando(false)
                setReload(false)
                
            }
        }catch(e){
        }
    }
    useEffect(
        ()=>{
            if(reload)request()
        },[reload]
    )
    const handleDelete = async (id)=>{
        try{
            const document = await firebase.db.doc("productos/"+id)
            .delete()
            console.log(document)
           setReload(true)
        }catch(e){

        }
    }
   

        return(
            <Loading active={cargando}>
            <>
            <Carrusel></Carrusel>
            Listado de Productos
            {productos.map(producto=><Items datos={{...producto.data(),id:producto.id}} handleDelete={handleDelete}/>)}
            </>
            </Loading>
        )
    }

export default Home