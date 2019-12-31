import { 
  GET_URL_HTML_PREVIEW, 
  GET_URL_HTML_PREVIEW_SUCCESS, 
  GET_URL_HTML_PREVIEW_ERROR, 
  SET_CURRENT_URL,
  SET_HTML_PARSER   
} from './types';
import readerService from '../../../api/readerService';
import { goToPreview } from '../../actionCreators/routes';

export const getUrlHtmlPreview = (url, nextParserId, parserId) => async (dispatch) => {
  try {
    dispatch({ type: GET_URL_HTML_PREVIEW })

    const content = await readerService.postUrlHtmlPreview(url, parserId);

    dispatch({
      type: GET_URL_HTML_PREVIEW_SUCCESS,
      payload: content.data.html
    });

    console.log(nextParserId);

    dispatch({
      type: SET_CURRENT_URL,
      payload: url
    });

    dispatch({
      type: SET_HTML_PARSER,
      payload: Number(nextParserId)
    })

    // eslint-disable-next-line no-restricted-globals
    if (location.pathname === '/') {
      goToPreview(dispatch);
    }

  } catch (err) {
    dispatch({
      type: GET_URL_HTML_PREVIEW_ERROR
    })
  }
}