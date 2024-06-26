import React from "react";
import { useState } from 'react'
import RadioGroupShipping from "./RadioGroupShipping";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/solid'

 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export function PayAccordion({ 
  shippingDetails, 
  selectedDeliveryMethod, 
  onShippingDetailsChange, 
  onSelectedDeliveryMethodChange,
  deliveryMethods,
  disabled,
  setButtonText
}) {

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

 
  const handleDeliveryMethodChange = (method) => {
    onSelectedDeliveryMethodChange(method);
  };
 
  return (
    <>
     
        <h1 className="text-lg font-medium text-gray-900 ">Payment</h1>
        <section  className="mt-5 mb-3">
              <label  className="text-m font-medium text-gray-500 mb-5">
              All transactions are secure and encrypted.              </label>
              <RadioGroupShipping   disabled={  disabled} setButtonText={setButtonText}/>


            </section>
      


      <h1  className="text-lg font-medium text-gray-900 mt-6"> Shipping Details</h1>
        <section aria-labelledby="shipping-heading" className="mt-5">
              
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                <div className="sm:col-span-3">
                  <label htmlFor="company" className={`block text-sm font-medium text-gray-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    Company
                  </label>
                  <div className="mt-1">
                  <input
                type="text"
                id="company"
                name="company"
                value={shippingDetails.company}
                onChange={onShippingDetailsChange}
                className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={  disabled}
               />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="address" className={`block text-sm font-medium text-gray-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="addressName"
                      name="addressName"
                      value={shippingDetails.addressName}
                      onChange={onShippingDetailsChange}
                      autoComplete="street-address"
                      className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={  disabled}
                      />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="apartment" className={`block text-sm font-medium text-gray-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
Street                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="street"
                      name="street"
                      value={shippingDetails.street}
                      onChange={onShippingDetailsChange}
                      className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={  disabled}
                      />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className={`block text-sm font-medium text-gray-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={shippingDetails.city}
                      onChange={onShippingDetailsChange}
                      autoComplete="address-level2"
                      className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={  disabled}
                      />
                  </div>
                </div>

                <div>
                  <label htmlFor="region" className={`block text-sm font-medium text-gray-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="region"
                      name="region"
                      value={shippingDetails.region}
                      onChange={onShippingDetailsChange}
                      autoComplete="address-level1"
                      className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={  disabled}
                      />
                  </div>
                </div>

                <div>
                  <label htmlFor="postalCode"className={`block text-sm font-medium text-gray-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={shippingDetails.postalCode}
                      onChange={onShippingDetailsChange}
                      autoComplete="postalCode"
                      
                      disabled={  disabled}
                      className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                  </div>
                </div>
              </div>
            </section>
           
        <div className="mt-1  pt-1">
      
              <RadioGroup
  className={`mt-5 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
  value={selectedDeliveryMethod} onChange={handleDeliveryMethodChange}>
                <RadioGroup.Label className="text-lg font-medium text-gray-900 ">Delivery method</RadioGroup.Label>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  {deliveryMethods.map((deliveryMethod) => (
                    <RadioGroup.Option
                    disabled={  disabled}

                      key={deliveryMethod.id}
                      value={deliveryMethod}
                      className={({ checked, active }) =>
                        classNames(
                          checked ? ' bg-indigo-600 border-transparent' : '',
                          active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                          'relative bg-white border rounded-lg  p-4 flex cursor-pointer focus:outline-none'

                          )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <div className="flex-1 flex">
                            <div className="flex flex-col">
                              <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                                {deliveryMethod.title}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className="mt-1 flex items-center text-sm text-gray-500"
                              >
                                {deliveryMethod.turnaround}
                              </RadioGroup.Description>
                              <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                                {deliveryMethod.price}
                              </RadioGroup.Description>
                            </div>
                          </div>
                          {checked ? <CheckCircleIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" /> : null}
                          <div
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked ? 'border-indigo-500' : 'border-transparent',
                              'absolute -inset-px rounded-lg pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
      
    </>
  );
}