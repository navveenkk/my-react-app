import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Col } from 'react-bootstrap';

const HeaderSlide = () => {
  // Data for the carousel items
  const carouselItems = [
    {
      id: 1,
      image: 'src/assets/b.svg', // Placeholder image
      alt: 'Pharma Innovation',
      title: 'Advancing Healthcare',
      description: 'Discover the latest breakthroughs in pharmaceutical research and development.',
    },
    {
      id: 2,
      image: 'src/assets/b(1).svg', // Placeholder image
      alt: 'Herbal Remedies',
      title: 'Natural Healing',
      description: 'Explore the power of herbal medicine and traditional remedies for well-being.',
    },
    {
      id: 3,
      image: 'src/assets/b(2).svg', // Placeholder image
      alt: 'Integrated Medicine',
      title: 'Holistic Approach',
      description: 'Learn about the integration of conventional and alternative medicine for comprehensive care.',
    },
  ];

  return (
    // Outer container for the carousel, centered and with padding, using Tailwind for styling
    <div className="mx-auto py-8 mb-5">
      
      <Carousel data-bs-theme="dark" className="rounded-5 shadow-lg overflow-hidden">

        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="row d-flex align-items-center justify-content-center">
              <Col xs={12} md={8} lg={6} className="mb-3 mb-md-0">
                <img className="d-block w-full h-auto img-fluid rounded-lg shadow-lg" src={item.image} alt={item.alt}
                // Fallback for image loading errors
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x600/CCCCCC/333333?text=Image+Not+Found'; }} />
              </Col>
              <Col xs={12} md={4} lg={6} className="text-center text-md-start d-flex align-items-center">
                <div className="p-3 text-white">
                  <h2 className="text-3xl font-bold mb-3 p-2">{item.title}</h2>
                  <p className="text-lg leading-relaxed p-2 fs-3">{item.description}</p>
                </div>
              </Col>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
    </div>
  );
};

export default HeaderSlide;