import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterComponent = () => (
  <Footer style={{ textAlign: 'center', background: '#2f2f2f', fontSize: '16px', color: '#d5d5d5' }}>
    Copy Right ©2018 All rights reserved.
  </Footer>
);

export default FooterComponent;
