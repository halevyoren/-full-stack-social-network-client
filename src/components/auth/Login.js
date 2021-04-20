import React, { Fragment, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './auth.css';
import { login } from '../../actions/auth';

const Login = ({ login, isAutheticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const cradentialUpdate = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if logged in
  if (isAutheticated) {
    return <Redirect to='dashboard' />;
  }

  return (
    <Fragment>
      <h1>Sign in</h1>
      <div className='center-icon'>
        <FaUser size='1.5rem' />
        <p className='form-subtitle'>Sign into your account</p>
      </div>
      <form className='form' onSubmit={(e) => submitHandler(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={(e) => cradentialUpdate(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            minLength='4'
            name='password'
            onChange={(e) => cradentialUpdate(e)}
          />
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
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAutheticated: PropTypes.bool
};

const mapStateToProrps = (state) => ({
  isAutheticated: state.auth.isAutheticated
});

export default connect(mapStateToProrps, { login })(Login);
