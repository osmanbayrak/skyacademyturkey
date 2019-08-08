import './index.css';
import React from 'react';
import { Layout, Menu, Breadcrumb, Carousel, Card, Col, Row } from 'antd';
import contactIMG from '../../assets/contactIMG.JPG';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <img style={{ height: 'auto', width: '100%' }} src={contactIMG} />
      </div>
    );
  }
}

export default Contact;
