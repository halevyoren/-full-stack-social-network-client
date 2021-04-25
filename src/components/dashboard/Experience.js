import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm-screen'>{exp.title}</td>
      <td>
        {<Moment format='DD/MM/YYYY'>{exp.from}</Moment>} -{' '}
        {exp.to ? <Moment format='DD/MM/YYYY'>{exp.to}</Moment> : 'Now'}
      </td>
      <td>
        <button className='button update'>Update</button>
      </td>
      <td>
        <button
          className='button delete'
          onClick={() => deleteExperience(exp._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm-screen'>Title</th>
            <th className='hide-sm-screen'>Years</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
