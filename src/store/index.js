import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const middlewareEnhancer = applyMiddleware(...middleware);
const storeEnhancers = [middlewareEnhancer];

const store = createStore(rootReducer, /*initialState,*/ composeWithDevTools(
  ...storeEnhancers,
));

sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const newRootReducer = require('../reducers').default;
      store.replaceReducer(newRootReducer);
    });
  }
}

export default store;
