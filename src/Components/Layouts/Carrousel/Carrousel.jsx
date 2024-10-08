import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importamos los íconos de FontAwesome
import image1 from '../../../assets/pln.jpg';
import image2 from  '../../../assets/img4.jpg';
import image3 from  '../../../assets/img2.jpeg';
import image4 from  '../../../assets/manoarbol.avif';
import image5 from  '../../../assets/carrouselimg1.jpg';
import './Carrousel.css';

const images = [image1, image2, image3, image4, image5];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-image">
        <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
      </div>
      
<div>
      {/* Botones de navegación con íconos */}
      <button className="carousel-arrow left-arrow" onClick={goToPrevious}>
        <FaArrowLeft />
      </button>
      <button className="carousel-arrow right-arrow" onClick={goToNext}>
        <FaArrowRight />
      </button>
      </div>
    </div>
  );
}

export default Carousel;