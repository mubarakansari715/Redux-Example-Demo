import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga'; //don't used these one have error
import rootReducer from './rootReducer'; // Combine reducers here
import rootSaga from './saga'; // Your saga file
const createSagaMiddleware = require('redux-saga').default; //used this one for createSagaMiddleware

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
