import React from "react"
function Detalle (props){
    const {datos} = props
    console.log(props.datos)

    return(
        <>
        <h1>{datos.title}</h1>
        <p>{datos.description}</p>
        <p>$ {datos.price}</p>
        <p>SKU: {datos.sku}</p>
        </>
    )
  
}
export default Detalle