import './index.css';
import React from 'react';
import { Card, Col, Row, Icon, List } from 'antd';
import glidersPoster from '../../assets/glidersPoster.jpg';
import harnessesPoster from '../../assets/harnessesPoster.jpg';
import glidersVideo from '../../assets/glidersVideo.mp4';
import harnessesVideo from '../../assets/harnessesVideo.mp4';
import reservesVideo from '../../assets/reservesVideo.mp4';
import reservesPoster from '../../assets/reservesPoster.jpeg';
import accessoriesNew from '../../assets/accessoriesNew.jpg';
import apollo2a from '../../assets/apollo2a.png';
import kea2 from '../../assets/kea2.jpg';
import aya from '../../assets/aya2.jpg';
import kudos from '../../assets/kudos.jpg';
import bi42 from '../../assets/bi42.jpg';
import anakis3 from '../../assets/anakis3.jpg';
import aeon from '../../assets/aeon.jpg';
import exos from '../../assets/exos.jpg';
import kooky from '../../assets/kooky.jpg';
import metis3 from '../../assets/metis3.jpg';
import apollobi from '../../assets/apollobi.jpg';
import cimapwr from '../../assets/cimapwr.jpg';
import flux from '../../assets/flux.jpg';
import zorro from '../../assets/zorro.jpg';
import zblade from '../../assets/zblade.jpg';
import eole from '../../assets/elole.jpg';
import headerBg from '../../assets/bannerBgGray.png';
import harness1 from '../../assets/harness1.jpg';
import harness2 from '../../assets/harness2.jpg';
import harness3 from '../../assets/harness3.jpg';
import harness4 from '../../assets/harness4.jpg';
import harness5 from '../../assets/harness5.jpg';
import harness6 from '../../assets/harness6.jpg';
import harness7 from '../../assets/harness7.jpg';
import harness8 from '../../assets/harness8.jpg';
import reserve1 from '../../assets/reserve1.jpg';
import reserve2 from '../../assets/reserve2.jpg';
import reserve3 from '../../assets/reserve3.jpg';
import reserve4 from '../../assets/reserve4.jpg';
import reserve5 from '../../assets/reserve5.jpg';

