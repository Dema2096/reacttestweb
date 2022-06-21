import React, { useState, useContext } from "react"
import  FormGroup  from "../Components/FormGroup";
import {useForm} from "react-hook-form"
import firebase from "../Config/firebase"
import ButtonWithLoading from "../Components/ButtonWithLoading"
import AlertCustom from "../Components/AlertCustom"
import {useHistory} from "react-router-dom"
import AuthContext from "../Context/AuthContext"
function Login() {
      const { register, handleSubmit,formState:{errors} } = useForm();
      const [cargando,setCargando]=useState(false)
      const history = useHistory()
      const context = useContext(AuthContext)
      const [alert,setAlert]=useState({variant:"",text:""})
      const onSubmit = async (data) =>{ 
            setCargando(true)
            try{
                  const responseUser = await  firebase.auth.signInWithEmailAndPassword(data.email,data.contraseña)
                  if(responseUser.user.uid){
                    const userInfo = await firebase.db.collection("usuarios")
                    .where("userId","==",responseUser.user.uid)
                    .get()
                    console.log("userInfo",userInfo.docs[0]?.data())
                  setCargando(false)
                  context.loginUser(userInfo.docs[0]?.data())
                  setAlert({variant:"success",text:"Bienvenido"})
                  setTimeout(()=> {
                        history.push("/");
                     }, 1500);
                  }
                
            }catch(e){
                  switch (e.code) {
                        case "auth/user-not-found":
                              setAlert({variant:"danger",text:"El email no se encuentra registrado"})
                          break;
                        case "auth/wrong-password":
                              setAlert({variant:"danger",text:"La contraseña es incorrecta"})
                          break;
                          default: console.log(e.code)
                  }
                  
            }
            
      }
            
    
return (
    <>
      <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup type="email" label="Email" register={{...register("email",{required:true})}} />
                  {errors.email && <span>El campo es obligatorio</span>}
                  <FormGroup type="password" label="Contraseña" register={{...register("contraseña",{required:true,minLength:6})}} />
                  {errors.contraseña?.type==="required" && <span>El campo es obligatorio</span>}
                  {errors.contraseña?.type==="minLength" && <span>El campo debe contener al menos 6 caracteres</span>}
                  <div>
                  <ButtonWithLoading loading={cargando} type="submit">Ingresar</ButtonWithLoading>
                  </div>
                  <AlertCustom variant={alert.variant} text={alert.text}  />
            </form>
      </div>
    </>
    );
  }
export default Login;