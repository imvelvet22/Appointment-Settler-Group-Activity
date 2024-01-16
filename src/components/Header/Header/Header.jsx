import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './header.css';

const nav_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '#',
    display: 'About'
  },
  {
    path: '/offer',
    display: 'Offer'
  },
];

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/home'); 

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">

            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      style={{
                        color: activeLink === item.path ? 'black' : 'orange',
                        textDecoration: 'none',
                        fontWeight: 500,
                        fontSize: '1.1rem'
                      }}
                      onClick={() => setActiveLink(item.path)}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_right d-flex align-items-center gap-4 ">
              <div className="nav_btns d-flex align-items-center gap-4 ">
                <Button className="btn secondary__btn"><Link to='/login'>Login</Link></Button>
                <Button className="btn primary__btn"><Link to='/register'>Register</Link></Button>
              </div>

              <span className="mobile__menu d-md-none">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
