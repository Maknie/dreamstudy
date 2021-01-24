import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'


const ProductCarousel = () => {
  return (
    <Jumbotron fluid="false">
      <Container>
        <h2 className="text-center poppinsFont">Let professionals help you to get your</h2>
        <h1 className="text-center poppinsFont">Dream Study</h1>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className=""
              src="https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="poppinsFont colWhite">Charles W. Eliot</h3>
              <p className="poppinsFont">“Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=985&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="poppinsFont colWhite">Shelby Foote</h3>
              <p className="poppinsFont colWhite">“A university is just a group of buildings gathered around a library.”</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1590579906355-9ea60292515b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1016&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="poppinsFont colWhite">Benjamin Disraeli</h3>
              <p className="poppinsFont colWhite">
              “A University should be a place of light, of liberty, and of learning.”
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Jumbotron>
  );
};

export default ProductCarousel;
