import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Button } from "flowbite-react";

const ProductImageCarousel = ({ image_colors,handleColorClick,image,colors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const nextImage = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const prevImage = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div className=" relative flex w-auto h-auto">
      <div className=" mt-0 h-auto w-1/3">
        {colors.map((color, index) => (
          <img
            key={index}
            // src={image}
            src={`data:image/jpeg;base64,${image_colors[color]}`}    
                    // alt={Thumbnail ${index + 1}}
            onClick={() => handleColorClick(color)}
            className={`h-24 w-24 object-cover rounded-lg mx-1 my-3 cursor-pointer ${
              index === currentIndex ? "border-2 border-blue-500" : ""
            }`}
          />
        ))}
      </div>
      <div className="flex justify-center items-top">
        <Transition
          show={true}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="aspect-h-4 aspect-w-3  overflow-hidden rounded-lg lg:block ">
            <img
              src={image}
            //   alt={Product Image ${currentIndex + 1}}
              className=" w-600px h-600px"
            />
          </div>
        </Transition>
      </div>
      
    </div>
  );
};

export default ProductImageCarousel;