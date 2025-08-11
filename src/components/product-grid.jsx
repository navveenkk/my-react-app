import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Col } from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap/Card';

function ProductGrid() {
    return (
        <>
        <h2>Our Products</h2>
        <Row className="d-flex">
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>B</Col>
        <Col>C</Col>
        </Row>
        </>
    );
}

export default ProductGrid;