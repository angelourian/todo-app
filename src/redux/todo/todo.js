import {
  ADD_TODO,
  FETCH_TODO,
  UPDATE_TODO,
} from './index';

import {
  SUCCESS,
  ERROR,
  PENDING
} from '../../constants/status';

const initialState = {
  isFetching: false,
  todo: []
};

const todoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TODO + PENDING: 
    case UPDATE_TODO + PENDING:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_TODO + ERROR: 
    case UPDATE_TODO + ERROR:
      return {
        ...state,
        isFetching: false
      }
    case FETCH_TODO + SUCCESS: 
      return {
        ...state,
        todo: action.payload,
        isFetching: false
      };
    case UPDATE_TODO + SUCCESS:
      const todo = state.todo;
      const foundIndex = todo.findIndex(x => x.id == action.payload.id);
      todo[foundIndex] = action.payload;
      return {
        ...state,
        todo,
        isFetching: false
      }
    default: return state;
  }
}

export default todoReducer;
