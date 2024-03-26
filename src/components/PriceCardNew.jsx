import React, {useEffect, useState} from "react";
import QuickProductView from "./QuickViewProduct";
  
  export default function PriceCardNew({product}) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [open, setOpen] = useState(false);
    const handleProductClick = (product) => {
      console.log("selected product",product)
      setSelectedProduct(product);
      setOpen(true);
    };
    return (
         <>
        <div className="bg-white ">
            <div key={product.product.productId} className="flex flex-col items-center space-y-4"
            onClick={() => handleProductClick(product.product.productId)}
            >
                      <div className="w-58 h-72 rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                        src={`data:image/jpeg;base64, ${product.productImages[0].imageData}`}
                        alt={product.product.productId}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    {/* <h3 className="mt-4 text-base font-semibold text-gray-900">
                      <a href={product.href}>
                        <span className="absolute inset-0" />
                        {product.product.productName}
                      </a>
                    </h3> */}
                    <h3 className="mt-4 font-medium text-gray-900">{product.product.productName}</h3>

                    <p className="mt-1 text-sm text-gray-500">{product.product.price}</p>
                  </div>
          </div>

          
  {/* Quick Product View */}
  {selectedProduct && (
        <QuickProductView
          open={open}
          setOpen={setOpen}
          productId={selectedProduct}
        />
    )}
         
     </>
    )
  }
  