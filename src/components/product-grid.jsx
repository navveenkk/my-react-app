import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Row, Col } from 'react-bootstrap';
import ProductItem from '../components/ProductItem.jsx';
import siteData from '../data.js';

function ProductGrid({ sliceCount, products }) {
    let productsToDisplay;
    if (products) {
        productsToDisplay = products;
    } else {
        const shuffledProducts = [...siteData.products].sort(() => Math.random() - 0.5);
        productsToDisplay = sliceCount ? shuffledProducts.slice(0, sliceCount) : shuffledProducts;
    }

   return (
        <Row className="mb-5 px-2"> 
            {/* <h1 className="text-white">Our Products</h1> */}

            {productsToDisplay.map(item => (
                <Col key={item.id} xs={12} sm={6} md={4} lg={4} className="px-1 gy-2"> {/* Adjusted column sizes for better responsiveness */}
                    <ProductItem
                        product={item}
 />
                </Col>
            ))}
        </Row>
    );
}

export default ProductGrid;