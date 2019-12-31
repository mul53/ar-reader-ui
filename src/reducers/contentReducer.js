import {
  GET_URL_HTML_PREVIEW_SUCCESS, 
  SET_CURRENT_URL, 
  DELETE_CURRENT_URL
} from '../actions/actionCreators/content/types';

const initialState = {
  html: '',
  currentURL: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_URL_HTML_PREVIEW_SUCCESS:
      return Object.assign({}, state, { html: action.payload });
    case SET_CURRENT_URL:
      return Object.assign({}, state, { currentURL: action.payload });
    case DELETE_CURRENT_URL:
      return Object.assign({}, state, { currentURL: '' });
    default:
      return state;
  }
}