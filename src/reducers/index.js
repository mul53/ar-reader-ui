import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import previewReducer from './previewReducer';
import uiReducer from './uiReducer';

export default (history) => combineReducers({
  preview: previewReducer,
  ui: uiReducer,
  router: connectRouter(history)
});
