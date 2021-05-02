import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { FaThumbsUp, FaTrashAlt } from 'react-icons/fa';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  addLike,
  removeLike,
  deletePost,
  showActions
}) => {
  let hasLiked = auth.user
    ? likes.reduce((acc, cur) => acc || cur.user === auth.user._id, false)
    : false;

  return (
    <div className='post'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name} </h4>
        </Link>
      </div>
      <div>
        <p>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='DD/MM/YYYY, H:mm'>{date}</Moment>
        </p>
        {showActions && (
          <Fragment>
            <button
              onClick={() => {
                hasLiked ? removeLike(_id) : addLike(_id);
              }}
              type='button'
              className={`button ${hasLiked ? 'blue' : ''}`}
            >
              <FaThumbsUp />
              <span>&nbsp; {likes.length > 0 && likes.length}</span>
            </button>

            <Link to={`/posts/${_id}`} className='button'>
              {comments.length > 0 && comments.length} Comments
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={(e) => deletePost(_id)}
                type='button'
                className='button delete'
              >
                <FaTrashAlt />
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
