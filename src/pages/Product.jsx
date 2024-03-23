import { Nav, ViewProduct } from "../components";
import { Footer } from "../sections";
import { useParams } from "react-router-dom"; // Import useParams
const Product = () => {
  const { productId } = useParams();  console.log('product Id at the product page',productId)

  return (

    <main className="relative">
      <Nav />
      <section className="padding-x py-10">
      <ViewProduct productId={productId} />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Product;


