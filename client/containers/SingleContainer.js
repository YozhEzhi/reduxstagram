import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Single from '../components/Single';

function getCurrentPhotoComments(state, id) {
  return state.comments[id] ? state.comments[id] : [];
}

function mapStateToProps(state, ownProps) {
  const postId = ownProps.params.postId;
  const index = state.posts.findIndex(item => item.code === postId);
  const post = state.posts.find(item => item.code === postId);

  return {
    comments: getCurrentPhotoComments(state, postId),
    index,
    post,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const SingleContainer = connect(mapStateToProps, mapDispatchToProps)(Single);

export default SingleContainer;
