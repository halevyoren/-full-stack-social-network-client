import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post';

const PostForm = ({ createPost }) => {
  const [text, setText] = useState('');
  return (
    <Fragment>
      <h2 className='create-post-title'>Create a post</h2>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          createPost({ text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Post text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type='submit' className='button' value='Submit' />
      </form>
    </Fragment>
  );
};

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
