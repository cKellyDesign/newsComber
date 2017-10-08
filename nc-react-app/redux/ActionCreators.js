import {
  SET_ROOT_URL,
} from './ActionTypes';

export const setRootUrl = (url) => {
  return { type: SET_ROOT_URL, url };
}
