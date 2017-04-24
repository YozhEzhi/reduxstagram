import {
  ADD_COMMENT,
  LIKE_POST,
  REMOVE_COMMENT,
} from '../constants';

// like
export function likePost(index) {
  return {
    type: LIKE_POST,
    index,
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    author,
    comment,
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: REMOVE_COMMENT,
    i,
    postId,
  }
}
