import {
  TOGGLE_SEARCH_LOADING
} from '../actions/actionCreators/ui/types';
import { 
  GET_URL_PREVIEW, 
  GET_URL_PREVIEW_SUCCESS, 
  GET_URL_PREVIEW_ERROR 
} from '../actions/actionCreators/content/types';

const initialState = {
  searchLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_URL_PREVIEW:
    case GET_URL_PREVIEW_SUCCESS:
    case GET_URL_PREVIEW_ERROR:
    case TOGGLE_SEARCH_LOADING:
      return Object.assign({}, state, { searchLoading: !state.searchLoading });
    default:
      return state;
  }
}