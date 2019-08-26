import './index.css';
import React from 'react';
import { Col, Card, Row, Icon } from 'antd';
import manzara from '../../assets/manzara.jpeg';

class Company extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginTop: '60px' }}>
          <h1 style={{ position: 'absolute', top: '120px', fontSize: '34px', color: 'white' }}>
            This Page is Under Construction
          </h1>
          <img src={manzara} style={{ width: '100%' }} />
        </div>
      </div>
    );
  }
}

export default Company;
