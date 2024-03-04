import React, { useState, useEffect } from 'react';
import './Catalogue.css';
import { Flex, Button, Pagination } from 'antd';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import filterSortImage from '../../asserts/filter_image.jpeg'
import PriceCard from '../../components/pricecard/pricecard';
import FilterModal from './PopUpPage';
const Catalogue = ({ onClick }) => {
    const [products, setProducts] = useState([]);
    const [productImages, setProductImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [selectedFilters, setSelectedFilters] = useState({
      categories: null,
      size: null,
     price:null,
      color: null,
      gender: null,
      brand: null,
  });

    const cardsPerPage = 4;
    const rowsPerPage = 1;

    const updateSelectedFilters = (filters) => {
      setSelectedFilters(filters);
      console.log('Selected filters', filters);
  };
  
  // const applyFilters = (filters) => {
  //     const filtered = products.filter(product => {
  //         return (
  //             (!filters.categories || product.category === filters.categories) &&
  //             (!filters.size || product.size === filters.size) &&
  //             (!filters.brand || product.brand === filters.brand) &&
  //             (!filters.price || product.price === filters.price) &&
  //             (!filters.gender || product.gender === filters.gender) &&
  //             (!filters.color || product.color === filters.color)
  //         );
  //     });
  
  //     // Set filtered products
  //     setFilteredProducts(filtered);
  //     console.log('Filtered data', filteredProducts);
  //     // Hide filter modal
  //     setFilterModalVisible(false);
  // };

  const applyFilters = (filters) => {
    setSelectedFilters(filters);
    
    fetch(`http://localhost:5000/products/filter`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filters),
    })
    .then(response => response.json())
    .then(data => {
        // Handle filtered products data
        console.log(data);
        setProducts(data); 
    })
    .catch(error => {
        console.error('Error fetching filtered products:', error);
    });
};

useEffect(() => {
  console.log('Filtered data', selectedFilters);
 }, [selectedFilters]); 
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:5000/products');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const cartProducts = await response.json();
          console.log('Cart products:', cartProducts);
          setProducts(cartProducts); 
    
          const productImagePromises = cartProducts.map(product => fetchProductImages(product.productId));
          const productImages = await Promise.all(productImagePromises);
         // console.log('Product images:', productImages);
    
          const imageMap = {};
          productImages.forEach(({ productId, data }) => {
            if (data.length > 0) {
              imageMap[productId] = data[0]; // Set the first image only
            }
          });
    
         // console.log('Product image map:', imageMap);
          if (Object.keys(imageMap).length > 0) {
            setProductImages(imageMap);
          } else {
            console.error('No product images found.');
          }

        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      
      const fetchProductImages = async (productId) => {
        try {
          const response = await fetch(`http://localhost:5000/product-images/getImage/${productId}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch image data for product ${productId}`);
          }
          const data = await response.json();
         // console.log('Product image data for', productId, ':', data);
          
          return { productId, data}; // Return an object with productId and imageData
        } catch (error) {
          console.error('Error fetching product image:', error);
          return { productId, data: null }; 
        }
      };
      
      
      fetchProducts();
      
    }, []); 
  

  
    const indexOfLastProduct = currentPage * cardsPerPage * rowsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - cardsPerPage * rowsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    // Calculate total number of pages
    const totalPages = Math.ceil(products.length / (cardsPerPage * rowsPerPage));
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    const handleFilterButtonClick = () => {
        setFilterModalVisible(true);
      };
    
      const handleFilterModalCancel = () => {
        setFilterModalVisible(false);
      };


    return <>
    <Flex vertical="vertical" className="catalogue-container">
         <Flex  className="catlogue-nav-container">
            <Navbar className="nav-item"/>
        </Flex>
        <Flex  className="filter-container" >
        <Button className="rectangular-button" onClick={handleFilterButtonClick}>

            <div className="button-content">
                <img src={filterSortImage} alt="" className="button-image" /> {/* Set image height to 100% */}
                <span className="button-text">Filter and Sort</span> {/* Centered text */}
        </div>
        </Button>
        </Flex>
        </Flex>
        {/* Cloth cards */}
        <Flex className="cloth-cards-container" wrap="wrap" justify="center">
        {products.slice((currentPage - 1) * cardsPerPage * rowsPerPage, currentPage * cardsPerPage * rowsPerPage).map((product) => (
            <PriceCard
            itemData={{
              picture: `data:image/jpeg;base64, ${productImages[product.productId]}`,
              itemName: product.productName,
              itemPrice: product.price
          }}
            />
          ))}
        </Flex>
        <Flex className="page-bar-container" justify="center">
          <Pagination
            current={currentPage}
            onChange={handlePageChange}
            total={products.length}
            pageSize={cardsPerPage * rowsPerPage}
            showSizeChanger={false}
          />
        </Flex>
        <Flex  >
            <Footer/>
        </Flex>
        <FilterModal
                visible={filterModalVisible}
                onCancel={() => setFilterModalVisible(false)}
                updateSelectedFilters={updateSelectedFilters} 
                applyFilters={applyFilters} 
                selectedFilters={selectedFilters}
            />
</>
    
}
export default Catalogue