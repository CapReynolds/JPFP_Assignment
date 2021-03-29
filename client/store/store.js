import {createStore} from 'redux';

const initialState = {
    students: [],
	campuses: [],
    campusLoading: true,
    studentLoading: true
}

const LOAD_STUDENTS = 'LOAD_STUDENTS'; //action type
const LOAD_CAMPUSES = 'LOAD_CAMPUSES'; //action type
const STUDENTS_LOADED = 'STUDENTS_LOADED'; //action type
const CAMPUSES_LOADED = 'CAMPUSES_LOADED'; //action type
const INSERT_STUDENT = 'INSERT_STUDENT'; //action type
/*
const setStudents = (students) => ({ //action creators
    type: SET_STUDENTS,
    students,
})

const setCampuses = (campuses) => ({
    type: SET_CAMPUSES,
    campuses,
})
*/
const reducer = (state = initialState, action) =>{
    
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
    else if (action.type === INSERT_STUDENT) {
        state = {
            ...state,
            students: state.students.concat([action.student])
        };
    }
    return state;
}

const store = createStore(reducer);

export default store;