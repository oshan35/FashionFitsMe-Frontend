import { useEffect, useState } from "react";
import { QuickProductView } from "../components";
import { useSelectedFilters } from '../Contexts/SelectedFilterContext'
import { Spin,Flex, } from 'antd';



const ProductContainer = ({title, heading, id, isPage }) => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const rowsPerPage = 4;
  const indexOfLastProduct = currentPage * cardsPerPage * rowsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - cardsPerPage * rowsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total number of pages
  const totalPages = Math.ceil(products.length / (cardsPerPage * rowsPerPage));

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

 

  const getProducts = (title, heading) => {
    setIsLoading(true); 
    
    const filter = {
      title: title,
      category: heading
    };
    console.log('sent to backend',filter)
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/getHomeProducts`, {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filter)
      
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        setProducts(data);
        console.log('retrieved products',data)
        console.log(typeof products);
  
        setIsLoading(false); // Set loading to false when fetching is done
      })
      .catch((error) => {
        console.error('Error fetching filtered products:', error);
        setIsLoading(false); // Set loading to false in case of error
      });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

 
  useEffect(() => {
    
    getProducts(title, heading);
  }, []); 

  return (
    <>
    {isLoading ? ( 
      <Flex className="loading-container" justify='center' align='center'>
          <Spin size="large" />
      </Flex>
  ) : (
    <>
    <section
      id={id}
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container text-center"
    >
      {/* Product List */}
      <div className="bg-white">
        {!isPage && (
          <div className="flex flex-col justify-start gap-5">
            <h2 className="text-3xl font-palanquin font-bold">{heading}</h2>
            <div className="border-4 border-black w-10 self-center" />
          </div>
        )}

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.slice((currentPage - 1) * cardsPerPage * rowsPerPage, currentPage * cardsPerPage * rowsPerPage).map((product) => (
              <div
                key={product.product.productId}
                className="group cursor-pointer"
                onClick={() => handleProductClick(product.product.productId)}
                onMouseEnter={() => setHoveredProductId(product.product.productId)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={
                      hoveredProductId === product.product.productId
                        ? `data:image/jpeg;base64, ${product.productImages[0].imageData}`
                        : `data:image/jpeg;base64, ${product.productImages[0].imageData}`
                    }
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center transition-opacity duration-300 ease-in-out"
                  />
                </div>
                <h3 className="mt-4 text-[19px] font-bold text-gray-700">
                  {product.product.productName}
                </h3>
                <h4 className=" text-[16px] font-bold text-gray-900">
                  {product.product.productId}
                </h4>
                <p className="mt-2 text-lg font-medium text-gray-500">
                  {product.product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Product View */}
      {selectedProduct && (
        <QuickProductView
          open={open}
          setOpen={setOpen}
          productData={selectedProduct}
        />
    )}
    </section>
    </>
  )}
   
    </>   
  );
};

export default ProductContainer;
