import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../../actions/post';

const CommentForm = ({ postId, createComment }) => {
  const [text, setText] = useState('');
  return (
    <Fragment>
      <h2 className='create-comment-title'>Leave a comment</h2>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          createComment(postId, { text });
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

CommentForm.propTypes = {
  createComment: PropTypes.func.isRequired
};

export default connect(null, { createComment })(CommentForm);
