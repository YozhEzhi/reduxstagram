import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import PhotoGrid from '../components/PhotoGrid';

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const PhotoGridContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);

export default PhotoGridContainer;
