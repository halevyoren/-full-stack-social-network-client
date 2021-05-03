import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import { deleteComment } from '../../actions/post';
import { FaTrashAlt } from 'react-icons/fa';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => {
  return (
    <div className='post'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='DD/MM/YYYY, H:mm'>{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={(e) => deleteComment(postId, _id)}
            type='button'
            className='button delete'
          >
            <FaTrashAlt />
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
