import { combineReducers } from 'redux';

import posts from './posts.reducer.js';

const rootReducer = combineReducers({ posts });

export default rootReducer;