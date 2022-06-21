import React from "react"
import Carousel from 'react-bootstrap/Carousel'

function Carrusel(){
  return(

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/736x/8a/6c/2e/8a6c2e45cfb9e32859e9e7fa80350ad1.jpg"
      alt="First slide"
      width={900} height={500}
    />
    <Carousel.Caption>
      <h3>Precios sin igual</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://miro.medium.com/max/1400/1*UiWzSoX6qzUtOb_LdH1kHA.jpeg"
      alt="Second slide"
      width={900} height={500}
    />

    <Carousel.Caption>
      <h3>Los mejores en el mercado</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.wallpapersafari.com/64/39/6TRUp9.jpg"
      alt="Third slide"
      width={900} height={500}
    />

    <Carousel.Caption>
      <h3>Nahuel sorete</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default Carrusel