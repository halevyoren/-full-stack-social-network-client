import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';

import './auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const { name, email, password, passwordConfirm } = formData;

  const nameUpdate = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      console.log('passwords do not match');
    } else {
      console.log('success');
    }
  };

  return (
    <section className='form-container'>
      <h1>Sign Up</h1>
      <div className='center-icon'>
        <FaUser size='1.5rem' />
        <p className='form-subtitle'>Create your account</p>
      </div>
      <form className='form' onSubmit={(e) => submitHandler(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            name='name'
            onChange={(e) => nameUpdate(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => nameUpdate(e)}
            required
          />
          <small className='form-text'>
            This site uses gravatar, so if you want a profile image, use a
            gravatar email (for example: gmail)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength='4'
            onChange={(e) => nameUpdate(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='passwordConfirm'
            value={passwordConfirm}
            minLength='4'
            onChange={(e) => nameUpdate(e)}
            required
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='button'
          onClick={() => {}}
        />
      </form>
      <p className='switch-login-register'>
        Already have an account? {<Link to='login'>Sign In</Link>}
      </p>
    </section>
  );
};

export default Register;
