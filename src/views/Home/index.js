import './index.css';
import React from 'react';
import router from 'react-router';
import { Carousel, Card, Col, Row, Icon } from 'antd';
import first from '../../assets/first.JPG';
import second from '../../assets/second.JPG';
import third from '../../assets/third.JPG';
import fourth from '../../assets/fourth.JPG';
import fifth from '../../assets/fifth.jpg';
import gliders from '../../assets/gliders.jpg';
import harnestes from '../../assets/harnestes.jpg';
import reserves from '../../assets/reserves.jpg';
import accessories from '../../assets/accessories.jpg';

class HomePage extends React.Component {
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
        <div className="homeProductsTitle"><Icon type="caret-down" /> PRODUCTS <Icon type="caret-down" /></div>
        <Row gutter={12} className="homeRow">
          <Col {...topColResponsiveProps} style={{cursor: 'pointer'}} onClick={()=> {routeTo('/products/uzunmamuller/insaatdemiri')}}>
            <Card
              bodyStyle={{minHeight: '15px'}}
              title={<div style={{fontSize: '22px', textAlign: 'center', marginBottom: '10px', fontWeight: '900', paddingBottom: '8px'}}>Gliders</div>}
              cover={<span style={{ overflow: 'hidden', marginTop: '3px' }}><img className="rowImages" alt="example" src={gliders} /></span>}
            >
            </Card>
          </Col>
          <Col {...topColResponsiveProps} style={{cursor: 'pointer'}} onClick={()=> {routeTo('/products/yassimamuller/shr')}}>
            <Card
              bodyStyle={{minHeight: '15px'}}
              title={<div style={{fontSize: '22px', textAlign: 'center', marginBottom: '10px', fontWeight: '900', paddingBottom: '8px'}}>Harnestes</div>}
              cover={<span style={{ overflow: 'hidden', marginTop: '3px' }}><img className="rowImages" alt="example" src={harnestes} /></span>}
            >
            </Card>
          </Col>
          <Col {...topColResponsiveProps} style={{cursor: 'pointer'}} onClick={()=> {routeTo('/products/profiller/kdkp')}}>
            <Card
              bodyStyle={{minHeight: '15px'}}
              title={<div style={{fontSize: '22px', textAlign: 'center', marginBottom: '10px', fontWeight: '900', paddingBottom: '8px'}}>Reserves</div>}
              cover={<span style={{ overflow: 'hidden', marginTop: '3px' }}><img className="rowImages" alt="example" src={reserves} /></span>}
            >
            </Card>
          </Col>
          <Col {...topColResponsiveProps} style={{cursor: 'pointer'}} onClick={()=> {routeTo('')}}>
            <Card
              bodyStyle={{minHeight: '15px'}}
              title={<div style={{fontSize: '22px', textAlign: 'center', marginBottom: '10px', fontWeight: '900', paddingBottom: '8px'}}>Accessories</div>}
              cover={<span style={{ overflow: 'hidden', marginTop: '3px' }}><img className="rowImages" alt="example" src={accessories} /></span>}
            >
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
