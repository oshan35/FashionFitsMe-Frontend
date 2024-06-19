import React, { useEffect, useRef, useState } from 'react';
import { Drawer as AntDrawer, Select, Slider, Table, Button, Input,  Card, Col, Row, Statistic } from 'antd';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const { Option } = Select;

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const [value, setValue] = useState(record ? record[dataIndex] : '');

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const save = () => {
    toggleEdit();
    handleSave({ ...record, [dataIndex]: value });
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Input
        ref={inputRef}
        value={value}
        onChange={handleInputChange}
        onBlur={save}
        onPressEnter={save}
      />
    ) : (
      <div onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const MeasurementsTable = ({ measurements, setMeasurements }) => {
  const handleSave = (row) => {
    const newData = [...measurements];
    const index = newData.findIndex((item) => row.key === item.key);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item, ...row });
      setMeasurements(newData);
    }
  };

  const columns = [
    { title: 'Measurement', dataIndex: 'name', key: 'name' },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      editable: true,
      render: (text) => `${text} cm`,
    },
  ];

  const editableColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const dataSource = measurements.map((measurement, index) => ({
    key: index,
    name: measurement.name,
    value: measurement.value,
  }));

  return (
    <Table
      components={{
        body: {
          cell: EditableCell,
        },
      }}
      dataSource={dataSource}
      columns={editableColumns}
      pagination={false}
    />
  );
};

const BodyModel = ({ url }) => {
    const mountRef = useRef(null);
  
    useEffect(() => {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff); // Set background to white
  
      const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(400, 400); // Set the size of the renderer
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }
  
      const loader = new OBJLoader();
      loader.load(
        url,
        (object) => {
          scene.add(object);
          animate();
        },
        undefined,
        (error) => {
          console.error('An error happened', error);
        }
      );
  
      camera.position.z = 5;
  
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
  
      return () => {
        if (mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    }, [url]);
  
    return <div ref={mountRef} />;
  };
  

const CustomDrawer = ({ isOpen, onClose }) => {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [measurements, setMeasurements] = useState([
    { name: 'ankle_circumference', value: 32.34 },
    { name: 'arm_length', value: 32.34 },
    { name: 'bicep_circumference', value: 32.34 },
    // Add more measurements as needed
  ]);

  const [matchingSize, setMatchingSize] = useState(null);
  const [matchPercentage, setMatchPercentage] = useState(null);

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/saveMeasurements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ measurements }),
      });

      if (!response.ok) {
        throw new Error('Failed to save measurements');
      }

      console.log('Measurements saved successfully');
    } catch (error) {
      console.error('Error saving measurements:', error);
    }
  };

  const fetchMatchingSize = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/getMatchingSize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ measurements }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch matching size');
      }
  
      const data = await response.json();
      setMatchingSize(data.size);
      setMatchPercentage(data.percentage);
    } catch (error) {
      console.error('Error fetching matching size:', error);
    }
  };
  

  return (
    <AntDrawer
      title="Customer Measurements"
      placement="right"
      onClose={onClose}
      visible={isOpen}
      width={400}
    >
      <div className="drawer-section" 
        style={{marginBottom: 16 }}
      >
        <BodyModel url="path/to/your/model.obj" />
      </div>
      <div className="drawer-section">
        <Select
          value={gender}
          onChange={setGender}
          style={{ width: '100%', marginBottom: 16 }}
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
        <div style={{ marginBottom: 16 }}>
          <label>Height: {height} cm</label>
          <Slider
            min={100}
            max={250}
            value={height}
            onChange={setHeight}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Weight: {weight} kg</label>
          <Slider
            min={30}
            max={150}
            value={weight}
            onChange={setWeight}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
            <button
                type="button"
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
                Get Measurements
            </button>
        </div>

      </div>
      <div className="drawer-section">
        <MeasurementsTable measurements={measurements} setMeasurements={setMeasurements} />

         <button
            type="button"
            className="mt-6 flex w-1/2 items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
            Save
         </button>
      </div>
    </AntDrawer>
  );
};

export default CustomDrawer;
