import rootReducer from '../reducers/rootReducer';
import {createStore,applyMiddleware} from 'redux';
import rootSaga from '../sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);