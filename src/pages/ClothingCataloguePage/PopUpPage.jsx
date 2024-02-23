import React, { useState, useRef } from 'react';
import { Modal, Button, Select } from 'antd';

import './PopUpPage.css'; // Import any necessary CSS

const { Option } = Select;

const FilterModal = ({ visible, onCancel }) => {
  const [dropdownValues, setDropdownValues] = useState({
    // Initialize with placeholder values
    categories: null,
    size: null,
    price: null,
    colour: null,
    material: null,
    brand: null,
  });
  const [extractedOptions, setExtractedOptions] = useState([]);
  const [modalHeight, setModalHeight] = useState(null);

  const dropdownRefs = {
    categories: useRef(null),
    size: useRef(null),
    price: useRef(null),
    colour: useRef(null),
    material: useRef(null),
    brand: useRef(null),
  };

  const handleDropdownChange = (value, dropdownName) => {
    setDropdownValues({ ...dropdownValues, [dropdownName]: value }); // Update selected value
    setExtractedOptions([...extractedOptions, value]); // Track extracted options
    updateModalHeight();
  };

  const updateModalHeight = () => {
    const dropdownHeights = Object.values(dropdownRefs).map((ref) =>
      ref.current ? ref.current.clientHeight : 0
    );
    const averageOptionHeight = dropdownHeights.reduce((sum, height) => sum + height, 0) / dropdownHeights.length;
    const padding = 16; // Adjust padding as needed
    const newHeight = averageOptionHeight * extractedOptions.length + padding;
    setModalHeight(newHeight);
  };
  const TitleSection = () => (
    <div className="custom-modal-title-section">
      <span className="custom-modal-title" >Filter By</span>
    </div>
  );

  return (
    <Modal
    title={<span style={{ fontSize: '35px', color: 'black'}} className='custom-modal-title-section'>Filter By</span>}
  visible={visible}
  onCancel={onCancel}
  footer={[
    <Button key="apply" className='ApplyButton' onClick={onCancel}>
      Apply Filter
    </Button>,
  ]}
>
      {/* Categories dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Categories"
          value={dropdownValues.categories}
          onChange={(value) => handleDropdownChange(value, 'categories')}
          bordered={false}
          ref={dropdownRefs.categories}
        >
          <Option value="category1">Category 1</Option>
          <Option value="category2">Category 2</Option>
          <Option value="category3">Category 3</Option>
        </Select>
      </div>

      {/* Size dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Size"
          bordered={false}
          value={dropdownValues.size}
          onChange={(value) => handleDropdownChange(value, 'size')}
          dropdownMatchSelectWidth={false}
          ref={dropdownRefs.size}
        >
          <Option value="size1">Size 1</Option>
          <Option value="size2">Size 2</Option>
          <Option value="size3">Size 3</Option>
        </Select>
      </div>

      {/* Price dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Price"
          bordered={false}
          value={dropdownValues.price}
          onChange={(value) => handleDropdownChange(value, 'price')}
          dropdownMatchSelectWidth={false}
          ref={dropdownRefs.price}
        >
          <Option value="price1">Price 1</Option>
          <Option value="price2">Price 2</Option>
          <Option value="price3">Price 3</Option>
        </Select>
      </div>

      {/* Colour dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Colour"
          bordered={false}
          value={dropdownValues.colour}
          onChange={(value) => handleDropdownChange(value, 'colour')}
          dropdownMatchSelectWidth={false}
          ref={dropdownRefs.colour}
        >
          <Option value="colour1">Colour 1</Option>
          <Option value="colour2">Colour 2</Option>
          <Option value="colour3">Colour 3</Option>
        </Select>
      </div>

      {/* Material dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Material"
          bordered={false}
          value={dropdownValues.material}
          onChange={(value) => handleDropdownChange(value, 'material')}
          dropdownMatchSelectWidth={false}
          ref={dropdownRefs.material}
        >
          <Option value="material1">Material 1</Option>
          <Option value="material2">Material 2</Option>
          <Option value="material3">Material 3</Option>
        </Select>
      </div>

      {/* Brand dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Brand"
          bordered={false}
          value={dropdownValues.brand}
          onChange={(value) => handleDropdownChange(value, 'brand')}
          dropdownMatchSelectWidth={false}
          ref={dropdownRefs.brand}
        >
          <Option value="brand1">Brand 1</Option>
          <Option value="brand2">Brand 2</Option>
          <Option value="brand3">Brand 3</Option>
        </Select>
      </div>
    </Modal>
  );
};

export default FilterModal;
