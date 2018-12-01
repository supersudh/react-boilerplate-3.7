import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import globalDataReducer from 'containers/App/reducers';

import history from 'utils/history';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    globalData: globalDataReducer,
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
