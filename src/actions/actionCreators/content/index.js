import { 
  GET_URL_PREVIEW, GET_URL_PREVIEW_SUCCESS, GET_URL_PREVIEW_ERROR 
} from './types';
import readerService from '../../../api/readerService';
import { goToPreview } from '../../actionCreators/routes';

export const getUrlPreview = (url) => async (dispatch) => {
  try {
    dispatch({ type: GET_URL_PREVIEW })

    const content = await readerService.postUrlPreview(url);

    dispatch({
      type: GET_URL_PREVIEW_SUCCESS,
      content: content.data
    });

    goToPreview(dispatch);
  } catch (err) {
    dispatch({
      type: GET_URL_PREVIEW_ERROR
    })
  }
}