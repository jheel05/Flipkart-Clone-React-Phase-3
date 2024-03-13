import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect } from "react";
import { images } from "./imageSlider";
import Button from "../Button/Button";

function Slider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const length = images.length;
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + length) % length);
  };

  useEffect(() => {
    let intervalTimer;
    if (!isHovering) {
      intervalTimer = setInterval(() => {
        nextImage();
      }, 2500);
    }

    return () => {
      clearInterval(intervalTimer);
    };
  }),
    [isHovering, currentImage];

  return (
    <div
      className="flex  overflow-hidden relative mx-4"
      onMouseLeave={() => setIsHovering(false)}
      onMouseEnter={() => setIsHovering(true)}
    >
      {/* Image container */}
      <div
        className="w-full h-fit flex transition-transform ease-in-out duration-300 transform -translate-x-full"
        style={{ transform: `translateX(${-currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[180px] md:h-full"
          />
        ))}
      </div>
      {/* Carousel indicators */}
      <div className="flex justify-center space-x-2 absolute bottom-0 left-0 right-0 mb-4 ">
        {images.map((_, index) => (
          <span
            key={index}
            className={`inline-block h-1 w-2 rounded-full ${
              currentImage === index ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>

      {/* Slider button container */}
      <div className="w-full h-fit flex justify-between absolute left-0 top-[50%] translate-y-[-50%]">
        <Button
          onClick={prevImage}
          className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[2px] py-3 sm:px-1 sm:py-5 lg:px-3 lg:py-9 rounded-r-sm cursor-pointer"
        >
          <FaAngleLeft />
        </Button>
        <Button
          onClick={nextImage}
          className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[2px] py-3 sm:px-1 sm:py-5 lg:px-3 lg:py-9 rounded-l-sm cursor-pointer"
        >
          <FaAngleRight />
        </Button>
      </div>
    </div>
  );
}

export default Slider;
