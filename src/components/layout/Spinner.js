import React, { Fragment } from 'react';
import LoadingSpinner from '../../img/Loading Spinner.gif';

import './Spinner.css';

const Spinner = () => {
  return (
    <Fragment>
      <img src={LoadingSpinner} alt='Loading...' />
    </Fragment>
  );
};

export default Spinner;
