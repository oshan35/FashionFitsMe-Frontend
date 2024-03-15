import { Button, BannerCard } from "../components";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-9">
          <p className="text-xl font-montserrat text-secondary">
            Our Summer collections
          </p>

          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative pr-0">
              The Folkore
            </span>
            <br />
            <span className="font-pinyon  text-[56px]  text-secondary inline-block mt-3">
              Fashion Store
            </span>
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Fashion Store arrivals, quality comfort, and
            innovation for your active life.
          </p>

          <Button label="Shop now" iconURL={arrowRight} />
        </div>
        <BannerCard />
      </section>
    </>
  );
};

export default Hero;
