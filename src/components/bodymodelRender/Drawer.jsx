

import React, { useEffect, useState } from 'react';
import { Drawer as AntDrawer, Select, Slider, Button } from 'antd';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useNavigate } from 'react-router-dom';
import BodyModel from './bodymodel';

const { Option } = Select;

const measurementLabels = {
  ankle_circumference: 'Ankle Circumference',
  arm_length: 'Arm Length',
  bicep_circumference: 'Bicep Circumference',
  calf_circumference: 'Calf Circumference',
  chest_circumference: 'Chest Circumference',
  forearm_circumference: 'Forearm Circumference',
  head_circumference: 'Head Circumference',
  hip_circumference: 'Hip Circumference',
  inside_leg_length: 'Inside Leg Length',
  neck_circumference: 'Neck Circumference',
  shoulder_breadth: 'Shoulder Breadth',
  shoulder_to_crotch: 'Shoulder to Crotch',
  thigh_circumference: 'Thigh Circumference',
  waist_circumference: 'Waist Circumference',
  wrist_circumference: 'Wrist Circumference'
};

const CustomDrawer = ({ isOpen, onClose }) => {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [customerId, setCustomerId] = useState(null);
  const [modelUrl, setModelUrl] = useState(null);
  const [measurements, setMeasurements] = useState(Object.keys(measurementLabels).map(key => ({ name: key, value: 0 })));
  const [fetchingMeasurements, setFetchingMeasurements] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCustomerId() {
      try {
        const sessionId = localStorage.getItem('sessionData');
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/customer/getCustomerId`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionId}`,
          },
        });

        if (response.ok) {
          const cusId = await response.json();
          setCustomerId(cusId);
        } else {
          console.error('Failed to get customer ID:', response.status);
        }
      } catch (error) {
        console.error('An error occurred while fetching the customer ID:', error);
      }
    }

    fetchCustomerId();
  }, []);

  const handleGetMeasurements = async () => {
    try {
      setFetchingMeasurements(true);
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/customer/getmeasurements`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerId: customerId,
          gender: gender,
          height: height,
          weight: weight
        })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
  
      const measurementsArray = Object.keys(data.measurements).map(key => ({
        name: key,
        value: data.measurements[key]
      }));
  
      setMeasurements(measurementsArray);
      setModelUrl(data.modelUrl);
      setFetchingMeasurements(false);
      
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setFetchingMeasurements(false);
      setErrorMessage('Failed to fetch measurements. Please try again.'); // Set error message

    }
  };

  const handleSaveMeasurements = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/customer/saveMeasurements`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          customerId: customerId,
          ...measurements.reduce((acc, measurement) => {
            acc[measurement.name] = measurement.value;
            return acc;
          }, {})
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save measurements');
      }

      const data = await response.json();
      console.log('Measurements saved successfully');
      // Optionally update UI or handle success
    } catch (error) {
      console.error('Error saving measurements:', error);
    }
  };

  const renderSliders = () => {
    return measurements.map((measurement, index) => (
      <div key={index} style={{ marginBottom: 16 }}>
        <label>{measurementLabels[measurement.name]}: {measurement.value} cm</label>
        <Slider
          min={0}
          max={150}
          value={measurement.value}
          onChange={(value) => {
            const newMeasurements = [...measurements];
            newMeasurements[index].value = value;
            setMeasurements(newMeasurements);
          }}
        />
      </div>
    ));
  };

  return (
    <AntDrawer
      title="Customer Measurements"
      placement="right"
      onClose={onClose}
      visible={isOpen}
      width={400}
    >

       {/* <div className="drawer-section" style={{ marginBottom: 16 }}>
        <BodyModel url={modelUrl} />
      </div> */}
      <div className="drawer-section">
        <Select
          value={gender}
          onChange={setGender}
          style={{ width: '100%', marginBottom: 16 }}
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="non-binary">Non-Binary</Option>
          <Option value="prefer-not-to-say">Prefer not to say</Option>
        </Select>
        <div style={{ marginBottom: 16 }}>
          <label>Height: {height} cm</label>
          <Slider
            min={120}
            max={220}
            value={height}
            onChange={setHeight}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Weight: {weight} kg</label>
          <Slider
            min={40}
            max={130}
            value={weight}
            onChange={setWeight}
          />
        </div>
        <div className="flex justify-center mb-5">
        {/* <button
  type="primary"
  onClick={fetchingMeasurements ? null : handleGetMeasurements}
  loading={fetchingMeasurements}
  className="mt-5 flex w-13 items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
>
  {measurements.some(m => m.value !== 0) ? 'Update Measurements' : 'Get Measurements'}
</button> */}
<Button
  type="primary"
  onClick={fetchingMeasurements ? null : handleGetMeasurements}
  loading={fetchingMeasurements}
  style={{
    backgroundColor: errorMessage ? '#ffcccc' : '#1890ff',
    borderColor: errorMessage ? '#ffcccc' : '#1890ff',
    marginBottom: 16,
  }}
>
  {measurements.some(m => m.value !== 0) ? 'Update Measurements' : 'Get Measurements'}
</Button>


        </div>
        {renderSliders()}
        <div className="flex justify-center mb-5">

        <button
          type="primary"
          onClick={handleSaveMeasurements}
          className="mt-3 flex w-13 items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
          Save
        </button>
        {errorMessage && (
  <div style={{ marginTop: 10, padding: '8px 12px', backgroundColor: '#ffcccc', borderRadius: 4 }}>
    {errorMessage}
  </div>
)}
      </div>
      </div>

    </AntDrawer>
  );
};

export default CustomDrawer;
