import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Navbar.css';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAutheticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link className='center-icon' onClick={logout} to='#!'>
          <GoSignOut /> <span className='hide-icon-sm'> Logout</span>
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to='#!'>Developers</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
    </ul>
  );
  return (
    <div className='navbar'>
      <h1>
        <Link to='/'>
          <div className='center-icon'>
            <FaCode />
            SocialWeb
          </div>
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAutheticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProrps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProrps, { logout })(Navbar);
