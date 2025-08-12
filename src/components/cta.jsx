import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Button from 'react-bootstrap/Button';

function CtaBanner() {
    return (
        <>
          <div className="cta-badge w-100 rounded-5 my-5 p-3 d-flex justify-content-center align-items-center">
            <span>100% Contactless Delivery without any hustles!</span>
            <Button variant="primary" size="lg">Shop All</Button>
          </div>
        </>
      );
    }
export default CtaBanner;