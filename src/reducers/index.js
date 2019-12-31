import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import contentReducer from './contentReducer';
import uiReducer from './uiReducer';

export default (history) => combineReducers({
  content: contentReducer,
  ui: uiReducer,
  router: connectRouter(history)
});
