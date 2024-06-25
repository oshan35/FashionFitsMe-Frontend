import React, { useEffect, useRef, useState } from 'react';
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

  const navigate = useNavigate();

  const [measurements, setMeasurements] = useState(Object.keys(measurementLabels).map(key => ({ name: key, value: 0 })));

  useEffect(() => {
    async function fetchCustomerId() {
      try {
        const sessionId = localStorage.getItem('sessionData');
        const response = await fetch("http://localhost:5000/customer/getCustomerId", {
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
      const response = await fetch('http://localhost:5000/customer/getmeasurements', {
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

      setMeasurements(data.measurements);
      setModelUrl(data.modelUrl); 
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/customer/saveMeasurements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ measurements }),
      });

      if (!response.ok) {
        throw new Error('Failed to save measurements');
      }

      const data = await response.json();
      setModelUrl(data.modelUrl); 

      console.log('Measurements saved successfully');
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
      <div className="drawer-section" style={{ marginBottom: 16 }}>
        <BodyModel url={modelUrl} />
      </div>
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
            min={120} // Adjusted minimum height
            max={220} // Adjusted maximum height
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
        <div style={{ marginBottom: 16 }}>
          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            onClick={handleGetMeasurements}
          >
            Get Measurements
          </button>
        </div>
        {renderSliders()}
        <button
          type="button"
          className="mt-6 flex w-1/2 items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </AntDrawer>
  );
};

export default CustomDrawer;
