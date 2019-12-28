import {
  GET_URL_PREVIEW_SUCCESS
} from '../actions/actionCreators/content/types';

const initialState = {
  content: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_URL_PREVIEW_SUCCESS:
      return Object.assign({}, state, { content: action.content });
    default:
      return state;
  }
}