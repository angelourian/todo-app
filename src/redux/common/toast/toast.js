import { SHOW_TOAST, HIDE_TOAST } from './index';

const initialState = {
  isShown: false,
  message: ''
};

const toast = (state = initialState, action = {}) => {
  switch(action.type) {
    case SHOW_TOAST:
      return {
        ...state, 
        isShown: true,
        message: action.payload.message
      };
    case HIDE_TOAST:
      return initialState;
    default:
      return state;
  }
};

export default toast;
