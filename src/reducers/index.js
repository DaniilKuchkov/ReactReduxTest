<<<<<<< HEAD
import { combineReducers } from 'redux';

import reviews from './reviewsReducer';
import indicators from './indicatorsReducer';

const todoApp = combineReducers({
  reviews,
  indicators,

=======
import { combineReducers } from 'redux'

import reviews from './reviewsReducer'

const todoApp = combineReducers({
  reviews
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
})

export default todoApp;
