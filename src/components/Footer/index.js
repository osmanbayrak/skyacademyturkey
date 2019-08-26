import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import headerBg from '../../assets/bannerBgGray.png';
const { Footer } = Layout;

const FooterComponent = () => (
  <Footer className="footerStyles">Copy Right ©2018 All rights reserved.</Footer>
);

export default FooterComponent;
