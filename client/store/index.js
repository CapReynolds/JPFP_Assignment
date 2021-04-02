import {createStore, combineReducers, applyMiddleware} from 'redux'
//import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

import campuses from './campuses';
import students from './students';
import singleCampus from './singleCampus';
import singleStudent from './singleStudent';
//import addcampustest from './addcampustest';

const reducer = combineReducers({
    campuses,
    students,
    singleCampus,
    singleStudent,
    
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;

//const LOAD_STUDENTS = 'LOAD_STUDENTS'; //action type
//const LOAD_CAMPUSES = 'LOAD_CAMPUSES'; //action type
//const STUDENTS_LOADED = 'STUDENTS_LOADED'; //action type
//const CAMPUSES_LOADED = 'CAMPUSES_LOADED'; //action type
//const INSERT_STUDENT = 'INSERT_STUDENT'; //action type
//const INSERT_CAMPUS = 'INSERT_CAMPUS';
/*
const reducer = combineReducers({
  stories,
  storyReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed:true}))
)

const store = createStore(reducer, middleware)
*/

/*
const initialState = {
    students: [],
	campuses: [],
    campusLoading: true,
    studentLoading: true
} */

/*
const store = createStore((state = initialState, action)=>{
    if (action.type === LOAD_STUDENTS) {
        state = {
            ...state,
            students: action.students, //what we need to change
        };
    }
    else if (action.type === LOAD_CAMPUSES) {
        state = {
            ...state,
            campuses: action.campuses
            //campuses: [...state.campuses, action.campuses],
        };
    }
    else if (action.type === STUDENTS_LOADED) {
        state = {
            ...state,
            studentLoading: false
        }
    }
    else if (action.type === CAMPUSES_LOADED) {
        state = {
            ...state,
            campusLoading: false
        };
    }
    else if (action.type === INSERT_CAMPUS) {
        state = {
            ...state,
            campuses: [...state.campuses, action.campus]
        };
    }
    else if (action.type === INSERT_STUDENT) {
        state = {
            ...state,
            students: state.students.concat([action.student])
        };
    }
    console.log(state , ' in redux store');
    return state;
});
*/
/*
export const loadCampuses = (campuses) => {
    return {
      type: LOAD_CAMPUSES,
      campuses
    }
}

export const loadStudents = (students) => {
    return {
      type: LOAD_STUDENTS,
      students
    }
}
*/


