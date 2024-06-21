import { Nav,CartItemCard ,NavBarNew} from "../components";
import {
  CustomerReviews,
  Footer,
  Hero,
  ProductContainer,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  MainImage,
  Brands
} from "../sections";
import { useSelectedFilters } from '../Contexts/SelectedFilterContext'
import OrderSummary from "./OrderSummary";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";


const Home = () => {
 
  return (
    <main className="">
     
      <section className="ml-10 ">
        <NavBarNew />    
        </section>
      <section className="mt-0 ">
      <MainImage/>
      </section>
      
       <section className="padding">
        <Brands />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
