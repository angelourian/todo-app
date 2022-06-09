import { combineReducers } from 'redux';

import toast from './common/toast';

const reducers = {
  common: combineReducers({
    toast
  })
};

export default reducers;
