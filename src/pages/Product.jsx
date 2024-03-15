import { Nav, ViewProduct } from "../components";
import { Footer } from "../sections";

const Product = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding-x py-10">
        <ViewProduct />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Product;
