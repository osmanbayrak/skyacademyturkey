import './index.css';
import React from 'react';
import router from 'react-router';
import { Carousel, Card, Col, Row, Icon } from 'antd';
import productsBanner from '../../assets/productsBanner.png';

class Products extends React.Component {
  render() {
    let routeTo = (url) => {
      router.push(url)
    }
    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
      style: { marginBottom: 24 },
    };
    return (
      <div>
        <Row>
          <img className="productsBannerImg" src={productsBanner} />
        </Row>
        <div className="homeProductsTitle"><Icon type="caret-down" /> PRODUCTS <Icon type="caret-down" /></div>
        <Row gutter={12} className="homeRow">
          SELAM
        </Row>
      </div>
    );
  }
}

export default Products;
