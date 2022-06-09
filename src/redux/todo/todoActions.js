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
import {
  TODO_STORAGE
} from '../../constants/storage';
import {
  setLocalStorageValue,
  getLocalStorageValue
} from '../../utils/dataStorage';
import {
  sortTodoList
} from '../../utils/todo';
import todoData from '../../db/todoData';

export const actionFetchTodo = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_TODO + PENDING });
    let data = sortTodoList(todoData);
    if (!getLocalStorageValue(TODO_STORAGE)) {
      setLocalStorageValue(TODO_STORAGE, data);
    } else {
      data = getLocalStorageValue(TODO_STORAGE);
    }
    setTimeout(() => {
      dispatch({ type: FETCH_TODO + SUCCESS, payload: data });
    }, 500);
  } catch (e) {
    dispatch({ type: FETCH_TODO + ERROR });
  }
};

export const actionUpdateTodo = (todo) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_TODO + PENDING });
    dispatch({ type: UPDATE_TODO + SUCCESS, payload: todo });
    if (getLocalStorageValue(TODO_STORAGE)) {
      const { todo } = getState().appTodo;
      setLocalStorageValue(TODO_STORAGE, todo);
    }
  } catch (e) {
    dispatch({ type: UPDATE_TODO + ERROR });
  }
};

export const actionAddTodo = (newTodo) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_TODO + PENDING });
    const { todo } = getState().appTodo;
    todo.push({
      ...newTodo,
      id: todo.length,
      status: 'PENDING'
    });
    dispatch({ type: ADD_TODO + SUCCESS, payload: sortTodoList(todo) });
    if (getLocalStorageValue(TODO_STORAGE)) {
      const { todo } = getState().appTodo;
      setLocalStorageValue(TODO_STORAGE, todo);
    }else {
      setLocalStorageValue(TODO_STORAGE, todo);
    }
  } catch (e) {
    dispatch({ type: ADD_TODO + ERROR });
  }
};
