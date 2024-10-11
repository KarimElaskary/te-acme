import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();


  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };


  return (
    <div className='flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-6 w-[700px] h-[700px] rounded-2xl'>
        <img src="/icon.png" className='w-[150px] h-[150px] object-cover' alt="Logo" />
        <input
          type='text'
          placeholder='Username'
          className='input'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          className='input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='bg-black p-[20px] w-[200px] rounded-md'>Login</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
