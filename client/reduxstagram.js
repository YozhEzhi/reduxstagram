import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import SingleContainer from './containers/SingleContainer';
import PhotoGridContainer from './containers/PhotoGridContainer';

// Import react store
import store, { history } from './store/index';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGridContainer}></IndexRoute>
        <Route path="/view/:postId" component={SingleContainer}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
