import './index.css';
import React from 'react';
import { Col, Card, Row, Icon } from 'antd';
import contactBanner from '../../assets/contactBannerImg.jpg';
import phoneImg from '../../assets/phoneImg.png';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <img className="productsBannerImg" src={contactBanner} />
        </Row>
        <div className="homeProductsTitle">
          <Icon type="caret-down" /> CONTACT US <Icon type="caret-down" />
        </div>
        <div className="pageContent">
          <Row gutter={12}>
            <Col md={{ span: 8, offset: 8 }}>
              <Card
                bordered
                style={{ borderRadius: '12px' }}
                title={<span style={{ fontSize: '30px', fontWeight: '900' }}>ARTUN BAYRAK</span>}
              >
                <span style={{ fontSize: '30px', fontWeight: '900' }}>
                  0539 586 13 37 <Icon type="phone" />
                </span>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;
