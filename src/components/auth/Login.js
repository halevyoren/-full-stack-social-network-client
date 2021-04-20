import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './auth.css';

const Login = () => {
  return (
    <section className='form-container'>
      {/* Alert */}
      <div className='alert alert-danger'>Invalid Credentials</div>
      <h1>Sign in</h1>
      <div className='center-icon'>
        <FaUser size='1.5rem' />
        <p className='form-subtitle'>Sign into your account</p>
      </div>
      <form className='form' onSubmit={(e) => {}}>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' minLength='4' />
        </div>
        <input
          type='submit'
          value='Login'
          className='button'
          onClick={() => {}}
        />
      </form>
      <p className='switch-login-register'>
        Don't have an account? {<Link to='register'>Sign Up</Link>}
      </p>
    </section>
  );
};

export default Login;
