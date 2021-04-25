import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './LandingPage.css';

const LandingPage = ({ isAuthenticated }) => {
  //Redirect if dashboard in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <section className='landing-page-background'>
      <div className='landing-page-contents'>
        <h1>Welcome to the developer Socialyweb</h1>
        <p>Create a profile, share posts and help others</p>
        <div className='buttons'>
          <Link to='/register' className='button'>
            Sign Up
          </Link>
          <Link to='/login' className='button'>
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
};

LandingPage.prototypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(LandingPage);
