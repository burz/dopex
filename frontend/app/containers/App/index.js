import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Helmet from 'react-helmet';

import injectSaga from 'utils/injectSaga';
import { RESTART_ON_REMOUNT } from 'utils/constants';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import saga from './sagas';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route component={ NotFoundPage } />
        </Switch>
      </div>
    );
  }
}

const withSaga = injectSaga({ key: 'app', saga, mode: RESTART_ON_REMOUNT });

export default compose(
  withSaga,
)(App);
