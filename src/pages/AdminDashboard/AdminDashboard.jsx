import { Flex } from 'antd';
import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <>
      <Flex vertical="vertical" className="grid-container1">
        <Flex horizontal="horizontal" className="grid-container2">
        <Flex vertical="vertical" className="grid-container">
          <Flex className="grid-cell1">Total Income </Flex>
          <Flex horizontal="horizontal" className="grid-container3">
          <Flex className="grid-cell2">Today's Activity Rate</Flex>
          <Flex className="grid-cell3">Performance</Flex>
          </Flex>
        </Flex>
        <Flex className="grid-cell4">
          <div/>
          <div>Total Order Completed <br/> Amount1</div>
          <div/>
          <div>Total Order Deliverd <br/> Amount2</div>
          <div/>
          <div>Total Order Pending <br/> Amount3</div>
          <div/>
          <div>Total Order Canceled <br/> Amount4</div>
        </Flex>
        </Flex>
        <Flex horizontal="horizontal" className="grid-container4">
          <Flex className="grid-cell5 image1"> </Flex>
          <Flex className="grid-cell5 image2"> </Flex>
          <Flex className="grid-cell5 image3"> </Flex>
          <Flex className="grid-cell5 image4"> </Flex>
          <Flex className="grid-cell5 image5"> </Flex>
          </Flex>
        <Flex horizontal="horizontal" className="grid-container">
          <Flex className="grid-cell6">Order Rate</Flex>
        <Flex className="grid-cell7">Popular Product</Flex>
        </Flex>
        <Flex className="grid-cell8">Activity</Flex>
      </Flex>
    </>
  );
};

export default AdminDashboard
