import '../App.css';
import HeaderSlide from '../components/header-slide.jsx';
import ProductGrid from '../components/product-grid.jsx';
import CtaBanner from '../components/cta.jsx';

function HomeContent() {
    return(
        <>
            <HeaderSlide />
            <h2 className="text-white mt-3">Our Products</h2>
            <ProductGrid sliceCount={3} />
            <CtaBanner />
        </>
    )
}

export default HomeContent;