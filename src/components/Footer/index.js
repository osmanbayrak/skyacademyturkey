import './index.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Col, Divider, Row, Icon } from 'antd';
import headerBg from '../../assets/bannerBgGray.png';
const { Footer } = Layout;

const i18n = {
  t: param => {
    return param;
  },
};

const FooterComponent = () => (
  <Footer style={{ textAlign: 'center', backgroundColor: '#333333' }}>
    <Fragment>
      <Row className="contentBlock" style={{ color: '#fff' }}>
        <Col md={6}>
          <p>
            <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('Home')}</b>
          </p>
          <Divider />
          <p>Slide</p>
          <p>Products</p>
        </Col>
        <Col md={6}>
          <p>
            <b style={{ opacity: '0.7', fontSize: '16px' }}>Products</b>
          </p>
          <Divider />
          <p>Gliders</p>
          <p>Harnesses</p>
          <p>Reserves</p>
        </Col>
        <Col md={6}>
          <p>
            <b style={{ opacity: '0.7', fontSize: '16px' }}>Company</b>
          </p>
          <Divider />
          <p>Not Ready Yet</p>
        </Col>
        <Col md={6}>
          <p>
            <b style={{ opacity: '0.7', fontSize: '16px' }}>{i18n.t('Contact')}</b>
          </p>
          <Divider />
          <p>
            <a href="mailTo:info@skyacademyturkey.com">info@skyacademyturkey.com</a>
          </p>
          <p>
            <Icon type="phone" /> +90 532 667 55 16
          </p>
          <p>
            <Icon type="phone" /> +90 539 586 13 37
          </p>
        </Col>
      </Row>
      <Divider style={{ margin: '12px 0', background: 'gray' }} />
      <Row className="contentBlock" style={{ color: '#fff' }}>
        <Col md={12}>Copyright © 2020 Skyacademyturkey All rights reserved.</Col>
      </Row>
    </Fragment>
  </Footer>
);

export default FooterComponent;
