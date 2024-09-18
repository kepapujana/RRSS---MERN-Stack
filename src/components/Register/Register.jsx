import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authSlice';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    age: '',
  });
  const { name, email, password, password2, age } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('formData', formData);
    dispatch(register(formData));
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input type="email" name="email" value={email} onChange={onChange} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <input
        type="password"
        name="password2"
        value={password2}
        onChange={onChange}
      />
      <input type="text" name="age" value={age} onChange={onChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
