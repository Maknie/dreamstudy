import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Contact us for any questions on our <a href={"mailto:" + "inkarzhanan@gmail.com"}>email</a></Col>
        </Row>
        <Row>
          <Col className='text-center py-1'>Copyright &copy; Dream Study</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
