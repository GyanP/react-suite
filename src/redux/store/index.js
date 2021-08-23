import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { Logics } from '../logics';
import { RootReducer } from '../reducers';

export default function configureStore() {
  const logicMiddleware = createLogicMiddleware(Logics);

  const middlewares = [logicMiddleware];

  const middleware = applyMiddleware(...middlewares);

  const store = createStore(RootReducer, middleware);

  return store;
}
