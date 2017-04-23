import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Photo from '../components/Photo';

function getCurrentPhotoComments(state, code) {
  return state.comments[code] ? state.comments[code] : [];
}

function mapStateToProps(state, ownProps) {
  const postId = ownProps.post.code;
  const index = state.posts.findIndex(item => item.code === postId);

  return {
    comments: getCurrentPhotoComments(state, ownProps.post.code),
    index,
    post: ownProps.post,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const PhotoContainer = connect(mapStateToProps, mapDispatchToProps)(Photo);

export default PhotoContainer;
