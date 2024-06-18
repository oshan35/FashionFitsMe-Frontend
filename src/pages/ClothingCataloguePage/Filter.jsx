import React, { useState } from 'react';
import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';
import './Filter.css'
import { Flex } from 'antd';


  function Filter() {

    const [currentFilters, setCurrentFilters] = useState([]);

  // Dummy data for categories
  const categories = {
    color: [
      { uuid: '1', categoryId: 'red', name: 'Red' },
      { uuid: '2', categoryId: 'green', name: 'Green' },
      { uuid: '3', categoryId: 'blue', name: 'Blue' },
      { uuid: '4', categoryId: 'brown', name: 'Brown' },
      { uuid: '5', categoryId: 'black', name: 'Black' },
      { uuid: '6', categoryId: 'orange', name: 'Orange' },
      { uuid: '7', categoryId: 'grey', name: 'Grey' },
      { uuid: '8', categoryId: 'white', name: 'White' },
      { uuid: '9', categoryId: 'navy', name: 'Navy' },
      { uuid: '10', categoryId: 'yellow', name: 'Yellow' },
      { uuid: '11', categoryId: 'pink', name: 'Pink' },
      { uuid: '12', categoryId: 'purple', name: 'Purple' },
      { uuid: '13', categoryId: 'cream', name: 'Cream' },
      { uuid: '14', categoryId: 'multicolour', name: 'Multicolour' },

    ],
    categories: [
      { uuid: '15', categoryId: 'Work Wear', name: 'Work Wea' },
      { uuid: '16', categoryId: 'Dresses', name: 'Dresses' },
      { uuid: '17', categoryId: 'Denims', name: 'Denims' },
      { uuid: '18', categoryId: 'Tops', name: 'Tops' },
      { uuid: '19', categoryId: 'Casuals', name: 'Casuals' },
      { uuid: '20', categoryId: 'Pants', name: 'Pants' },
      { uuid: '21', categoryId: 'Linen', name: 'Linen' },
      { uuid: '22', categoryId: 'Premium Dresses', name: ' Premium Dresses' }
    ],
    gender: [
      { uuid: '23', categoryId: 'men', name: 'Men' },
      { uuid: '24', categoryId: 'women', name: 'Women' },
      { uuid: '25', categoryId: 'kids', name: 'Kids' },
      { uuid: '26', categoryId: 'Unisex', name: 'Unisex' }
    ],
    brand: [
      { uuid: '27', categoryId: 'aldo', name: 'Aldo' },
      { uuid: '28', categoryId: 'adidas', name: 'Adidas' },
      { uuid: '29', categoryId: 'levis', name: 'Levis' },
      { uuid: '30', categoryId: 'odel', name: 'Odel' },
      { uuid: '31', categoryId: 'aldo', name: 'Aldo' },
      { uuid: '32', categoryId: 'polo', name: 'Polo' },
      { uuid: '33', categoryId: 'under armour', name: 'Under Armour' },
      { uuid: '34', categoryId: 'abercrombie and fitch', name: 'Abercrombie And Fitch' },
      { uuid: '35', categoryId: 'gucci', name: 'Gucci' },
      { uuid: '36', categoryId: 'louis vuiton', name: 'Louis Vuiton' },
    ],
    size: [
      { uuid: '37', categoryId: 'UK4', name: 'UK4' },
      { uuid: '38', categoryId: 'UK6', name: 'UK6' },
      { uuid: '39', categoryId: 'UK8', name: 'UK8' },
      { uuid: '40', categoryId: 'UK10', name: 'UK10' },
      { uuid: '41', categoryId: 'UK12', name: 'UK12' },
      { uuid: '42', categoryId: 'UK14', name: 'UK14' },
      { uuid: '43', categoryId: 'UK16', name: 'UK16' },
      { uuid: '44', categoryId: 'UK18', name: 'UK18' },
      { uuid: '45', categoryId: 'UK20', name: 'UK20' },
      { uuid: '46', categoryId: '24', name: '24' },
      { uuid: '47', categoryId: '26', name: '26' },
      { uuid: '48', categoryId: '28', name: '28' },
      { uuid: '49', categoryId: '30', name: '30' },
      { uuid: '50', categoryId: '32', name: '32' },
      { uuid: '51', categoryId: '34', name: '34' },
      { uuid: '52', categoryId: '36', name: '36' },
   
    ]
  };

  // Dummy function to update filters
  const updateFilter = (newFilters) => {
    setCurrentFilters(newFilters);
  };
  return (
    <>
    
    <Flex vertical='vertical' className="filter-item-container">
    <Flex  className="price-filter-container">
      <PriceFilter/>
      </Flex>
      <CategoryFilter
        title="Color"
        currentFilters={currentFilters}
        categories={categories.color}
        updateFilter={updateFilter}
      />
      <CategoryFilter
        title="Size"
        currentFilters={currentFilters}
        categories={categories.size}
        updateFilter={updateFilter}
      />
      <CategoryFilter
        title="Categories"
        currentFilters={currentFilters}
        categories={categories.categories}
        updateFilter={updateFilter}
      />
       <CategoryFilter
        title="Gender"
        currentFilters={currentFilters}
        categories={categories.gender}
        updateFilter={updateFilter}
      />
       <CategoryFilter
        title="Brand"
        currentFilters={currentFilters}
        categories={categories.brand}
        updateFilter={updateFilter}
      />
    </Flex>
</>
);
}

export default Filter;