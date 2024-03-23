/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Black Basic Tee',
      price: '$32',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
      imageAlt: "Model wearing women's black cotton crewneck tee.",
    },
    {
        id: 1,
        name: 'Black Basic Tee',
        price: '$32',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
        imageAlt: "Model wearing women's black cotton crewneck tee.",
      },
      {
        id: 1,
        name: 'Black Basic Tee',
        price: '$32',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
        imageAlt: "Model wearing women's black cotton crewneck tee.",
      },
      {
        id: 1,
        name: 'Black Basic Tee',
        price: '$32',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
        imageAlt: "Model wearing women's black cotton crewneck tee.",
      },
      {
        id: 1,
        name: 'Black Basic Tee',
        price: '$32',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
        imageAlt: "Model wearing women's black cotton crewneck tee.",
      },
    // More products...
  ]
  
  export default function PriceCardNew({products}) {
    return (
         
        <div className="bg-white w-full">
        {/* <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"> */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-3">      {products.map((product) => (
        <div key={product.id} className="flex flex-col items-center space-y-4">
          <div className="w-50 h-62   rounded-lg overflow-hidden group-hover:opacity-75">
            <img
                    src={`data:image/jpeg;base64, ${product.productImages[0].imageData}`}
                    alt={product.product.productId}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.product.productName}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.product.price}</p>
              </div>
            ))}
          </div>
          {/* </div> */}
          </div>
  
         
     
    )
  }
  