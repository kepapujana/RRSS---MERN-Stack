import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authSlice';
import { notification } from 'antd';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    age: 0,
  });

  //ejecutamos el hook useDispatch
  const dispatch = useDispatch();

  //para detectar los cambios de cada input
  const onChange = (e) => {
    const { name, value } = e.target;
    //cada vez que detecta un cambio hacer una copia de lo que ya habia escrito, y actualizar el nombre del input + su valor
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  //para enviar los datos del form
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: 'Error',
        description: 'Passwords does not match',
      });
    } else {
      notification.success({
        message: 'Success',
        description: 'User registered!',
      });
      return dispatch(register(formData)), console.log('formData', formData);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" onChange={onChange} />
      <input type="email" name="email" onChange={onChange} />
      <input type="password" name="password" onChange={onChange} />
      <input type="password" name="password2" onChange={onChange} />
      <input type="text" name="age" onChange={onChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
