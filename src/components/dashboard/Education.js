import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const educationArr = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm-screen'>{edu.degree}</td>
      <td>
        {<Moment format='DD/MM/YYYY'>{edu.from}</Moment>} -{' '}
        {edu.to ? <Moment format='DD/MM/YYYY'>{edu.to}</Moment> : 'Now'}
      </td>
      {/* <td>
        <button className='button update'>Update</button>
      </td> */}
      <td>
        <button
          className='button delete'
          onClick={() => deleteEducation(edu._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm-screen'>Degree</th>
            <th className='hide-sm-screen'>Years</th>
            <th />
            {/* <th /> */}
          </tr>
        </thead>
        <tbody>{educationArr}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
