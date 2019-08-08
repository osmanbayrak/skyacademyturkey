import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Col } from 'antd';
import logo from '../../assets/naviter_logo.png'
import './index.css';
import bgImg from '../../assets/bgRepeat.png';

const { Header } = Layout;

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header className="headerIndex" style={{borderBottom: 'solid 2px #2f2f2f', backgroundImage: `url(${bgImg})`, position: 'fixed', top: '0', left: '0', zIndex: '1200'}}>
        <Col md={6} xs={4} className="logoDiv">
          <img className="headerLogo" src={logo} />
        </Col>
        <Col md={18} xs={20} className="menuDiv" style={{ background: 'transparent' }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className="headerMenu"
            style={{borderBottom: 'solid 2px #2f2f2f', fontWeight: '900', background: 'transparent'}}
          >
            <Menu.Item key="1">
              <Link to="/home">
                HOME
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/products">
                PRODUCTS
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              COMPANY
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/contact">
                CONTACT
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Header>
    );
  }
}

export default HeaderComponent;
