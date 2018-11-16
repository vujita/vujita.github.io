/* eslint-disable global-require */
import React from 'react';
import { render } from 'react-dom';
// React redux, router
import { Provider } from 'react-redux';
import { Router, Route, useRouterHistory, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHashHistory } from 'history';
// My Stuff
import { HOME, ABOUT, CONTACT, EXPERIENCE } from '../constants/routes';
import store from '../stores/createStore';
import MainLayout from '../components/MainLayout';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(
  useRouterHistory(createHashHistory)({ queryKey: false }),
  store,
);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainLayout}>
        <Route
          path={HOME}
          component={require('../components/Home')}
          // getComponent={(nextState, cb) => {
          //   require.ensure(['../components/Home'], () => {
          //     const Home = require('../components/Home');
          //     cb(null, Home);
          //   });
          // }}
        />
        <Route
          path={ABOUT}
          getComponent={(nextState, cb) => {
            require.ensure(['../components/About'], () => {
              const Home = require('../components/About');
              cb(null, Home);
            });
          }}
        />
        <Route
          path={CONTACT}
          getComponent={(nextState, cb) => {
            require.ensure(['../components/Contact'], () => {
              const Home = require('../components/Contact');
              cb(null, Home);
            });
          }}
        />
        <Route
          path={EXPERIENCE}
          getComponent={(nextState, cb) => {
            require.ensure(['../components/Experience'], () => {
              const Home = require('../components/Experience');
              cb(null, Home);
            });
          }}
        />
        <Route
          path="*"
          getComponent={(nextState, cb) => {
            require.ensure(['../components/PageNotFound'], () => {
              const Home = require('../components/PageNotFound');
              cb(null, Home);
            });
          }}
        />
        <IndexRedirect to={HOME.toLowerCase()} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content'),
);
