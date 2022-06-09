import { combineReducers } from 'redux';

import appTodo from './todo';
import toast from './common/toast';

const reducers = {
  appTodo,
  common: combineReducers({
    toast
  })
};

export default reducers;
