import {createStore, combineReducers, applyMiddleware} from 'redux'
//import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

import campuses from './campuses';
import students from './students';
import singleCampus from './singleCampus';
import singleStudent from './singleStudent';

const reducer = combineReducers({
    campuses,
    students,
    singleCampus,
    singleStudent,
    
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
