import {
  SET_ROOT_URL,
} from './ActionTypes';

const initMainState = {
  root_url: ''
}

const Main = (state = initMainState, action) => {
  switch (action.type) {
    case SET_ROOT_URL:
      return {
        ...state,
        root_url: action.url
      };
    break;
    default:
      return state;
  }
}

const initProgressState = {
  current_step: 0,
  total_progress: 0,
}

const Progress = (state = initProgressState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default {
  Main,
  Progress,
}