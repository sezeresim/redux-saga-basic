import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

//reducers
import homeReducer from './reducers/home';

//sage watch
import { watchHome } from './sagas';

//merge deducer with combineReducers()
const rootReducer = combineReducers({
  home: homeReducer,
});

const sagaMiddleware = createSagaMiddleware();

//FOR REDUX DEVTOOLS
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

//global store for app
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchHome);

export default store;
