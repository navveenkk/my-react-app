import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CtaBanner() {
    return (
        <>
          <div className="cta-badge w-100 rounded-5 mb-5 p-3 d-flex flex-wrap justify-content-center align-items-center">
            <span>100% Contactless Delivery without any hustles!</span>
            <Button as={Link} to={'/shop'} variant="primary" size="lg">Shop All</Button>
          </div>
        </>
      );
    }
export default CtaBanner;