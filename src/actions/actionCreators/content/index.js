import { 
  GET_URL_PREVIEW, GET_URL_PREVIEW_SUCCESS, GET_URL_PREVIEW_ERROR 
} from './types';
import readerService from '../../../api/readerService';

export const getUrlPreview = (url) => async (dispatch) => {
  try {
    dispatch({ type: GET_URL_PREVIEW })

    const content = await readerService.postUrlPreview(url);

    dispatch({
      type: GET_URL_PREVIEW_SUCCESS,
      content: content.data
    });
  } catch (err) {
    dispatch({
      type: GET_URL_PREVIEW_ERROR
    })
  }
}