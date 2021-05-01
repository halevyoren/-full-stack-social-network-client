import React, { Fragment } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='center-icon  large'>
        <FaExclamationTriangle />
        &nbsp; Page Not Found
      </h1>
      <p>Sorry, this page does not exist</p>
    </Fragment>
  );
};
export default NotFound;
