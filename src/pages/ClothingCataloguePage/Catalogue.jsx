import React, { useState,useContext, useEffect } from 'react';
import './Catalogue.css';
import { Flex, Button, Pagination } from 'antd';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import filterSortImage from '../../asserts/filter_image.jpeg'
import PriceCard from '../../components/pricecard/pricecard';
import FilterModal from './PopUpPage';
import { FilterContext } from '../../Contexts/FilterContext';

const Catalogue = ({ onClick }) => {
   
    const [products, setProducts] = useState([]);
    const [productImages, setProductImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const { filters } = useContext(FilterContext);

    const cardsPerPage = 4;
    const rowsPerPage = 1;

    const applyFilters = (filters) => {
    
      fetch(`http://localhost:5000/products/filter`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(filters),
      })
      .then(response => response.json())
      .then(data => {
        
          setProducts(data); 
          console.log('fetched data',data);
      })
      .catch(error => {
          console.error('Error fetching filtered products:', error);
      });
  };


  

 useEffect(() => {
  applyFilters(filters);
  console.log('  Filtered products at the begining', products);
 }, []); 

useEffect(() => {
         
  applyFilters(filters);
      
  }, [filters]); 
  

  
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

    
    return( <>
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
              productId:product.product.productId,
              picture: `data:image/jpeg;base64, ${product.productImages[0].imageData}`,
              itemName: product.product.productName,
              itemPrice: product.product.price
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
            />
            
</>);
    
};

export default Catalogue;
