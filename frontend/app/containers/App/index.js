import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Helmet from 'react-helmet';

import injectSaga from 'utils/injectSaga';
import { RESTART_ON_REMOUNT } from 'utils/constants';

import * as web3 from 'utils/web3/getWeb3';

import NavBar from 'components/App/NavBar';
import HomePage from 'containers/HomePage/Loadable';
import ScreenerPage from 'containers/ScreenerPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import saga from './sagas';


class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ ScreenerPage } />
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
