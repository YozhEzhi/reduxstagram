import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PhotoGrid from '../components/PhotoGrid';

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

const PhotoGridContainer = connect(mapStateToProps)(PhotoGrid);

export default PhotoGridContainer;
