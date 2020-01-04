import { push } from 'connected-react-router';

export const goToPreview = (dispatch) => {
  return dispatch(push('/submit/preview'));
}

export const goToResult = (dispatch) => {
  return dispatch(push('/submit/success'))
}