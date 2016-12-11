/**
 * Created by vnguyen on 8/5/16.
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import navDrawerOpen from '../reducers/navDrawerOpen';
import loggerMiddleware from '../middlewares/logger';
import crashReporter from '../middlewares/crashReporter';

const rootReducer = combineReducers({
  routing: routerReducer,
  navDrawerOpen,
});
// May load this in another fashion
const initialState = {};
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(loggerMiddleware, crashReporter),
        // Attaches dev tools to chrome extension if active, may add an additional condition
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
);


export default store;
