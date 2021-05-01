import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaTrashAlt, FaUser } from 'react-icons/fa';

import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { DashboardActions } from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import './Dashboard.css';

const Dashboard = ({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfile,
  deleteAccount
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Dashboard</h1>
      <h2 className='center-icon'>
        <FaUser />
        &nbsp; Welcome {user && user.name}
      </h2>
      {profile ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className='center-icon'>
            <button className='button delete' onClick={() => deleteAccount()}>
              <FaTrashAlt /> &nbsp; Delete Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p> You still haven't created a profile, please create one</p>
          <Link to='create-profile' className='button'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
