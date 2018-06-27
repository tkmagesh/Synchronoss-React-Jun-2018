import { bugsReducer } from './bugsReducer';
import { spinnerReducer } from './spinnerReducer';

import {combineReducers } from 'redux';

const rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

export default rootReducer;