
import { PayAccordion,PaymentGateWayCard,NavBarNew } from "../components"
import { tommyFigure } from "../assets/images"
import { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Footer } from "../sections";
import buttonText from "@material-tailwind/react/theme/components/button/buttonText";


export default function Checkout() {
  const navigate = useNavigate();

  const location = useLocation();
  const { customerId } = location.state;
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [cartProducts, setCartProducts] = useState([]); 
  const [subTotal, setSubtotal] = useState(0);
  const [taxes, setTexes] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const [buttonText, setButtonText] = useState("Pay Now");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleTermsChange = (e) => setTermsChecked(e.target.checked);

  useEffect(() => {
    console.log("custmer id at checkout page:",customerId);
  }, []);
  const [shippingDetails, setShippingDetails] = useState({
    company: "",
    addressName: "",
    street: "",
    city: "",
    region: "",
    postalCode: "",
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/customer/cart/${customerId}`);
            if (!response.ok) {
                throw new Error('Could not fetch product details.');
            }
            const data = await response.json();
            setCartProducts(data); 
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    fetchProductDetails();
}, [customerId]);

useEffect(() => {
    calculateSubtotal();
}, [cartProducts]); 


const handleSelectedDeliveryMethodChange = (method) => {
  setSelectedDeliveryMethod(method);
  if (method.title === 'Standard') {

    setShipping(300); 
  } else if (method.title === 'Express') {
    setShipping(800);
  }
  else{
    console.log(method)

  }
};
const handleRemoveProduct = (productId) => {
    const updatedProducts = cartProducts.filter(product => product.productId !== productId);
    setCartProducts(updatedProducts);
};

const calculateSubtotal = () => {
    const total = cartProducts.reduce((acc, product) => {
        let price = product.price;
        if (typeof price === 'string') {
           
            price = parseFloat(price.replace(/[^\d\.]/g, ''));
        } else if (typeof price !== 'number') {
           
            console.error('Unexpected price format:', price);
            price = 0;
        }
   
        return acc + price;
    }, 0);

    
    setSubtotal(total);
    const calculatedTaxes = total * 0.1;
    setTexes(calculatedTaxes);
};
const calculateTotal = () => {
  const total = subTotal + taxes + shipping;
  setTotal(total);
};
useEffect(() => {
  calculateTotal();
}, [subTotal, taxes, shipping]);

  const deliveryMethods = [
    { id: 1, title: 'Standard', turnaround: '4–10 business days', price: 'LKR 300.00' },
    { id: 2, title: 'Express', turnaround: '2–5 business days', price: 'LKR 800.00' },
  ];
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0].title
  );
  const handleShippingDetailsChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsChecked) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    const paymentData = {
      email,
      phone,
    };

    const formData = {
      ...paymentData,
      shippingDetails,
      selectedDeliveryMethod: selectedDeliveryMethod.title,
      customerId:customerId,
      subTotal:subTotal,
      taxes:taxes,
      shipping:shipping,
      total:total,

    };

    console.log("form data",formData);

    fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Payment details sent successfully");
          return response.json(); 
        } else {
          console.error(
            "Failed to send payment details:",
            response.status
          );
          throw new Error("Failed to send payment details");
        }
      })
      .then((data) => {
        const orderId = data;
        console.log("order id at navigation",orderId)
        navigate("/orderSummary", { state: { orderId } }); 

      })
      .catch((error) => {
        console.error(
          "An error occurred while sending payment details:",
          error
        );
      });
  };


  return (
    <div className="bg-white">
            <NavBarNew />

      <div className="max-w-7xl mx-auto px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>

        <div className="max-w-lg mx-auto grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
        <div className="max-w-lg mx-auto w-full">
            
            <form className="mt-1">
              <h1 className="text-2xl font-medium text-gray-900">Contact information</h1>

              <div className="mt-6">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    autoComplete="email"
                    onChange={handleEmailChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    onChange={handlePhoneChange}
                    autoComplete="tel"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6 flex space-x-2">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    onChange={handleTermsChange}
                 />
                </div>
                <label htmlFor="terms" className="text-sm text-gray-500">
                  I have read the terms and conditions and agree to the sale of my personal information to the highest
                  bidder.
                </label>
              </div>

              {/* <button
                type="submit"
                disabled={!termsChecked}
                className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
              >
                Continue
              </button> */}
            </form>

            
            <div className="mt-10 ">
             
            <PayAccordion
          shippingDetails={shippingDetails}
          selectedDeliveryMethod={selectedDeliveryMethod.title}
          onShippingDetailsChange={handleShippingDetailsChange}
          onSelectedDeliveryMethodChange={handleSelectedDeliveryMethodChange}
          deliveryMethods={deliveryMethods}
          setButtonText={setButtonText}
          disabled={!termsChecked}

        />
            </div>
         
            <div className="mt-10">
               
            
              <div className="mt-10 flex justify-end pt-6 ">
                <button
                  type="submit"
                  className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  onClick={handleSubmit}
                  >
                  {buttonText}
                </button>
              </div>
              </div>
          </div>
          <div className="max-w-lg mx-auto w-full mt-1">
          <h2 className="text-2xl font-medium text-gray-900">Order Summary</h2>

            <div className="flow-root  overflow-y-auto overflow-x-hidden mt-10" id="scroll" style={{ maxHeight: '600px', overflowY: 'auto',scrollbarWidth: ' thin' }}>
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartProducts.map((product) => (
                  <li key={product.productId}  className="py-6 flex space-x-6">
                    <img
                        src={`data:image/jpeg;base64,${product.image}`}
                        alt={product.imageAlt}
                      className="flex-none w-20 h-35 object-center object-cover bg-gray-100 rounded-md"
                    />
                    <div className="flex-auto">
                      <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                        <div className="flex-auto text-sm font-medium space-y-1">
                          <h3 className="text-gray-900">
                            <a href={product.href}>         {product.productName}
</a>
                          </h3>
                          <p className=" text-gray-900 ">LKR{product.price}</p>
                          <p className="hidden text-gray-500 sm:block mt-2">{product.color}</p>
                          <p className="hidden text-gray-500 sm:block">{product.size}</p>
                        </div>
                        <div className="flex-none flex space-x-4 pr-3">
                          {/* <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Edit
                          </button> */}
                          <div className="flex border-l border-gray-300 pl-4 pr-3">
                            {/* <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              Remove
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">{subTotal}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">{taxes}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-gray-900">{shipping}</dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 text-gray-900 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">{total}</dd>
              </div>
            </dl>
          </div>

         
        </div>
       
            
      </div>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section> 
    </div>
  )
}
