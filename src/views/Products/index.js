import './index.css';
import React from 'react';
import { Card, Col, Row, Icon, List } from 'antd';
import productsBanner from '../../assets/productsBanner.png';
import apollo2a from '../../assets/apollo2a.png';
import kea2 from '../../assets/kea2.jpg';
import aya2 from '../../assets/aya2.jpg';
import kudos from '../../assets/kudos.jpg';

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
            takeoff_wght: { XS: '55-70', S: '64-81', M: '74-94', L: '85-108', XL: '99-125' },
            glider_wght: '2.76-3.15',
          },
        },
        {
          image: kea2,
          model: 'KEA 2',
          productLine: 'Light Line',
          en: 'EN - A',
          attributes: {
            fl_aspect_rt: '4.95',
            takeoff_wght: { XS: '55-72', S: '60-80', M: '75-95', L: '85-100', XL: '99-125' },
            glider_wght: '4.15-5.25',
          },
        },
        {
          image: aya2,
          model: 'AYA 2',
          productLine: 'Comfort Line',
          en: 'EN - A',
          attributes: {
            fl_aspect_rt: '4.69',
            takeoff_wght: { XS: '55-70', S: '64-81', M: '74-94', L: '85-108', XL: '100-130' },
            glider_wght: '3.9-4.75',
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
      ];
    } else if (currentCategory == 'harnestes') {
      products = [];
    } else if (currentCategory == 'reserves') {
      products = [];
    } else if (currentCategory == 'accessories') {
      products = [];
    }

    return (
      <div>
        <Row>
          <img className="productsBannerImg" src={productsBanner} />
        </Row>
        <div className="homeProductsTitle">
          <Icon type="caret-down" /> {currentCategory.toUpperCase()} <Icon type="caret-down" />
        </div>
        <div className="pageContent">
          <Row gutter={12}>
            {products.length > 0 ? (
              products.map(product => {
                return (
                  <Col md={{ span: 6 }}>
                    <Card
                      title={
                        <span style={{ fontSize: '24px', fontWeight: '900' }}>{product.model}</span>
                      }
                      extra={product.productLine}
                      bodyStyle={{ minHeight: '200px' }}
                      cover={<img src={product.image} />}
                    >
                      <List
                        dataSource={[product]}
                        renderItem={item => (
                          <span style={{ fontWeight: '900', fontSize: '18px' }}>
                            <List.Item style={{ textAlign: 'center' }}>
                              <span style={{ fontSize: '20px', fontWeight: '900' }}>
                                {product.en}
                              </span>
                            </List.Item>
                            <List.Item>
                              <span style={{ fontSize: '16px', fontWeight: '600' }}>
                                Flat aspect ratio: {item.attributes.fl_aspect_rt}
                              </span>
                            </List.Item>
                            <List.Item>
                              <span style={{ fontSize: '16px', fontWeight: '600' }}>
                                Glider weight: {item.attributes.glider_wght}
                              </span>
                            </List.Item>
                            <List.Item>
                              <span style={{ fontSize: '16px', fontWeight: '600' }}>
                                Take-off weight
                              </span>
                              <br />
                              XS {'  '}
                              <Icon type="caret-right" />
                              {item.attributes.takeoff_wght.XS}
                              <br />S {'   '}
                              <Icon type="caret-right" />
                              {item.attributes.takeoff_wght.S}
                              <br />M {'   '}
                              <Icon type="caret-right" />
                              {item.attributes.takeoff_wght.M}
                              <br />L {'   '}
                              <Icon type="caret-right" />
                              {item.attributes.takeoff_wght.L}
                              <br />
                              XL {'  '}
                              <Icon type="caret-right" />
                              {item.attributes.takeoff_wght.XL}
                            </List.Item>
                          </span>
                        )}
                      />
                    </Card>
                  </Col>
                );
              })
            ) : (
              <h1 style={{ textAlign: 'center', fontSize: '36px', minHeight: '350px' }}>
                We are Sorry! This Page is Under Construction. A Few Days Later it Will be Finished.
              </h1>
            )}
          </Row>
        </div>
      </div>
    );
  }
}

export default Products;
