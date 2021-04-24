import React from 'react';
import { FaAddressCard, FaGraduationCap, FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
  return (
    <div>
      <Link to='edit-profile' className='button'>
        <div className='center-icon'>
          <FaUserEdit size='1.3rem' />
          &nbsp; Edit profile
        </div>
      </Link>
      <Link to='add-experience' className='button'>
        <div className='center-icon'>
          <FaAddressCard size='1.3rem' />
          &nbsp; Add experience
        </div>
      </Link>
      <Link to='add-education' className='button'>
        <div className='center-icon'>
          <FaGraduationCap size='1.5rem' />
          &nbsp; Add education
        </div>
      </Link>
    </div>
  );
};
