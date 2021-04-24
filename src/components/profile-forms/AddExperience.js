import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import { withRouter } from 'react-router-dom';
import { FaNetworkWired } from 'react-icons/fa';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    current: false,
    from: '',
    to: '',
    description: ''
  });
  const [isCurrentJob, setIsCurrentJob] = useState(false);

  const { title, company, location, current, from, to, description } = formData;

  const changeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <Fragment>
      <h1>Add An Experience</h1>
      <div className='center-icon'>
        <FaNetworkWired /> &nbsp; Add any positions that you have had in the
        past to your experience
      </div>
      <form onSubmit={SubmitHandler}>
        <div className='form-group'>
          <small className='instruction'>* = required</small>
          <input
            type='text'
            placeholder='* Job Title'
            name='title'
            value={title}
            required
            onChange={changeInput}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Company'
            name='company'
            value={company}
            required
            onChange={changeInput}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
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
            Current Job
          </p>
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input type='date' name='from' value={from} onChange={changeInput} />
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
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
            placeholder='Job Description'
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(withRouter(AddExperience));
