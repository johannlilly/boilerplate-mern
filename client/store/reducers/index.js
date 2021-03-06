import { combineReducers } from 'redux';

import { reducer as alerts } from 'react-notification-system-redux';
import user from './user';
import todos from './todos';

const rootReducer = combineReducers({
  alerts,
  user,
  todos,
});

export default rootReducer;
