import './index.css';
import React from 'react';
import { Col, Card, Row, Icon } from 'antd';
import contactBanner from '../../assets/contactBannerImg.jpg';
import headerBg from '../../assets/bannerBgGray.png';
import artoosh from '../../assets/artoosh.png';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <img style={{marginTop: '0'}} className="productsBannerImg" src={contactBanner} />
        </Row>
        <Row className="titleRow">
          <Col span={10} className="titleRowDivider" />
          <Col span={4} className="titleMiddleDiv">
            <span>CONTACT US</span>
          </Col>
          <Col span={10} className="titleRowDivider" />
        </Row>
        <div className="pageContent">
          <Row gutter={12}>
            <Col md={{ span: 8, offset: 8 }}>
              <Card
                title={
                  <span style={{ fontSize: '24px', fontWeight: '900', color: 'aliceblue' }}>
                    ARTUN BAYRAK
                  </span>
                }
                cover={<img style={{ width: '100%' }} src={artoosh} />}
                extra={<a>E-MAIL</a>}
                bodyStyle={{ minHeight: '200px' }}
                style={{ backgroundImage: `url(${headerBg})`, borderRadius: '10px' }}
                className="productCards"
              >
                <div
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: '15px',
                  }}
                >
                  0539 586 13 37 <Icon type="phone" />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;
