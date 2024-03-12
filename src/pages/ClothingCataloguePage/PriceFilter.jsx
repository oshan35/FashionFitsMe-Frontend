import React from 'react';
import { useSelectedFilters } from '../../Contexts/SelectedFilterContext';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Flex } from 'antd';

export default function PriceFilter() {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = useSelectedFilters();

  const handleChange = (event, newValue) => {
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
    console.log("Selected Price Range:", newValue);
  };

  const valuetext = (value) => {
    return `LKR ${value}`;
  };

  return (
    <Flex vertical='vertical' className="filter-item-title1">
      <div className="font-medium">Price  (LKR)</div>
      
      <Box sx={{ width: 200, marginLeft: 2 }}>
        <Slider
          size="small"
          sx={{
            width: 200,
            color: 'black',
            '& .MuiSlider-thumb': {
              borderRadius: '0.3px',
            },
          }}
          getAriaLabel={() => 'Temperature range'}
          value={[minPrice, maxPrice]}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={500} 
          max={30000} 
        />
      </Box>
    </Flex>
  );
}
