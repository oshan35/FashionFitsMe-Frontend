import React, { useState } from 'react';
import { MenuOutlined, ShoppingCartOutlined, CarryOutOutlined, MessageOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './Dashboard.css';
import AdminDashboard from '../../pages/AdminDashboard/AdminDashboard';
import AdminOrders from '../../pages/AdminOrders/AdminOrders';
import AdminProduct from '../../pages/AdminProduct/AdminProduct';
import AdminReview from '../../pages/AdminReview/AdminReview';

const { Header, Content, Sider } = Layout;

const items = [
  { icon: MenuOutlined, label: 'Dashboard', component: <AdminDashboard />, key: '1' },
  { icon: ShoppingCartOutlined, label: 'Product', component: <AdminProduct />, key: '2' },
  { icon: CarryOutOutlined, label: 'Orders', component: <AdminOrders />, key: '3' },
  { icon: MessageOutlined, label: 'Reviews', component: <AdminReview />, key: '4' }
];

const App = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');

  const handleMenuItemClick = (e) => {
    setSelectedMenuItem(e.key);
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        className="sidebar"
        style={{ backgroundColor: '#F0EEEE' }}
      >
        <div className="logo">
          <img src={require('../../asserts/FashionFitsMe_Logo_2.png')} alt="Fashion Fits Me Logo" />
        </div>

        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[selectedMenuItem]}
          onClick={handleMenuItemClick}
          className="menu"
        >
          {items.map(item => (
            <Menu.Item key={item.key} icon={<item.icon />}>
              <span>{item.label}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header className="dashboard-header">
          {items.find(item => item.key === selectedMenuItem)?.label}
        </Header>
        <Content>
          <div
            style={{
              padding: 10,
              minHeight: 1360,
            }}>
            {items.find(item => item.key === selectedMenuItem)?.component}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
