import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';

const LandingPage = () => {
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

export default LandingPage;
