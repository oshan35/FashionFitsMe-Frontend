import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const settings = [
  { name: 'Payment VISA/MASTER/UNION PAY', description: 'After clicking “Pay now”, you will be redirected to Pay with Debit or Credit Card to complete your purchase securely.' },
  { name: 'Cash On Delivery', description: 'Cash on Delivery is exclusively available to customers in Sri Lanka. Do not use this payment method if you are living outside of this County, as your order will not be processed.' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function RadioGroupShipping({disabled,setButtonText}) {
  const [selected, setSelected] = useState(settings[0])
 
  
  const handleOnChange = (selectedOption) => {
    setSelected(selectedOption);
    if (selectedOption.name === "Payment VISA/MASTER/UNION PAY") {
      setButtonText("Pay Now");
    } else if (selectedOption.name === "Cash On Delivery") {
      setButtonText("Complete order");
    }
  };
  return (
    <RadioGroup value={selected}       onChange={handleOnChange}
    className={`mt-5 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
    >
      <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
      <div className="bg-white rounded-md -space-y-px mt-3">
        {settings.map((setting, settingIdx) => (
          <RadioGroup.Option
            key={setting.name}
            value={setting}
            disabled={  disabled}

            className={({ checked }) =>
              classNames(
                settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                'relative border p-4 flex cursor-pointer focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                    active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                    'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-3.5 h-3.5" />
                </span>
                <div className="ml-3 flex flex-col ">
                  <RadioGroup.Label
                    as="span"
                    className={classNames(checked ? 'text-indigo-900' : 'font-medium text-gray-900 dark:text-gray-300', 'block text-sm font-medium mb-3')}
                  >
                    {setting.name}
                  </RadioGroup.Label>
                  <RadioGroup.Description
                    as="span"
                    className={classNames(checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm')}
                  >
                    {setting.description}
                  </RadioGroup.Description>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
