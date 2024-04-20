import React, { useEffect, useState } from "react";
import { CartItemCard,OrderSummaryCard} from "../components";
import { CheckIcon, ClockIcon } from '@heroicons/react/solid'
import { Nav} from "../components";
import { message } from 'antd';




function Cart({customerId}) {
    const [show, setShow] = useState(false);
    const [cartProducts, setCartProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const fetchProductDetails = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:8080/customer/cart/${customerId}`);
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


    const handleRemoveProduct = async (productId) => {
        try {
            const response = await fetch(`http://localhost:8080/customer/cart/${customerId}/remove/${productId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete the product.');
            }
            const deletedProductId = await response.json();
            message.success(`Product with ID ${deletedProductId} was successfully deleted.`);
            
            const updatedProducts = cartProducts.filter(product => product.productId !== productId);
            setCartProducts(updatedProducts);
            calculateSubtotal();
            
        } catch (err) {
            setError(err.message);
        }
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
    };

    return (
        <>
        <Nav/>
        <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
            <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xs">Shopping Cart</h1>

            <form className="mt-12">
            <section aria-labelledby="cart-heading">
                <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
                </h2>

                <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                {cartProducts.map((product)  => (
                    <li key={product.productId} className="flex py-6">
                    <div className="flex-shrink-0">
                        <img
                        src={product.image}
                    
                        className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                        />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                        <div>
                        <div className="flex justify-between">
                            <h4 className="text-sm">
                            <a href={product.image} className="font-medium text-gray-700 hover:text-gray-800">
                                {product.productName}
                            </a>
                            </h4>
                            <p className="ml-4 text-sm font-medium text-gray-900">{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                        </div>

                        <div className="mt-4 flex-1 flex items-end justify-between">
                        <p className="flex items-center text-sm text-gray-700 space-x-2">
                            {product.inStock ? (
                            <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                            ) : (
                            <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                            )}

                            <span>{product.inStock ? 'In stock' : `Will ship in ${18}`}</span>
                        </p>
                        <div className="ml-4">
                            <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500" onClick={() => handleRemoveProduct(product.productId)}>
                            <span>Remove</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
            </section>

            {/* Order summary */}
            <section aria-labelledby="summary-heading" className="mt-10">
                <h2 id="summary-heading" className="sr-only">
                Order summary
                </h2>

                <div>
                <dl className="space-y-4">
                    <div className="flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                    <dd className="ml-4 text-base font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                    </div>
                </dl>
                <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
                </div>

                <div className="mt-10">
                <button
                    type="submit"
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                    Checkout
                </button>
                </div>

                <div className="mt-6 text-sm text-center">
                <p>
                    or{' '}
                    <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500">
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </a>
                </p>
                </div>
            </section>
            </form>
        </div>
        </div>
        </>
    );
}

export default Cart;
