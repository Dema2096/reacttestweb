import React from "react"
import Spinner from 'react-bootstrap/Spinner'
function Loading (props){
        const {active} = props
        if(active){
          return(
              <>
                <Spinner animation="grow" />
                <Spinner animation="grow" />
                <Spinner animation="grow" />
              </>
          )
        }else{
          return (
            <>
              {props.children}
            </>
          )
        }
        
      
    
    
    
}
export default Loading