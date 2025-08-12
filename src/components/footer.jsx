import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import siteData from '/src/data';

function FooterFunction() {
    return (
        <footer className="glassy text-dark py-4">
            <Container>
                <Row className="align-items-center">
                    {/* Copyright on the left */}
                    <Col lg={6} className="text-center text-lg-start mb-3 mb-lg-0">
                        <small>&copy; {new Date().getFullYear()} Nave's Store. All rights reserved.</small>
                    </Col>
                    
                    {/* Navigation links on the right */}
                    <Col lg={6}>
                        <Nav className="justify-content-center justify-content-lg-end">
                            {siteData.navItems.map((item, index) => (
                                <Nav.Link as={NavLink} to={item.url} key={index} className="px-2">
                                    <small>{item.label}</small>
                                </Nav.Link>
                            ))}
                            <Nav.Link as={NavLink} to={"/"}><small>Terms</small></Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterFunction;