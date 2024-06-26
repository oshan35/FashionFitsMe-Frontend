import { CheckIcon } from '@heroicons/react/outline';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { NavBarNew } from "../components";
import { Footer } from '../sections';

export default function OrderHistory() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]); 
  const [customerId, setCustomerId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    async function fetchCustomerId() {
      try {
        const sessionId = localStorage.getItem('sessionData');
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/customer/getCustomerId`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionId}`,
          },
        });

        if (response.ok) {
          const cusId = await response.json();
          setCustomerId(cusId);
        } else {
          console.error('Failed to get customer ID:', response.status);
        }
      } catch (error) {
        console.error('An error occurred while fetching the customer ID:', error);
      }
    }

    fetchCustomerId();
  }, []);

  useEffect(() => {
    if (!customerId) return; 

    console.log("customer Id sent to backend", customerId);

    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://54.191.229.94:5000/orders/customer/${customerId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Could not fetch order details.');
        }
        const data = await response.json();
        console.log('Received order summary', data);
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchOrderDetails();
  }, [customerId]);

  const handleButtonClick = (orderId) => {
    navigate("/orderSummary", { state: { orderId } }); 
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (!isNaN(date)) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    } else {
      console.error('Invalid date:', dateString);
      return '';
    }
  };

  if (loading) { // Show loading indicator while loading
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden"></span>
          </div>
          <p className="mt-2 text-gray-500">Loading orders...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="">
      <section className="ml-10 ">
        <NavBarNew />    
      </section>
      <section className="mt-0 ">
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 sm:px-6 sm:py-24">
            <div className="px-4 sm:px-0">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
              <p className="mt-2 text-sm text-gray-500">
                Check the status of recent orders, manage returns, and download invoices.
              </p>
            </div>

            <div className="mt-16">
              <h2 className="sr-only">Recent orders</h2>

              <div className="space-y-16 sm:space-y-24">
                {orders && orders.map((order) => (
                  <div key={order.orderId} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="sr-only">Order placed on </h3>

                    <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                      <dl className="divide-y divide-gray-200 space-y-4 text-sm text-gray-600 flex-auto md:divide-y-0 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                        <div className="flex justify-between md:block">
                          <dt className="font-medium text-gray-900">Order number</dt>
                          <dd className="md:mt-1">{order.orderId}</dd>
                        </div>
                        <div className="flex justify-between pt-4 md:block md:pt-0">
                          <dt>Placed On</dt>
                          <dd className="md:mt-1">{formatDate(order.orderDate)}</dd>
                        </div>
                        <div className="flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0">
                          <dt>Total amount</dt>
                          <dd className="md:mt-1">{order.total}</dd>
                        </div>
                      </dl>
                      <div className="space-y-4 mt-6 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">
                        <a
                          onClick={() => handleButtonClick(order.orderId)}
                          className="w-full flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto"
                        >
                          View Order
                          <span className="sr-only">{order.orderId}</span>
                        </a>
                      </div>
                    </div>

                    <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
                      <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
                        {order.products.map((item, index) => (
                          <div key={item.product.product.productName} className="flex py-6 sm:py-10">
                            <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                              <div className="lg:flex-1">
                                <div className="sm:flex">
                                  <div>
                                    <h4 className="font-medium text-gray-900">{item.product.product.productName}</h4>
                                    <p className="hidden mt-2 text-sm text-gray-500 sm:block">{item.product.product.description}</p>
                                  </div>
                                  <p className="mt-1 font-medium text-gray-900 sm:mt-0 sm:ml-6">{item.product.product.price}</p>
                                </div>
                                <div className="mt-2 flex text-sm font-medium sm:mt-4">
                                  <a className="text-indigo-600 hover:text-indigo-500">
                                    View Product
                                  </a>
                                  <div className="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                                    <a className="text-indigo-600 hover:text-indigo-500">
                                      Buy Again
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-6 font-medium">
                                {order.status === 'Delivered' ? (
                                  <div className="flex space-x-2">
                                    <CheckIcon className="flex-none w-6 h-6 text-green-500" aria-hidden="true" />
                                    <p>Delivered</p>
                                  </div>
                                ) : order.status === 'Shipped' ? (
                                  <p>Out for delivery</p>
                                ) : order.status === 'Cancelled' ? (
                                  <p className="text-gray-500">Cancelled</p>
                                ) : null}
                              </div>
                            </div>
                            <div className="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
                              <img
                                src={`data:image/jpeg;base64,${item.product.image}`}
                                className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
