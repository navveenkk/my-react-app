import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderFunction from './components/header.jsx';
import FooterFunction from './components/footer.jsx';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage.jsx';
import ShopPage from './pages/ShopPage.jsx'; 
// import ProductPage from './pages/ProductPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import CartPage from './pages/CartPage.jsx';

function App() {
  return (
    <Router>
      <Container fluid className="d-flex flex-column justify-content-between">
        <HeaderFunction />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          {/* <Route path="/products/:productName" element={<ProductPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <FooterFunction />
      </Container>
    </Router>
  );
}

export default App;

