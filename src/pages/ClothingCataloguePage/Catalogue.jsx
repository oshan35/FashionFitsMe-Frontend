import React, { useState,useContext, useEffect } from 'react';
import './Catalogue.css';
import { Flex, Button, Pagination,Spin } from 'antd';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import filterSortImage from '../../asserts/filter_image.jpeg'
import PriceCard from '../../components/pricecard/pricecard';
import FilterModal from './PopUpPage';
import { FilterContext } from '../../Contexts/FilterContext';
import { useSelectedFilters } from '../../Contexts/SelectedFilterContext';

import Filter from './Filter';
const Catalogue = ({ onClick }) => {
  const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    const [isLoading, setIsLoading] = useState(true);

    const cardsPerPage = 4;
    const rowsPerPage = 4;

    const { selectedFilters, minPrice, maxPrice } = useSelectedFilters();

  const applyFilters = () => {
    setIsLoading(true); // Set loading to true when fetching starts
    
    const filters = { selectedFilters, minPrice, maxPrice };
    console.log('sent to backend',filters)
    fetch(`http://localhost:5000/products/filter-products`, {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters),
      
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        setProducts(data);
        console.log('retrieved products',data)
        setIsLoading(false); // Set loading to false when fetching is done
      })
      .catch((error) => {
        console.error('Error fetching filtered products:', error);
        setIsLoading(false); // Set loading to false in case of error
      });
  };

  useEffect(() => {
    // Call applyFilters function whenever filters change
    applyFilters();
  }, [selectedFilters, minPrice, maxPrice]); // Add filters as dependencies

//   const sendFilterData = async () => {
//     try {
//       const response = await axios.post('/filter', {
//         minPrice,
//         maxPrice,
//         selectedFilters,
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error sending filter data:', error);
//     }
//   };


  

//  useEffect(() => {
//   applyFilters(filters);
//   console.log('  Filtered products at the begining', products);
//  }, []); 

// useEffect(() => {
         
//   applyFilters(filters);
      
//   }, [filters]); 
  

  
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
                <img src={filterSortImage} alt="" className="button-image" /> 
                <span className="button-text">Filter and Sort</span> 
        </div>
        </Button>
        </Flex>
        </Flex>
        {isLoading ? ( 
                <Flex className="loading-container" justify='center' align='center'>
                    <Spin size="large" />
                </Flex>
            ) : (
                <>
                <Flex vertical='vertical' >
                <Flex horizontal='horizontal' classname='main-catalogue-container'>
                <Flex className='catalogue-filter-container'><Filter/></Flex>
               
                   
                <Flex className="cloth-cards-container" wrap="wrap" justify="center" >
                        {products.slice((currentPage - 1) * cardsPerPage * rowsPerPage, currentPage * cardsPerPage * rowsPerPage).map((product) => (
                            <PriceCard style={{ marginBottom: '0px' }}
                                key={product.productId} 
                                itemData={{
                                    productId: product.product.productId,
                                    picture: `data:image/jpeg;base64, ${product.productImages[0].imageData}`,
                                    itemName: product.product.productName,
                                    itemPrice: product.product.price
                                }}
                            />
                        ))}
                    </Flex>
                   
                   
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
                  </Flex>
                </>
            )}

            <Flex>
                <Footer/>
            </Flex>
           
            {/* <FilterModal
                visible={filterModalVisible}
                onCancel={() => setFilterModalVisible(false)}
            /> */}
            
        </>);
// </>);
    
};

export default Catalogue;
