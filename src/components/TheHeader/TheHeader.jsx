import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import { Input } from 'antd';
import './TheHeader.styles.scss';

const TheHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [postName, setPostName] = useState('');
  const { Search } = Input;

  const handleChange = (value, e) => {
    console.log(e);
    setPostName(value);
    console.log('PATATA: ', postName);
    navigate(`/search/${postName}`);
    if (e.key === 'Enter') {
      navigate(`/search/${postName}`);
    }
  };

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-menu-link">
              Home
            </Link>
            <Search
              className="inputSearch"
              placeholder="search post"
              name="text"
              onSearch={handleChange}
            />
          </li>

          {user ? (
            <>
              <li className="nav-menu-item">
                <Link to={`/profile/${user.name}`} className="nav-menu-link">
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
