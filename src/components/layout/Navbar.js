import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
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
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
