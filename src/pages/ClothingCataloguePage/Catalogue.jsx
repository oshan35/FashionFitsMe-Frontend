import React, { useState, useEffect } from 'react';
import './Catalogue.css';
import { Flex, Button, Pagination } from 'antd';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import filterSortImage from '../../asserts/filter_image.jpeg'
import PriceCard from '../../components/pricecard/pricecard';
import testimg2 from '../../asserts/TOMMY hIGLFIGER1.jpeg'
import FilterModal from './PopUpPage';
const Catalogue = ({ onClick }) => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const cardsPerPage = 4;
    const rowsPerPage = 9;
    ///////////////////////////////////////////////////////////

//     const item = {
//         itemName: 'FAVORITE STRIPE T-SHIRT',
//         itemColour: 'Classic Pink Multi ',
//         itemSize: 'xxs',
//         inStock:'2'
//     };
//     const products = [];
//   for (let i = 0; i < 140; i++) {
    
//     const itemDescription = {
//       itemName: `Item ${i + 1}`,
//       itemColour: 'Test Colour',
//       itemSize: 'Test Size',
//       inStock: 10,
//       itemPrice: "$1000"
//     };
//     products.push({ id: i + 1, picture:testimg2, itemPrice: "$1000",itemName: `Item ${i + 1}`, });
//   }
  /////////////////////////////////////////////////////////////////
    useEffect(() => {
      fetchProducts();
    }, []); 
  
    const fetchProducts = async () => {
      try {
        const response = await fetch('your_api_endpoint_here');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
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
                key={product.id} 
                picture={product.picture} 
                itemName={product.itemName}
                itemPrice={product.itemPrice}
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
        <FilterModal visible={filterModalVisible} onCancel={handleFilterModalCancel} />

</>
    
}
export default Catalogue