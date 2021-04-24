import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
import { withRouter } from 'react-router-dom';
import { FaNetworkWired } from 'react-icons/fa';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    current: false,
    from: '',
    to: '',
    description: ''
  });
  const [isCurrentJob, setIsCurrentJob] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    current,
    from,
    to,
    description
  } = formData;

  const changeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    addEducation(formData, history);
  };

  return (
    <Fragment>
      <h1>Add your education</h1>
      <div className='center-icon'>
        <FaNetworkWired /> &nbsp; Add any university/college/school/bootcamp
      </div>
      <form onSubmit={SubmitHandler}>
        <div className='form-group'>
          <small className='instruction'>* = required</small>
          <input
            type='text'
            placeholder='* university/college/school/bootcamp name'
            name='school'
            value={school}
            required
            onChange={changeInput}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Degree or certificate'
            name='degree'
            value={degree}
            required
            onChange={changeInput}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Field of study'
            name='fieldofstudy'
            value={fieldofstudy}
            onChange={changeInput}
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                setIsCurrentJob(!isCurrentJob);
              }}
            />{' '}
            Currently Studying
          </p>
        </div>
        <div className='form-group'>
          <h4>* From Date</h4>
          <input type='date' name='from' value={from} onChange={changeInput} />
        </div>
        <div className='form-group'>
          <h4>
            To Date (only required if you are not currently studying there)
          </h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={changeInput}
            disabled={!isCurrentJob ? '' : 'disabled'}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Education description'
            value={description}
            onChange={changeInput}
          ></textarea>
        </div>
        <input type='submit' className='button' />
        <a className='button' href='dashboard.html'>
          Go Back
        </a>
      </form>
    </Fragment>
  );
};
AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(withRouter(AddEducation));
