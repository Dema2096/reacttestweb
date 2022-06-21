import React from "react"
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import Menu from "../Components/Menu"
import Home from "../Pages/Home"
import ItemDetalle from "../Pages/ItemDetalle"
import Login from "../Pages/Login"
import NotFound from "../Pages/NotFound"
import Registro from "../Pages/Registro"
import Container from "react-bootstrap/Container"
import AltaProducto from "../Pages/ABMProductos/AltaProductos"
import ModificarProducto from "../Pages/ABMProductos/ModificarProducto"
import AuthContext from "../Context/AuthContext"
import Contacto from "../Pages/Contacto"

function Public (){
    return(
        <>
            <Menu/>
            <Container>
                <AuthContext.Consumer>
                    {
                        context=>
                    
                            <Switch>
                                {
                                    context.userLogin &&
                                    <Route path="/producto/modificar/:id" exact>
                                    <ModificarProducto/>
                                    </Route>
                                }
                                <Route path="/producto/:id" exact>
                                    <ItemDetalle/>
                                </Route>
                                <Route path="/contacto" exact> 
                                    <Contacto/>
                                </Route>
                                <Route path="/ingresar"> 
                                    <Login/>
                                </Route>
                                <Route path="/alta" exact> 
                                    <AltaProducto/>
                                </Route>
                                <Route path="/registro"> 
                                    <Registro/>
                                </Route>
                            <Redirect path="/home" to="/"/>
                                <Route path="/" exact>
                                    <Home/>
                                </Route>
                                <Route path="*">
                                    <NotFound/>
                                </Route>
                            </Switch>
                    }
            </AuthContext.Consumer>
            </Container>
        </>
    )
}

export default Public