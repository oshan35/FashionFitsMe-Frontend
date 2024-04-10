import { Nav, ViewProduct ,NavBarNew} from "../components";
import { Footer } from "../sections";
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";
import { navigation } from "../constants";
import { Fragment, useState } from 'react'

import { useParams } from "react-router-dom"; // Import useParams
const Product = () => {
  const navigate = useNavigate();
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const { productId } = useParams();  console.log('product Id at the product page',productId)
  const [open, setOpen] = useState(false)
  const handleNavbarrButtonClick = (label1,label2, topic1,topic2) => {
    console.log('clicked button on navbar');
    navigate("/catogeries", { state: { label1,label2, topic1,topic2 } }); 
  };

  return (
    <div className="bg-white">
 


    <main className="relative">
      {/* <NavBarNew /> */}
      <section className="">
      <ViewProduct productId={productId} />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
    </div>

  );
};

export default Product;


