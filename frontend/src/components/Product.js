import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card text="light" className="my-3 p-3 rounded primaryBg poppinsFont">
      <Row>
        <Col>
          <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" />
          </Link>
        </Col>

        <Col>
          <Card.Body>
            <Link to={`/product/${product._id}`}>
              <Card.Title text="light" as="div">
                <strong style={{ color: "white" }}>{product.name}</strong>
              </Card.Title>
            </Link>

            <Card.Text as="div">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Card.Text>

            <Card.Text style={{ color: "white" }} as="h3">
              ${product.price}
            </Card.Text>

            <Card.Text style={{ color: "white" }} as="h3">
              <Link to={`/product/${product._id}`}>
                <Button variant="info" className="">More</Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Product;
