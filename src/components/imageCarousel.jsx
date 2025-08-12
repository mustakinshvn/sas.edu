import displayImage1 from "../assets/displayImage1.jpg";
import displayImage2 from "../assets/displayImage2.jpg";
import schoolGate from "../assets/schoolGate.jpg";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const images = [schoolGate, displayImage1, displayImage2];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Move to next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto-slide effect with pause on hover
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(nextSlide, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Jump to slide
  const goToSlide = (idx) => setCurrentIndex(idx);

  return (
    <div
      className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl group"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          draggable={false}
        />
      ))}

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-20 pointer-events-none" />

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/80 text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition hover:bg-primary hover:text-white z-30"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={22} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/80 text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition hover:bg-primary hover:text-white z-30"
        aria-label="Next Slide"
      >
        <FaChevronRight size={22} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary scale-110 shadow-lg"
                : "bg-white/60 hover:bg-primary/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Optional: Caption or overlay content */}
      {/* <div className="absolute bottom-12 left-8 text-white z-30">
        <h2 className="text-2xl font-bold drop-shadow-lg">Your Caption Here</h2>
      </div> */}
    </div>
  );
};

export default ImageCarousel;