
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/solid'

const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
]
const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
]
const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' },
]
export default function PaymentGateWayCard() {
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])
  
    return (

    
     <>
     <div className="mt-10 border-t border-gray-200 pt-10">
     <h2 className="text-lg font-medium text-gray-900">Payment</h2>

     <fieldset className="mt-4">
       <legend className="sr-only">Payment type</legend>
       <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
         {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
           <div key={paymentMethod.id} className="flex items-center">
             {paymentMethodIdx === 0 ? (
               <input
                 id={paymentMethod.id}
                 name="payment-type"
                 type="radio"
                 defaultChecked
                 className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
               />
             ) : (
               <input
                 id={paymentMethod.id}
                 name="payment-type"
                 type="radio"
                 className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
               />
             )}

             <label htmlFor={paymentMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
               {paymentMethod.title}
             </label>
           </div>
         ))}
       </div>
     </fieldset>

     <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
       <div className="col-span-4">
         <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
           Card number
         </label>
         <div className="mt-1">
           <input
             type="text"
             id="card-number"
             name="card-number"
             autoComplete="cc-number"
             className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
           />
         </div>
       </div>

       <div className="col-span-4">
         <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
           Name on card
         </label>
         <div className="mt-1">
           <input
             type="text"
             id="name-on-card"
             name="name-on-card"
             autoComplete="cc-name"
             className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
           />
         </div>
       </div>

       <div className="col-span-3">
         <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
           Expiration date (MM/YY)
         </label>
         <div className="mt-1">
           <input
             type="text"
             name="expiration-date"
             id="expiration-date"
             autoComplete="cc-exp"
             className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
           />
         </div>
       </div>

       <div>
         <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
           CVC
         </label>
         <div className="mt-1">
           <input
             type="text"
             name="cvc"
             id="cvc"
             autoComplete="csc"
             className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
           />
         </div>
       </div>
     </div>
   </div>
 </>
    )}