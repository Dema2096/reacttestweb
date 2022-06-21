import React,{useState} from "react"
import  FormGroup  from "../Components/FormGroup";
import {useForm} from "react-hook-form"
import firebase from "../Config/firebase"
import ButtonWithLoading from "../Components/ButtonWithLoading";
import AlertCustom from "../Components/AlertCustom"
import {useHistory} from "react-router-dom"
function Registro() {
      const { register, handleSubmit,formState:{errors} } = useForm();
      const [cargando,setCargando]=useState(false)
      const history = useHistory()
      const [alert,setAlert]=useState({variant:"",text:""})
      const onSubmit = async (data) =>{ 
            setCargando(true)
            try{
                  const responseUser = await  firebase.auth.createUserWithEmailAndPassword(data.email,data.contraseña)
                  if(responseUser.user.uid){
                        const document = await firebase.db.collection("usuarios")
                        .add({
                              nombre : data.nombre,
                              apellido : data.apellido,
                              userId: responseUser.user.uid
                        })
                        console.log("document",document)
                        setCargando(false)
                        setAlert({variant:"success",text:"Registro exitoso"})
                        setTimeout(()=> {
                              history.push("/");
                           }, 1500);
                  }

            }catch(e){
                  setCargando(false)
                  if(e.code==="auth/email-already-in-use"){
                        setAlert({variant:"danger",text:"El email se encuentra registrado"})
                  }

            }
            
      }
            
    
return (
    <>
      <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup label="Nombre" register={{...register("nombre",{required:true})}} />
                  {errors.usuario && <span>El campo es obligatorio</span>}
                  <FormGroup label="Apellido" register={{...register("apellido",{required:true})}} />
                  {errors.usuario && <span>El campo es obligatorio</span>}
                  <FormGroup type="email" label="Email" register={{...register("email",{required:true})}} />
                  {errors.email && <span>El campo es obligatorio</span>}
                  <FormGroup type="password" label="Contraseña" register={{...register("contraseña",{required:true,minLength:6})}} />
                  {errors.contraseña?.type==="required" && <span>El campo es obligatorio</span>}
                  {errors.contraseña?.type==="minLength" && <span>El campo debe contener al menos 6 caracteres</span>}
                  <div>
                  <ButtonWithLoading loading={cargando} type="submit">Registrarme</ButtonWithLoading>
                  </div>
                  <AlertCustom variant={alert.variant} text={alert.text} />
            </form>
      </div>
    </>
    );
  }
export default Registro;