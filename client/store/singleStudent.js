import axios from 'axios';

const initialState = {};

export const SET_STUDENT = 'SET_STUDENT';

export const setStudent = (student) => {
  return {
    type: SET_STUDENT,
    student
  };
};



export const getStudent = (studentID) =>{
  return async(dispatch) => {
    try{
        const newStudent = (await axios.get(`/api/students/${studentID}`)).data;
        dispatch(setStudent(newStudent));
    }
    catch(err)
    {
        console.log(err);
    }
  }
}

export default (state = initialState, action) => {
    if(action.type === SET_STUDENT)
      state = action.student
  
    return state;
  }