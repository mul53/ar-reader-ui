import {
  GET_URL_HTML_PREVIEW_SUCCESS, 
  SET_CURRENT_URL, 
  DELETE_CURRENT_URL,
  SET_HTML_PARSER
} from '../actions/actionCreators/content/types';

const initialState = {
  html: '',
  currentUrl: '',
  htmlParser: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_URL_HTML_PREVIEW_SUCCESS:
      return Object.assign({}, state, { html: action.payload });
    case SET_CURRENT_URL:
      return Object.assign({}, state, { currentUrl: action.payload });
    case DELETE_CURRENT_URL:
      return Object.assign({}, state, { currentURL: '' });
    case SET_HTML_PARSER:
      return Object.assign({}, state, { htmlParser: action.payload });
    default:
      return state;
  }
}