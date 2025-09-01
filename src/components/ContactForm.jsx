import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic here
    console.log('Form submitted:', { email, message });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-lg p-0 p-lg-4 glassy">
            <Card.Body>
              <h2 className="text-center text-white mb-4">Get in Touch</h2>
              <p className="text-center text-muted mb-4">
                We'd love to hear from you. Please fill out the form below.
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    type="email"
                    placeholder="Your E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicMessage">
                  {/* <Form.Label>Message</Form.Label> */}
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;