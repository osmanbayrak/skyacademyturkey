import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Card, Col, Row, Icon } from 'antd';
import first from '../../assets/first_resize.jpg';
import second from '../../assets/second_resize.jpg';
import third from '../../assets/third_resize.jpg';
import fourth from '../../assets/fourth_resize.jpg';
import fifth from '../../assets/fifth_resize.jpg';
import gliders from '../../assets/gliders_yeni.png';
import harnesses from '../../assets/harnesses_yeni.jpg';
import reserves from '../../assets/reserves_resize.png';
import accessories from '../../assets/accessories_resize.png';
import headerBg from '../../assets/bannerBgGray.png';

class HomePage extends React.Component {
  render() {
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
        <Carousel autoplay draggable={true}>
          <div>
            <img className="carouselImg" style={{ height: 'auto', width: '100%' }} src={first} />
          </div>
          <div>
            <img className="carouselImg" style={{ height: 'auto', width: '100%' }} src={second} />
          </div>
          <div>
            <img className="carouselImg" style={{ height: 'auto', width: '100%' }} src={third} />
          </div>
          <div>
            <img className="carouselImg" style={{ height: 'auto', width: '100%' }} src={fourth} />
          </div>
          <div>
            <img className="carouselImg" src={fifth} style={{ height: 'auto', width: '100%' }} />
          </div>
        </Carousel>
        <Row className="titleRow">
          <Col span={10} className="titleRowDivider" />
          <Col span={4} className="titleMiddleDiv">
            <span>PRODUCTS</span>
          </Col>
          <Col span={10} className="titleRowDivider" />
        </Row>
        <div className="pageContent">
          <Row gutter={24}>
            <Link to="/products/gliders">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  style={{ backgroundImage: `url(${headerBg})` }}
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  title={
                    <div
                      style={{
                        fontSize: '22px',
                        textAlign: 'center',
                        marginBottom: '10px',
                        fontWeight: '900',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      GLIDERS
                    </div>
                  }
                  cover={
                    <span style={{ overflow: 'hidden', marginTop: '3px', textAlign: 'center' }}>
                      <img
                        className="rowImages"
                        style={{ marginLeft: '-15px' }}
                        alt="example"
                        src={gliders}
                      />
                    </span>
                  }
                />
              </Col>
            </Link>
            <Link to="/products/harnesses">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  style={{ backgroundImage: `url(${headerBg})` }}
                  title={
                    <div
                      style={{
                        fontSize: '22px',
                        textAlign: 'center',
                        marginBottom: '10px',
                        fontWeight: '900',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      HARNESSES
                    </div>
                  }
                  cover={
                    <span style={{ overflow: 'hidden', marginTop: '3px', textAlign: 'center' }}>
                      <img
                        className="rowImages"
                        style={{ marginLeft: '-95px' }}
                        alt="example"
                        src={harnesses}
                      />
                    </span>
                  }
                />
              </Col>
            </Link>
            <Link to="/products/reserves">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  style={{ borderRadius: '10px', backgroundImage: `url(${headerBg})` }}
                  title={
                    <div
                      style={{
                        fontSize: '22px',
                        textAlign: 'center',
                        marginBottom: '10px',
                        fontWeight: '900',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      RESERVES
                    </div>
                  }
                  cover={
                    <span style={{ overflow: 'hidden', marginTop: '3px', textAlign: 'center' }}>
                      <img
                        style={{ marginLeft: '-120px' }}
                        className="rowImages"
                        alt="example"
                        src={reserves}
                      />
                    </span>
                  }
                />
              </Col>
            </Link>
            <Link to="/products/accessories">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  style={{ borderRadius: '10px', backgroundImage: `url(${headerBg})` }}
                  title={
                    <div
                      style={{
                        fontSize: '22px',
                        textAlign: 'center',
                        marginBottom: '10px',
                        fontWeight: '900',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      ACCESSORIES
                    </div>
                  }
                  cover={
                    <span style={{ overflow: 'hidden', marginTop: '3px', textAlign: 'center' }}>
                      <img
                        style={{ marginLeft: '-85px' }}
                        className="rowImages"
                        alt="example"
                        src={accessories}
                      />
                    </span>
                  }
                />
              </Col>
            </Link>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomePage;
