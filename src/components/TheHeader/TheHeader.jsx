import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import './TheHeader.styles.scss';

const TheHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <>
      <nav>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-menu-link">
              Home
            </Link>
          </li>

          {user ? (
            <>
              <li className="nav-menu-item">
                <Link to="/profile" className="nav-menu-link">
                  Profile
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link className="nav-menu-link" onClick={onLogout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-menu-item">
                <Link to="/login" className="nav-menu-link">
                  Login
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/register" className="nav-menu-link">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default TheHeader;
