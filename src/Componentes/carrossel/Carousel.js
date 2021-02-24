import React from 'react'
import '../../css/carrousel.css'

import {Carousel, Container} from 'react-bootstrap'

import banner1 from '../../Img/banner1.png'
import banner2 from '../../Img/banner2.png'
import banner3 from '../../Img/banner3.png'
import banner4 from '../../Img/banner4.png'

export default class Caroussel extends React.Component{
  render(){
    return(
    <Container fluid className="my-3">
          <Carousel >   
              <Carousel.Item>
                <img
                className="d-block w-100 tamanhoResponsivo"
                src={banner3}
                alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100 tamanhoResponsivo"
                src={banner4}
                alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100 tamanhoResponsivo"
                src={banner2}
                alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100 tamanhoResponsivo"
                src={banner1}
                alt="First slide"
                />
              </Carousel.Item>
          </Carousel>
        </Container>
    )
  }
}