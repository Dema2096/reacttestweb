import React  from "react"
import {Link} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext"

function Menu (){

    return(
        <>
        <AuthContext.Consumer>
            {
                    context=>
                    <>
                        <Navbar bg="light" expand="lg">
                        <Navbar.Brand as={Link} to="/">M3XXH4RD</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                        {
                            !context.userLogin &&
                            <>
                            <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
                            <Nav.Link as={Link} to="/registro">Registrarse</Nav.Link>
                            </>
                        }
                        
                        {
                            context.userLogin &&
                            <>
                            <NavDropdown title="Mas" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/alta">Alta de Producto</NavDropdown.Item>
                            <NavDropdown.Item onClick={context.logoutUser}>Salir</NavDropdown.Item>
                            </NavDropdown>
                            </>
                        }
                        </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                        {
                            context.userInfo &&
                            <div>Hola {context.userInfo.nombre}</div>
                        }
                    </>
            }
        </AuthContext.Consumer>
        </>
    )
}
export default Menu