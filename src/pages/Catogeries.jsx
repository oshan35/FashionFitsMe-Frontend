import { Nav } from "../components";
import { ProductContainer } from "../sections";
import { Footer } from "../sections";

const Catogeries = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding-x py-10">
        <ProductContainer isPage id={"dresses"} heading={"Dresses"} />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Catogeries;