class Products extends React.Component {
  state = {
    currentCategory: this.props.match.params.category,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.category != this.props.match.params.category) {
      this.setState({ currentCategory: this.props.match.params.category });
    }
  }
  render() {
    const { currentCategory } = this.state;
    console.log(currentCategory == 'gliders' ? '397px' : '200');
    let products = [];
    if (currentCategory == 'gliders') {
      products = [
        {
          image: apollo2a,
          model: 'APOLLO 2',
          productLine: 'Sport Line',
          en: 'EN - B',
          attributes: {
            fl_aspect_rt: '5.59',
            takeoff_wght: { XS: '50-70', S: '64-81', M: '74-94', L: '85-108', XL: '99-125' },
            glider_wght: '3.9, 4.75',
          },
        },
        {
          image: kea2,
          model: 'KEA 2',
          productLine: 'Light Line',
          en: 'EN - A',
          attributes: {
            fl_aspect_rt: '4.95',
            takeoff_wght: { XS: '55-70', S: '64-81', M: '74-94', L: '85-105', XL: '99-125' },
            glider_wght: '2.76-3.15',
          },
        },
        {
          image: aya,
          model: 'AYA',
          productLine: 'Sport Line',
          en: 'EN - A',
          attributes: {
            fl_aspect_rt: '4.69',
            takeoff_wght: { XS: '50-72', S: '60-80', M: '75-95', L: '85-110', XL: '100-130' },
            glider_wght: '4.15-5.25',
          },
        },
        {
          image: kudos,
          model: 'KUDOS',
          productLine: 'Comfort Line',
          en: 'EN - B',
          attributes: {
            fl_aspect_rt: '5.05',
            takeoff_wght: { XS: '55-70', S: '64-81', M: '74-94', L: '85-108', XL: '99-125' },
            glider_wght: '4.1-4.7',
          },
        },
        {
          image: bi42,
          model: 'Bi 4 2',
          productLine: 'Comfort Line',
          en: 'EN - B',
          attributes: {
            fl_aspect_rt: '5.20',
            takeoff_wght: { ' ': '120-220' },
            glider_wght: '7.8',
          },
        },
        {
          image: anakis3,
          model: 'ANAKIS 3',
          productLine: 'Sport Line',
          en: 'EN - A',
          attributes: {
            fl_aspect_rt: '4.95',
            takeoff_wght: { XS: '55-70', S: '64-81', M: '74-94', L: '85-108', XL: '99-125' },
            glider_wght: '3.85-4.90',
          },
        },
        {
          image: aeon,
          model: 'AEON',
          productLine: 'Sport Line',
          en: 'EN - A',
          attributes: {
            fl_aspect_rt: '6.95',
            takeoff_wght: { M: '80-95', L: '87-105', XL: '100-120' },
            glider_wght: '4.2-4.75',
          },
        },
        {
          image: exos,
          model: 'EXOS',
          productLine: 'Sport Line',
          en: 'EN - C',
          attributes: {
            fl_aspect_rt: '6.4',
            takeoff_wght: { S: '65-85', M: '75-95', L: '85-105', XL: '95-120' },
            glider_wght: '3.99-4.4',
          },
        },
        {
          image: kooky,
          model: 'KOOKY',
          productLine: 'Sport Line',
          en: 'EN - Load Test',
          attributes: {
            fl_aspect_rt: '5.6',
            takeoff_wght: { 18: '65-105', 20: '70-115', 22: '85-130' },
            glider_wght: '4.85',
          },
        },
        {
          image: metis3,
          model: 'METIS 3',
          productLine: 'Comfort Line',
          en: 'EN - B',
          attributes: {
            fl_aspect_rt: '5.2',
            takeoff_wght: { 38: '100-200', 40: '110-210', 42: '120-220' },
            glider_wght: '7.3-7.9',
          },
        },
        {
          image: apollobi,
          model: 'APOLLO BI',
          productLine: 'Sport Line',
          en: 'EN - C',
          attributes: {
            fl_aspect_rt: '5.45',
            takeoff_wght: { 39: '110-200', 41: '125-220' },
            glider_wght: '7.15-7.6',
          },
        },
        {
          image: cimapwr,
          model: 'CIMA PWR',
          productLine: 'Comfort Line',
          en: 'PPG Flight',
          attributes: {
            fl_aspect_rt: '4.47',
            takeoff_wght: {
              XXS: '70-85',
              XS: '60-100',
              S: '70-120',
              M: '80-140',
              L: '95-160',
              XL: '145-180',
            },
            glider_wght: '7.15-7.6',
          },
        },
        {
          image: flux,
          model: 'FLUX',
          productLine: 'Comfort Line',
          en: 'PPG Flight',
          attributes: {
            fl_aspect_rt: '5.2',
            takeoff_wght: { XS: '60-90', S: '80-110', M: '100-130', L: '120-150' },
            glider_wght: '4.85, 5.60',
          },
        },
        {
          image: zorro,
          model: 'ZORRO',
          productLine: 'Sport Line',
          en: 'PPG Flight',
          attributes: {
            fl_aspect_rt: '5.53',
            takeoff_wght: { 22: '60-110', 24: '70-120', 26: '80-130', 28: '90-160', 30: '110-180' },
            glider_wght: '5.5, 6.2',
          },
        },
        {
          image: zblade,
          model: 'Z-BLADE',
          productLine: 'Sport Line',
          en: 'PPG Flight',
          attributes: {
            fl_aspect_rt: '5.53',
            takeoff_wght: {
              18: '60-120(Advanced) - 60-140(Competition)',
              20: '70-130(Advanced) - 70-150(Competition)',
            },
            glider_wght: '5, 5.3',
          },
        },
        {
          image: eole,
          model: 'EOLE',
          productLine: 'Comfort Line',
          en: 'PPG Flight',
          attributes: {
            fl_aspect_rt: '4.40',
            glider_wght: '2.65',
          },
        },
      ];
    } else if (currentCategory == 'harnesses') {
      products = [
        {
          image: harness1,
          model: 'SKYLIGHTER 4',
          productLine: 'Light Line',
          en: 'Free Flight',
          attributes: {
            weight: '3.0-3.4',
          },
        },
        {
          image: harness2,
          model: 'GII 4 ALPHA',
          productLine: 'Comfort Line',
          en: 'Free Flight',
          attributes: {
            weight: '3.0-3.45',
          },
        },
        {
          image: harness3,
          model: 'REVERSE 5',
          productLine: 'Comfort Line',
          en: 'Free Flight',
          attributes: {
            weight: '2.7-3.4',
          },
        },
        {
          image: harness4,
          model: 'TRANSFORMER',
          productLine: 'Comfort Line',
          en: 'Free Flight',
          attributes: {
            weight: '4.37-4.83',
          },
        },
        {
          image: harness5,
          model: 'SKYLIGHT TOURIST 2',
          productLine: 'Light Line',
          en: 'Free Flight',
          attributes: {
            weight: '1.39-1.47',
          },
        },
        {
          image: harness6,
          model: 'PAX',
          productLine: 'Light Line',
          en: 'Free Flight',
          attributes: {
            weight: '2.45-2.8',
          },
        },
        {
          image: harness7,
          model: 'CRUX',
          productLine: 'Light Line',
          en: 'Free Flight',
          attributes: {
            weight: '4.37-4.83',
          },
        },
        {
          image: harness8,
          model: 'TWIN',
          productLine: 'Comfort Line',
          en: 'Free Flight',
          attributes: {
            weight: '2.3-2.5',
          },
        },
      ];
    } else if (currentCategory == 'reserves') {
      products = [
        {
          image: reserve1,
          model: 'QUATRO',
          productLine: 'Light Line',
          en: 'Free Flight',
          attributes: {
            weight: '1.24-1.4',
          },
        },
        {
          image: reserve2,
          model: 'SKY SYSTEM2',
          productLine: 'Comfort Line',
          en: 'Free Flight',
          attributes: {
            weight: '1.40-2.00',
          },
        },
        {
          image: reserve3,
          model: 'SKY SPARE LIGHT',
          productLine: 'Light Line',
          en: 'Free Flight',
          attributes: {
            weight: '1.40-3.45',
          },
        },
        {
          image: reserve4,
          model: 'SKY LIGHT',
          productLine: 'Light Line',
          en: 'Free Flight',
          attributes: {
            weight: '0.99-2.6',
          },
        },
        {
          image: reserve5,
          model: 'SKY DRIVE 2',
          productLine: 'Sport Line',
          en: 'Free Flight',
          attributes: {
            weight: '1.85(including two-phase container)',
          },
        },
      ];
    } else if (currentCategory == 'accessories') {
      products = [];
    }

    return (
      <div>
        <Row>
          {currentCategory == 'gliders' ? (
            <div>
              <video id="1" autoPlay loop poster={glidersPoster} style={{ width: '100%' }}>
                <source src={glidersVideo} />
              </video>
            </div>
          ) : currentCategory == 'harnesses' ? (
            <React.Fragment>
              <video id="2" autoPlay loop poster={harnessesPoster} style={{ width: '100%' }}>
                <source src={harnessesVideo} />
              </video>
            </React.Fragment>
          ) : currentCategory == 'reserves' ? (
            <span>
              <video id="2" autoPlay loop poster={reservesPoster} style={{ width: '100%' }}>
                <source src={reservesVideo} />
              </video>
            </span>
          ) : (
            <img style={{ width: '100%' }} src={accessoriesNew} />
          )}
        </Row>
        <Row className="titleRow">
          <Col span={10} className="titleRowDivider" />
          <Col span={4} className="titleMiddleDiv">
            <span>{currentCategory.toUpperCase()}</span>
          </Col>
          <Col span={10} className="titleRowDivider" />
        </Row>
        <div className="pageContent">
          <Row gutter={24}>
            {products.map(product => {
              return (
                <Col md={{ span: 6 }}>
                  <Card
                    title={
                      <span style={{ fontSize: '24px', fontWeight: '900', color: 'aliceblue' }}>
                        {product.model}
                      </span>
                    }
                    extra={product.productLine}
                    bodyStyle={{ minHeight: currentCategory == 'gliders' ? '397px' : '200' }}
                    cover={<img style={{ height: '160px' }} src={product.image} />}
                    style={{ backgroundImage: `url(${headerBg})`, borderRadius: '10px' }}
                    className="productCards"
                  >
                    {currentCategory == 'gliders' ? (
                      <List
                        dataSource={[product]}
                        style={{ color: 'aliceblue' }}
                        renderItem={item => (
                          <span style={{ fontSize: '19px', letterSpacing: '1px' }}>
                            <List.Item style={{ textAlign: 'center' }}>
                              <span style={{ fontSize: '20px', fontWeight: '900' }}>
                                {product.en}
                              </span>
                            </List.Item>
                            <List.Item>
                              <span style={{ fontSize: '19px' }}>
                                Flat aspect ratio: {item.attributes.fl_aspect_rt}
                              </span>
                            </List.Item>
                            <List.Item>
                              <span style={{ fontSize: '19px' }}>
                                Glider weight: {item.attributes.glider_wght}
                              </span>
                            </List.Item>
                            {'takeoff_wght' in item.attributes ? (
                              <List.Item>
                                <Row>
                                  <Col md={24} style={{ fontSize: '19px' }}>
                                    Take-off weight
                                  </Col>
                                  {Object.keys(item.attributes.takeoff_wght).map((k, i) => {
                                    return (
                                      <Col md={24}>
                                        {k}
                                        {'  '}
                                        <Icon type="caret-right" />
                                        {item.attributes.takeoff_wght[k]}
                                      </Col>
                                    );
                                  })}
                                </Row>
                              </List.Item>
                            ) : null}
                          </span>
                        )}
                      />
                    ) : currentCategory == 'harnesses' || currentCategory == 'reserves' ? (
                      <List
                        dataSource={[product]}
                        style={{ color: 'aliceblue' }}
                        renderItem={item => (
                          <span style={{ fontSize: '19px', letterSpacing: '1px' }}>
                            <List.Item style={{ textAlign: 'center' }}>
                              <span style={{ fontSize: '20px', fontWeight: '900' }}>
                                {product.en}
                              </span>
                            </List.Item>
                            <List.Item>
                              <span style={{ fontSize: '19px' }}>
                                Weight: {item.attributes.weight}
                              </span>
                            </List.Item>
                          </span>
                        )}
                      />
                    ) : currentCategory == 'accessories' ? (
                      <div>Accessories</div>
                    ) : (
                      <div>reserves</div>
                    )}
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default Products;
