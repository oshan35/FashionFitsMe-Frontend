import { Carousel } from "flowbite-react";
import { carousel2, carousel3, carousel4 } from "../assets/images";

const caroselList = [carousel2, carousel3, carousel4];

const BannerCard = () => {
  return (
    <div className="relative flex-1 flex justify-center xl:min-h-screen max-xl:py-40   bg-primary bg-hero bg-cover bg-center mt-12">
      <Carousel>
        {caroselList.map((carouselItem, index) => (
          <div
            className="object-contain relative flex h-full items-center justify-center"
            key={`${index}-carousel-div`}
          >
            <img
              key={`carousel--${index}`}
              src={carouselItem}
              alt={`carousel-${index}`}
              width={610}
              height={502}
              className="object-contain relative z-10"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCard;
