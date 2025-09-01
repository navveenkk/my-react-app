import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../App.css';
import { NavLink, useNavigate, useSearchParams, Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import siteData from '../data';
import { CartContext } from '../context/CartContext';


const productCategories = ['All Categories', ...new Set(siteData.products.map(product => product.category))];

export default function HeaderFunction() {
 

const { cartItems } = useContext(CartContext);
const [searchInput, setSearchInput] = useState('');
const [selectedCategory, setSelectedCategory] = useState('');
const navigate = useNavigate();
const handleSearch = (event) => {
  event.preventDefault();
  const queryParams = new URLSearchParams();
  if (searchInput.trim()) {
    queryParams.set('q', searchInput);
  }
  if (selectedCategory && selectedCategory !== 'All Categories') {
    queryParams.set('category', selectedCategory);
  }
  navigate(`/search?${queryParams.toString()}`);
};

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="glassy mb-3">
          <Container fluid >
            <Navbar.Brand className="text-white" ><Nav.Link as={NavLink} to="/" className="text-white">
            Nave's Store
                  </Nav.Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
                className = "bg-dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3 ">
                  {siteData.navItems.map((item, index) => (
                    <Nav.Link as={NavLink} to={item.url} key={index} className="text-white fs-5">
                    {item.label}
                  </Nav.Link>
                  ))}
                  <Nav.Link as={NavLink} to="/cart" className="text-white">
                  <span className="position-relative">
                        <i className="bi bi-cart3 icon-large"></i>
 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItems.length}</span></span> 
 </Nav.Link>
                    <Nav.Link as={NavLink} to="/login" className="text-white">
                        <i className="bi bi-person-circle icon-large"></i>

                  </Nav.Link>
                </Nav>
                <Form className="d-flex align-items-center" onSubmit={handleSearch}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 h-75"
                    aria-label="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <Form.Select 
                    aria-label="Filter by category" 
                    className="me-2 h-75"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}
                  >
                    {productCategories.map((category, index) => (
                      <option key={index} value={category === 'All Categories' ? '' : category}>
                        {category}
                      </option>
                    ))}
                  </Form.Select>
                  <Button type="submit" className="h-75">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}