import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'redux-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

const defaulState = {
	posts,
	comments,
};

export default const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory);
