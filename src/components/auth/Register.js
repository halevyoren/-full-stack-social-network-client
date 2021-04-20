import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

import './auth.css';

const Register = ({ setAlert, register, isAutheticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const [isPrintingError, setIsPrintingError] = useState(false);

  const { name, email, password, passwordConfirm } = formData;

  const cradentialUpdate = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      register({ name, email, password });
      return;
    }
    if (!isPrintingError) {
      setIsPrintingError(true);
      setAlert('passwords do not match', 'danger');
      setTimeout(() => setIsPrintingError(false), 4000);
    }
  };

  //Redirect if logged in
  if (isAutheticated) {
    return <Redirect to='dashboard' />;
  }

  return (
    <Fragment>
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
            onChange={(e) => cradentialUpdate(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => cradentialUpdate(e)}
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
            onChange={(e) => cradentialUpdate(e)}
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
            onChange={(e) => cradentialUpdate(e)}
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
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAutheticated: PropTypes.bool
};

const mapStateToProrps = (state) => ({
  isAutheticated: state.auth.isAutheticated
});

//export and pass the actions for the store and acces setAlert
export default connect(mapStateToProrps, { setAlert, register })(Register);
