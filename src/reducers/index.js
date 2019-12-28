import { combineReducers } from 'redux';

import previewReducer from './previewReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  preview: previewReducer,
  ui: uiReducer
});