import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Col } from 'antd';
import logo from '../../assets/naviter_logo.png';
import './index.css';
import headerBg from '../../assets/bannerBgGray.png';

const { Header } = Layout;
const { SubMenu } = Menu;

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const currentPath = window.location.pathname;
    return (
      <Header
        className="headerIndex"
        style={{
          borderBottom: 'solid 2px #2f2f2f',
          backgroundImage: `url(${headerBg})`,
          color: 'white',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '4',
        }}
      >
        <Col md={6} xs={4} className="logoDiv">
          <img className="headerLogo" src={logo} />
        </Col>
        <Col md={18} xs={20} className="menuDiv" style={{ background: 'transparent' }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[currentPath]}
            className="headerMenu"
            style={{ color: 'white' }}
          >
            <Menu.Item key="/home">
              <Link to="/home" style={{ color: 'white' }}>
                HOME
              </Link>
            </Menu.Item>
            <SubMenu key="2" title="PRODUCTS">
              <Menu.Item
                style={{ backgroundImage: `white` }}
                className="subMenu"
                key="/products/gliders"
              >
                <Link style={{ fontSize: '18px', fontWeight: '900' }} to="/products/gliders">
                  GLIDERS
                </Link>
              </Menu.Item>
              <Menu.Item
                style={{ backgroundImage: `white` }}
                className="subMenu"
                key="/products/harnestes"
              >
                <Link style={{ fontSize: '18px', fontWeight: '900' }} to="/products/harnestes">
                  HARNESTES
                </Link>
              </Menu.Item>
              <Menu.Item
                style={{ backgroundImage: `white` }}
                className="subMenu"
                key="/products/reserves"
              >
                <Link style={{ fontSize: '18px', fontWeight: '900' }} to="/products/reserves">
                  RESERVES
                </Link>
              </Menu.Item>
              <Menu.Item
                style={{ backgroundImage: `white` }}
                className="subMenu"
                key="/products/accessories"
              >
                <Link style={{ fontSize: '18px', fontWeight: '900' }} to="/products/accessories">
                  ACCESSORIES
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/company">
              <Link to="/company" style={{ color: 'white' }}>
                COMPANY
              </Link>
            </Menu.Item>
            <Menu.Item key="/contact">
              <Link to="/contact" style={{ color: 'white' }}>
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
