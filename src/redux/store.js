import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import createReduxMiddleware from 'redux-saga';
import { rootSaga } from '../saga';

const sagaMiddleware = createReduxMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
export default store