import { 
  GET_URL_HTML_PREVIEW, 
  GET_URL_HTML_PREVIEW_SUCCESS, 
  GET_URL_HTML_PREVIEW_ERROR, 
  SET_CURRENT_URL,
  SET_HTML_PARSER,   
  GET_URL_TEXT_PREVIEW,
  GET_URL_TEXT_PREVIEW_SUCCESS,
  SET_TEXT_PARSER,
  POST_URL_EXTRACT_SUBMIT,
  POST_URL_EXTRACT_SUBMIT_ERROR,
  POST_URL_EXTRACT_SUBMIT_SUCCESS
} from './types';
import readerService from '../../../api/readerService';
import { goToPreview, goToResult } from '../../actionCreators/routes';

export const postUrlExtractSubmit = (url, contentType, parserId) => async (dispatch) => {
  try {
    dispatch({
      type: POST_URL_EXTRACT_SUBMIT
    });

    const resp = await readerService.postUrlExtractSubmit(url, contentType, parserId);
    const { txId } = resp.data;

    dispatch({
      type: POST_URL_EXTRACT_SUBMIT_SUCCESS,
      payload: txId
    });

    goToResult(dispatch);

  } catch (ex) {
    dispatch({
      type: POST_URL_EXTRACT_SUBMIT_ERROR
    })
  }
}

export const postUrlHtmlPreview = (url, nextParserId, parserId) => async (dispatch) => {
  try {
    dispatch({ type: GET_URL_HTML_PREVIEW })

    const content = await readerService.postUrlHtmlPreview(url, parserId);

    dispatch({
      type: GET_URL_HTML_PREVIEW_SUCCESS,
      payload: content.data.html
    });

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

export const postUrlTextPreview = (url, nextParserId, parserId) => async (dispatch) => {
  try {
    dispatch({ 
      type: GET_URL_TEXT_PREVIEW
    });

    const content = await readerService.postUrlTextPreview(url, parserId);

    dispatch({
      type: GET_URL_TEXT_PREVIEW_SUCCESS,
      payload: content.data.text
    });

    dispatch({
      type: SET_TEXT_PARSER,
      payload: Number(nextParserId)
    });

  } catch (err) {
    dispatch({
      type: GET_URL_HTML_PREVIEW_ERROR
    });
  }
}