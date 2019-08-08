import React from 'react';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import { Layout } from 'antd';
import bgImg from './assets/bgRepeat.png'

const { Content } = Layout;

const GlobalLayout = props => (
  <Layout className="layout" style={{ backgroundImage: `url(${bgImg})`}}>
    <HeaderComponent />
    <Content>{props.children}</Content>
    <FooterComponent />
  </Layout>
);

export default GlobalLayout;
