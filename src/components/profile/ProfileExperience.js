import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { description, location, company, title, current, from, to }
}) => {
  return (
    <div className='profile-exp'>
      <h2>{company}</h2>
      <p>
        <Moment format='DD/MM/YYYY'>{from}</Moment> -
        {!to ? 'Now' : <Moment format='DD/MM/YYYY'>{to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong> {title}
      </p>
      {description && (
        <p>
          <strong>Description: </strong> {description}
        </p>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
