import '../App.css';
import HeaderSlide from '../components/header-slide.jsx';
import ProductGrid from '../components/product-grid.jsx';
import CtaBanner from '../components/cta.jsx';

function HomeContent() {
    return(
        <>
            <HeaderSlide />
            <ProductGrid sliceCount={4} />
            <CtaBanner />
        </>
    )
}

export default HomeContent;