import React, { useState, useEffect } from 'react';
import { Modal, Button, Select } from 'antd';

import './PopUpPage.css'; // Import any necessary CSS

const { Option } = Select;

const FilterModal = ({ visible, onCancel,updateSelectedFilters, applyFilters,selectedFilters }) => {

  const [selectedFiltersInternal, setSelectedFiltersInternal] = useState(selectedFilters);
   // Update selected filters when the prop changes
   useEffect(() => {
    setSelectedFiltersInternal((prevFilters) => ({
      ...prevFilters,
      ...selectedFilters,
    }));
  }, [updateSelectedFilters]);

  const handleDropdownChange = (value, dropdownName) => {
    // Update selected filters state
    setSelectedFiltersInternal((prevFilters) => ({
      ...prevFilters,
      [dropdownName]: value,
    }));

    // Update the prop for parent component
    updateSelectedFilters(selectedFilters); // Pass updated selectedFilters back
  };

  const handleApplyFilters = () => {
    // Apply filters
    applyFilters(selectedFilters);

    // Close modal
    onCancel();
  };


  return (
    <Modal
    title={<span style={{ fontSize: '35px', color: 'black'}} className='custom-modal-title-section'>Filter By</span>}
  visible={visible}
  onCancel={onCancel}
  footer={[
    <Button key="apply" className='ApplyButton' onClick={handleApplyFilters}>
    Apply Filter
    </Button>,
  ]}
>
      {/* Categories dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="categories"
          value={selectedFiltersInternal.categories}
          onChange={(value) => handleDropdownChange(value, 'categories')}
          bordered={false}
        >
          <Option value="Jeans">Jeans</Option>
          <Option value="Pants">Pants</Option>
          <Option value="Polos">Polos</Option>
          <Option value="Shirts">Shirts</Option>
          <Option value="Shorts">Shorts</Option>
          <Option value="T-shirts">T-Shirts</Option>
        

        </Select>
      </div>

      {/* Size dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Size"
          bordered={false}
          value={selectedFiltersInternal.size}
          onChange={(value) => handleDropdownChange(value, 'size')}
        > 
          <Option value="sizeXXS">XXS</Option>
          <Option value="size1XS">XS</Option>
          <Option value="sizeS">S</Option>
          <Option value="M">M</Option>
          <Option value="sizeL">L</Option>
          <Option value="sizeXL">XL</Option>
          <Option value="sizeXXL">XXL</Option>
         
            </Select>
      </div>

      {/* Price dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Price"
          bordered={false}
          value={selectedFiltersInternal.price}
          onChange={(value) => handleDropdownChange(value, 'price')}
          
        >
          <Option value="less than 1000">less than 1000</Option>
          <Option value="1000-5000">1000-5000</Option>
          <Option value="5000-10000">5000-10000</Option>
          <Option value="10000-15000">10000-15000</Option>
          <Option value="more than 15000">more than 15000</Option>
        </Select>
      </div>

      {/* Colour dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Colour"
          bordered={false}
          value={selectedFiltersInternal.colour}
          onChange={(value) => handleDropdownChange(value, 'colour')}
         
        >
          <Option value="Red">Red</Option>
          <Option value="Blue">Blue</Option>
          <Option value="Green">Green</Option>
          <Option value="Black">Black</Option>
          <Option value="Grey">Grey</Option>
          <Option value="Navy">Navy</Option>
          <Option value="Brown">Brown</Option>
          <Option value="Orange">Orange</Option>
          <Option value="White">White</Option>
          <Option value="Yellow">Yellow</Option>
          <Option value="Purple">Purple</Option>


        </Select>
      </div>

      {/* Gender dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Gender"
          bordered={false}
          value={selectedFiltersInternal.categories}
          onChange={(value) => handleDropdownChange(value, 'gender')}
        >
          <Option value="Men">Men</Option>
          <Option value="Women">Women</Option>
          <Option value="Unisex">Unisex</Option>
          <Option value="Kids">Kids</Option>
        </Select>
      </div>

      {/* Brand dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Brand"
          bordered={false}
          value={selectedFiltersInternal.brand}
          onChange={(value) => handleDropdownChange(value, 'brand')}
          
        >
          <Option value="Nike">Nike</Option>
          <Option value="Adidas">Adidas</Option>
          <Option value="Puma">Puma</Option>
          <Option value="Carnage">Carnage</Option>
          <Option value="Odel">Odel</Option>
        </Select>
      </div>
    </Modal>
  );
};

export default FilterModal;
