import axios from 'axios';

const LOAD_STUDENTS = 'LOAD_STUDENTS'; //action type
const CREATE_STUDENT = 'CREATE_STUDENT'; //action type

const initialState = [];

export const loadStudents = (students) => {
    return {
      type: LOAD_STUDENTS,
      students
    }
  }

  export const createStudent = (student) => {
    return {
      type: CREATE_STUDENT,
      student
    }
  }

  export const getStudents = () => {
    return async (dispatch) => {
      try {
        const allStudents = (await axios.get('/api/students')).data;
        dispatch(loadStudents(allStudents))
      } catch(err) {
        console.log(err)
      }
    }
  }

  export const AddAStudent = (firstName, lastName, email, GPA, history) => {
    return async(dispatch) => {
      try{
          const newStudent = {
            firstName,
            lastName,
            email,
            GPA
          }
          const student = (await axios.post('/api/students', newStudent)).data;
          dispatch(createStudent(student));
          history.push(`/students/${student.id}`);
      }
      catch(err)
      {
        console.log(err);
      }
    }
  }
  export default (state = initialState, action) => {
    if (action.type === LOAD_STUDENTS) {
      state = action.students
    }
    if (action.type === CREATE_STUDENT) {
      state = [...state, action.student]  
    }
    return state;
  }