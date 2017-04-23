import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
