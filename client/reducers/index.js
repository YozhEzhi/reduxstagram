import { combineReducers} from 'redux';
import { routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rooteReducer = combineReducers({ posts, comments, router: routerReducer });

export default rootReducer;
