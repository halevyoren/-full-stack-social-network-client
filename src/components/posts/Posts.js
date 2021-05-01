import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaUser } from 'react-icons/fa';

import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import Spinner from '../layout/Spinner';
import './Posts.css';
import PostForm from './PostForm';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Posts</h1>
      <div className='center-icon'>
        <FaUser />
        Welcome to the commmunity
      </div>
      <PostForm />
      <div className='posts'>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} showActions={true} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
