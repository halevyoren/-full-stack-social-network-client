import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <div className='profile-about'>
      <div className='bio'>
        {bio && (
          <Fragment>
            <h2 className='text-primary'>{name.trim().split(' ')[0]}'s Bio</h2>
            <p>{bio}</p>
          </Fragment>
        )}
      </div>
      <div className='line'></div>
      <h2>Skill Set</h2>
      <div className='skills'>
        {skills.map((skill, index) => (
          <div key={index} className='center-icon skill'>
            <FaCheck />
            &nbsp; {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
