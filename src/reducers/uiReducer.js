import { 
  GET_URL_HTML_PREVIEW, 
  GET_URL_HTML_PREVIEW_SUCCESS, 
  GET_URL_HTML_PREVIEW_ERROR, 
  GET_URL_TEXT_PREVIEW_ERROR,
  GET_URL_TEXT_PREVIEW_SUCCESS,
  GET_URL_TEXT_PREVIEW,
  POST_URL_EXTRACT_SUBMIT_SUCCESS,
  POST_URL_EXTRACT_SUBMIT_ERROR,
  POST_URL_EXTRACT_SUBMIT
} from '../actions/actionCreators/content/types';

const initialState = {
  searchLoading: false,
  cardLoading: false,
  submitLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_URL_HTML_PREVIEW_ERROR:
    case GET_URL_HTML_PREVIEW_SUCCESS:
      return Object.assign({}, state, { cardLoading: false, searchLoading: false });
    case GET_URL_HTML_PREVIEW:
      return Object.assign({}, state, { searchLoading: true, cardLoading: true });
    case GET_URL_TEXT_PREVIEW_SUCCESS:
    case GET_URL_TEXT_PREVIEW_ERROR:
      return Object.assign({}, state, { cardLoading: false });
    case GET_URL_TEXT_PREVIEW:
      return Object.assign({}, state, { cardLoading: true });
    case POST_URL_EXTRACT_SUBMIT:
      return Object.assign({}, state, { submitLoading: true });
    case POST_URL_EXTRACT_SUBMIT_SUCCESS:
    case POST_URL_EXTRACT_SUBMIT_ERROR:
      return Object.assign({}, state, { submitLoading: false })
    default:
      return state;
  }
}