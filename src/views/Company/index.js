import './index.css';
import React from 'react';
import { Col, Card, Row, Icon } from 'antd';
import manzara from '../../assets/manzara.jpeg';

class Company extends React.Component {
  render() {
    return (
      <div>
        <Row style={{ marginTop: '110px' }}>
          <h1 style={{ textAlign: 'center', fontSize: '38px', minHeight: '80px' }}>
            We are Sorry! This Page is Under Construction. A Few Days Later it Will be Finished.
          </h1>
        </Row>
        <div>
          <Row gutter={12}>
            <img src={manzara} style={{ width: '100%' }} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Company;
