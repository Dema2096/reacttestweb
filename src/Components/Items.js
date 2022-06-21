import React from "react"
import {Link} from "react-router-dom"
import {Card,Button} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext"
function Items (props){
    const {datos,handleDelete} = props
    

    return(
        <AuthContext.Consumer>
            {
                context=>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{datos.title}</Card.Title>
                <Card.Text>
                ${datos.price}
                </Card.Text>
                <Button variant="primary" as={Link} to={"/producto/"+datos.id}>Ver Detalle</Button>
                {
                    context.userLogin &&
                    <>
                    <Button variant="primary" as={Link} to={"/producto/modificar/"+datos.id}>Modificar</Button>
                    <Button variant="danger" onClick={(event)=>handleDelete(datos.id)}>Eliminar</Button>
                    </>
                 }
                </Card.Body>
                </Card>
            }
        </AuthContext.Consumer>  
    )
}
export default Items