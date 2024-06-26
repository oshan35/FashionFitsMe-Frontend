
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import { NavBarNew } from '../components'
import { Footer } from '../sections'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function OrderSummaryPage() {
  const location = useLocation();
  const [orderDate,setOrderDate]=useState(null);
  const [open, setOpen] = useState(false)
  const [orderDetails, setOrderDetails] = useState([]); 
  const [products,setProducts]= useState([]); 
  const [orderId, setOrderId] = useState(location.state.orderId);

  const [error, setError] = useState(null);

   

  useEffect(() => {
    console.log("order Id sent",orderId)
    const fetchOrderDetails = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/orders/getOrder`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ orderId: orderId })
              });
            if (!response.ok) {
                throw new Error('Could not fetch product details.');
            }
            const data = await response.json();
            console.log('Received order',data);
            setOrderDetails(data); 
        } catch (err) {
            setError(err.message);
        } 
    };
  
    fetchOrderDetails();
}, [orderId]);

useEffect(() => {
  if (orderDetails.products) {
    setProducts(orderDetails.products);
  }
  if (orderDetails.orderDate) {
    setOrderDate(orderDetails.orderDate);
  }
}, [orderDetails]);

let formattedDate = '';
if (orderDate) {
  const date = new Date(orderDate);
  if (!isNaN(date)) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  } else {
    console.error('Invalid date:', orderDate);
  }
}

console.log(formattedDate);

  return (
    <div className="bg-gray-50">

    <NavBarNew/>
      <main className="max-w-2xl mx-auto pt-8 pb-24 sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
          <div className="flex sm:items-baseline sm:space-x-4">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order #{orderId}</h1>
           
          </div>
          <p className="text-sm text-gray-600">
            Order placed {'  '} 
            <time dateTime="2021-03-22" className="font-medium text-black-900">
              { formattedDate}
            </time>
          </p>
         
        </div>

        {/* Products */}
        <section aria-labelledby="products-heading" className="mt-6">
          <h2 id="products-heading" className="sr-only">
            Products purchased
          </h2>

          <div className="space-y-8">
          {orderDetails && orderDetails.products && orderDetails.products.map((item, index) => (
              <div
              key={index}
              className="bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg"
              >
                <div className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                  <div className="sm:flex lg:col-span-7">
                    <div className="flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40">
                      <img
                        src={`data:image/jpeg;base64,${item.product.image}`}
                        className="flex-none w-30 h-full object-center object-cover bg-gray-100 rounded-md"
                        />
                    </div>

                    <div className="mt-6 sm:mt-0 sm:ml-6">
                      <h3 className="text-base font-medium text-gray-900">
                        <a >{item.product.product.productName}</a>
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">${item.product.product.price}</p>
                      <p className="mt-3 text-sm text-gray-500">{item.product.product.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:col-span-5">
                    <dl className="grid grid-cols-2 gap-x-6 text-sm">
                      <div>
                        <dt className="font-medium text-gray-900">Delivery address</dt>
                        <dd className="mt-3 text-gray-500">
                          <span className="block mb-2">{item.deliveryAddress.addressName}</span>
                          <span className="block mb-2">{item.deliveryAddress.street}</span>
                          <span className="block mb-2">{item.deliveryAddress.city}</span>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">Shipping updates</dt>
                        <dd className="mt-3 text-gray-500 space-y-3">
                          <p>{item.email}</p>
                          <p>{item.phone}</p>
                          {/* <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Edit
                          </button> */}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Billing */}
        <section aria-labelledby="summary-heading" className="mt-16">
          <h2 id="summary-heading" className="sr-only">
            Billing Summary
          </h2>

          <div className="bg-gray-100 py-6 px-4 sm:px-6 sm:rounded-lg lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
            <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
              <div>
                <dt className="font-medium text-gray-900">Billing address</dt>
                <dd className="mt-3 text-gray-500">
                  <span className="block mb-2">{orderDetails && orderDetails.deliveryAddress && orderDetails.deliveryAddress.company}</span>
                  <span className="block mb-2">{orderDetails && orderDetails.deliveryAddress && orderDetails.deliveryAddress.street}</span>
                  <span className="block mb-2">{orderDetails && orderDetails.deliveryAddress && orderDetails.deliveryAddress.city}, {orderDetails.deliveryAddress && orderDetails.deliveryAddress.region} Province</span>
                  <span className="block mb-2">Sri Lanka</span>

               
                </dd>
              </div>
             
            </dl>

            <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
             
              <div className="pb-4 flex items-center justify-between">
                <dt className="text-gray-600">Subtotal</dt>
                <dd className="font-medium text-gray-900">LKR { orderDetails.subTotal}</dd>
              </div>
              <div className="py-4 flex items-center justify-between">
                <dt className="text-gray-600">Shipping</dt>
                <dd className="font-medium text-gray-900">LKR { orderDetails.shipping}</dd>
              </div>
              <div className="py-4 flex items-center justify-between">
                <dt className="text-gray-600">Tax</dt>
                <dd className="font-medium text-gray-900">LKR { orderDetails.taxes}</dd>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <dt className="font-medium text-gray-900">Order total</dt>
                <dd className="font-medium text-indigo-600">LKR { orderDetails.total}</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

    </div>
  )
}
