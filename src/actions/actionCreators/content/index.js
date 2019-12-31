import { 
  GET_URL_HTML_PREVIEW, 
  GET_URL_HTML_PREVIEW_SUCCESS, 
  GET_URL_HTML_PREVIEW_ERROR, 
  SET_CURRENT_URL
} from './types';
import readerService from '../../../api/readerService';
import { goToPreview } from '../../actionCreators/routes';

export const getUrlHtmlPreview = (url) => async (dispatch) => {
  try {
    dispatch({ type: GET_URL_HTML_PREVIEW })

    const content = await readerService.postUrlHtmlPreview(url);

    dispatch({
      type: GET_URL_HTML_PREVIEW_SUCCESS,
      payload: content.data.html
    });

    dispatch({
      type: SET_CURRENT_URL,
      payload: url
    });

    goToPreview(dispatch);
  } catch (err) {
    dispatch({
      type: GET_URL_HTML_PREVIEW_ERROR
    })
  }
}