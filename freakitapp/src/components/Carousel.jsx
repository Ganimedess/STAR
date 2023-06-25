import { useState } from 'react';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <div className="flex justify-center items-center h-[300px] max-w-full overflow-hidden relative">
      <button
        className="btn z-50 text-white font-bold text-xl absolute left-[3%] transform -translate-y-1/2"
        onClick={prevSlide}
      >
        &lt;
      </button>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`w-fit max-w-full absolute items-center justify-center transition-all duration-500 transform ${
            index === currentIndex ? 'scale-100' : 'scale-90'
          } ${
            index === currentIndex - 1 || (currentIndex === 0 && index === slides.length - 1)
              ? '-translate-x-full text-secondary'
              : index === currentIndex + 1 || (currentIndex === slides.length - 1 && index === 0)
              ? 'translate-x-full text-secondary'
              : index !== currentIndex
              ? 'hidden' : 'text-primary'
          }`}
        >
          {slide}
        </div>
      ))}

      <button
        className="btn z-50 text-white font-bold text-xl absolute right-[3%] transform -translate-y-1/2"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;