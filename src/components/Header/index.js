import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon, Col } from 'antd';
import logo from '../../assets/naviter_logo.png';
import './index.css';
import headerBg from '../../assets/bannerBgGray.png';

const { Header } = Layout;
const { SubMenu } = Menu;

class HeaderComponent extends React.Component {
  state = {
    opacityOn: false,
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 200) {
      this.setState({ opacityOn: true });
    } else if (this.state.opacityOn == true) {
      this.setState({ opacityOn: false });
    }
  };

  render() {
    const currentPath = window.location.pathname;
    const paths = [
      '/home',
      '/products/gliders',
      '/products/harnestes',
      '/products/reserves',
      '/products/accessories',
      '/company',
      '/contact',
    ];
    if (!paths.includes(currentPath)) {
      return <Redirect to="/home" />;
    }
    return (
      <Header style={this.state.opacityOn ? { opacity: '0.6' } : undefined} className="headerIndex">
        <Col md={6} xs={4} className="logoDiv">
          <img className="headerLogo" src={logo} />
        </Col>
        <Col md={18} xs={20} className="menuDiv" style={{ background: 'transparent' }}>
          <Menu
            mode="horizontal"
            selectedKeys={[paths.includes(currentPath) ? currentPath : '/home']}
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
                <Link style={{ fontSize: '18px' }} to="/products/gliders">
                  GLIDERS
                </Link>
              </Menu.Item>
              <Menu.Item
                style={{ backgroundImage: `white` }}
                className="subMenu"
                key="/products/harnestes"
              >
                <Link style={{ fontSize: '18px' }} to="/products/harnestes">
                  HARNESTES
                </Link>
              </Menu.Item>
              <Menu.Item
                style={{ backgroundImage: `white` }}
                className="subMenu"
                key="/products/reserves"
              >
                <Link style={{ fontSize: '18px' }} to="/products/reserves">
                  RESERVES
                </Link>
              </Menu.Item>
              <Menu.Item
                style={{ backgroundImage: `white` }}
                className="subMenu"
                key="/products/accessories"
              >
                <Link style={{ fontSize: '18px' }} to="/products/accessories">
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
