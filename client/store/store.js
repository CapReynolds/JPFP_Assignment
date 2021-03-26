import {createStore} from 'redux';

const initialState = {
    students: [],
	campuses: []
}

const SET_STUDENTS = 'SET_STUDENTS'; //action type
const SET_CAMPUSES = 'SET_CAMPUSES'; //action type

const setStudents = (students) => ({ //action creators
    type: SET_STUDENTS,
    students,
})

const setCampuses = (campuses) => ({
    type: SET_CAMPUSES,
    campuses,
})

const reducer = (state = initialState, action) =>{
    if (action.type === SET_STUDENTS) {
        return {
            ...state,
            students: action.students,
        };
    }
    else if (action.type === SET_CAMPUSES) {
        return {
            ...state,
            campuses: action.campuses,
        };
    }

    return state;
}

const store = createStore(reducer);

export default store;