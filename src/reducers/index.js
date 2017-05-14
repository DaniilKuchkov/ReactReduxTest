import { combineReducers } from 'redux'

import reviews from './reviewsReducer'

const todoApp = combineReducers({
  reviews
})

export default todoApp;
