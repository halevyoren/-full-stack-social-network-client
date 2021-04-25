import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import { getProfileUserById } from '../../actions/profile';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = ({
  getProfileUserById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileUserById(match.params.id);
  }, [getProfileUserById, match.params.id]);
  return (
    <Fragment>
      <div className='profile-page'>
        <div className='container'>
          {!profile || loading ? (
            <Spinner />
          ) : (
            <Fragment>
              <Link to='/profiles' className='button'>
                Back to profiles
              </Link>
              {auth.isAuthenticated &&
                !auth.loading &&
                auth.user._id === profile.user._id && (
                  <Link to='/edit-profile' className='button'>
                    Edit profile
                  </Link>
                )}
              <div className='profile-grid'>
                <ProfileTop profile={profile} />
                <ProfileAbout profile={profile} />
                <div className='profile-exp'>
                  <h2 className='title'>Experience</h2>
                  {profile.experience.length > 0 ? (
                    profile.experience.map((exp, index) => (
                      <Fragment key={exp._id}>
                        <ProfileExperience experience={exp} />
                        {index < profile.experience.length - 1 && (
                          <div className='line'></div>
                        )}
                      </Fragment>
                    ))
                  ) : (
                    <h4>No experience added</h4>
                  )}
                </div>

                <div className='profile-edu'>
                  <h2 className='title'>Education</h2>
                  {profile.education.length > 0 ? (
                    profile.education.map((edu, index) => (
                      <Fragment key={edu._id}>
                        <ProfileEducation education={edu} />
                        {index < profile.education.length - 1 && (
                          <div className='line'></div>
                        )}
                      </Fragment>
                    ))
                  ) : (
                    <h4>No education added</h4>
                  )}
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileUserById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStatesToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStatesToProps, { getProfileUserById })(Profile);
