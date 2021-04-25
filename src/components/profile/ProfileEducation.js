import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { fieldofstudy, school, degree, description, current, from, to }
}) => {
  return (
    <div className='profile-edu'>
      <h2>{school}</h2>
      <p>
        <Moment format='DD/MM/YYYY'>{from}</Moment> -
        {!to ? 'Now' : <Moment format='DD/MM/YYYY'>{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field of study: </strong> {fieldofstudy}
      </p>
      {description && (
        <p>
          <strong>Description: </strong> {description}
        </p>
      )}
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
