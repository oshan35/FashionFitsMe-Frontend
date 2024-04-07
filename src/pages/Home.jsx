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
      {/* <section className="padding-x py-10">
        <ProductContainer id={"tops"} heading={"Women"} title={"brand"}/>
      </section>
      <section className="padding-x py-10">
        <ProductContainer id={"dresses"} heading={"Women"} title={"gender"}  />
      </section> */}
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
