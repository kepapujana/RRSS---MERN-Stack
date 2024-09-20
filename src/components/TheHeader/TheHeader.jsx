import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TheHeader.styles.scss';
import { ShoppingCartOutlined } from '@ant-design/icons';

const TheHeader = () => {
  return (
    <>
      <nav>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-menu-link">
              Home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/register" className="nav-menu-link">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TheHeader;
