import axios from 'axios';

import { setAlert } from './alert';
import {
  CREATE_COMMENT,
  CREATE_POST,
  DELETE_POST,
  GET_POST,
  GET_POSTS,
  POST_ERROR,
  REMOVE_COMMENT,
  UPDATE_LIKES
} from './types';

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/posts');
    dispatch({
      type: GET_POSTS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

// Add like
export const addLike = (postId) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/posts/like/${postId}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id: postId, likes: response.data }
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

// Remove like
export const removeLike = (postId) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/posts/unlike/${postId}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id: postId, likes: response.data }
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

// Delete post
export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${postId}`);
    dispatch({
      type: DELETE_POST,
      payload: { id: postId }
    });
    dispatch(setAlert('Post removed', 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

// Create post
export const createPost = (FormData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const response = await axios.post(`/api/posts`, FormData, config);
    dispatch({
      type: CREATE_POST,
      payload: response.data
    });
    dispatch(setAlert('Post created', 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

// Get post
export const getPost = (postId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/posts/${postId}`);
    dispatch({
      type: GET_POST,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

// Create comment
export const createComment = (postId, FormData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const response = await axios.put(
      `/api/posts/comment/${postId}`,
      FormData,
      config
    );
    dispatch({
      type: CREATE_COMMENT,
      payload: response.data
    });
    dispatch(setAlert('Comment added to post', 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });
    dispatch(setAlert('Comment removed', 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};
