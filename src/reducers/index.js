import { combineReducers } from 'redux';

import reviews from './reviewsReducer';
import indicators from './indicatorsReducer';

const todoApp = combineReducers({
  reviews,
  indicators,

})

export default todoApp;
