import React, { useState } from "react";
import { CartItemCard,OrderSummaryCard} from "../components";
function Cart() {
    const [show, setShow] = useState(false);
    return (
        <>
            {/* <div>
                <div className="flex items-center justify-center py-8">
                    <button onClick={() => setShow(!show)} className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white">
                        Open Modal
                    </button>
                </div>
                {show && (
                    <div className="w-full h-full bg-red bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div" >
                        <div className="bg-red w-full absolute z-10  h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                            <div className="bg-red flex md:flex-row flex-col justify-between pr-12 pl-12" id="cart">
                                <div className=" md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll" > 
                                    <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                        <p className="text-sm pl-2 leading-none">Back</p>
                                    </div>
                                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Bag</p>
                                    <CartItemCard/>
                                    
                                  <CartItemCard/>
                                  <CartItemCard/>
                                </div>
                                <div className="w-1/3 w-full bg-gray-100 h-full " >

                                <div className="pt-10 mt-15 bg-white" >

                                <OrderSummaryCard/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div> */}
             <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #13432</h1>
                <p className="text-base font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">My Cart</p>
                        
                        <CartItemCard/>
                        <CartItemCard/>
                            <CartItemCard/>

                       
                    </div>
                   
                </div>
                <div className="w-2/3 w-full bg-gray-100 h-full " >

                    <div className=" mt-15 bg-white" >

                        <OrderSummaryCard/>
                    </div>
                    <button onClick={() => setShow(!show)} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Checkout
                                            </button>
</div>            </div>
        </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default Cart;
