import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    //cada vez que detecta un cambio hacer una copia de lo que ya habia escrito, y actualizar el nombre del input + su valor
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('formData', formData);
    dispatch(login(formData));
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" onChange={onChange} />
      <input type="password" name="password" onChange={onChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
