import { push } from 'connected-react-router';

export const goToPreview = (dispatch) => {
  return dispatch(push('/preview'));
}