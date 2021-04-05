import axios from 'axios';


const LOAD_STUDENTS = 'LOAD_STUDENTS'; 
const CREATE_STUDENT = 'CREATE_STUDENT'; 
const DELETE_STUDENT = 'DELETE_STUDENT'; 
const EDIT_STUDENT = 'EDIT_STUDENT';

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

  export const deleteStudent = (studentID) => {
    return {
      type: DELETE_STUDENT,
      studentID
    }
  }

  export const editStudent = (student) => {
    return {
      type: EDIT_STUDENT,
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
          student.validate();
          
          dispatch(createStudent(student));
          history.push(`/students/${student.id}`);
      }
      catch(err) 
      {
        const errArr = err.response.data.errors;
        let tmp = errArr.map(error => error.message);
        let tmp2 = [];
        tmp.forEach(message=>
        {
          if (message.includes('firstName', 'null')){
              tmp2.push('Please enter a valid first name. \n');
          }
          if (message.includes('lastName', 'null')){
              tmp2.push('Please enter a valid last name. \n');
          }
          if (message.includes('email', 'null')){
                tmp2.push('Please enter a valid email address. \n');
          }
          if (message.includes('GPA', 'null')){
              tmp2.push('Please enter a valid grade point average. \n');
          }
        });
        window.alert(tmp2.join(''));
      }
    }
  }

  export const DeleteAStudent = (studentID) =>{
    return async(dispatch) => {
      try{
          dispatch(deleteStudent(studentID));
          const removedstudent = (await axios.delete(`/api/students/${studentID}`)).data;
      }
      catch(err)
      {
        console.log(err);
      }
    }
  }

  export const EditAStudent = (firstName, lastName, email, GPA, studentID) =>{
    return async(dispatch) => {
      try{
        const studentInfo = {
          id: studentID,
          firstName,
          lastName,
          email,
          GPA
        }
        const student = (await axios.post(`/api/students/edit/`, studentInfo)).data;
        dispatch(editStudent(student));
      }
      catch(err)
      {
        console.dir(err);
        const errArr = err.response.data.errors;
        let tmp = errArr.map(error => error.message);
        let tmp2 = [];
        tmp.forEach(message=>
        {
          if (message.includes('firstName', 'null')){
              tmp2.push('Please enter a valid first name. \n');
          }
          if (message.includes('lastName', 'null')){
              tmp2.push('Please enter a valid last name. \n');
          }
          if (message.includes('email', 'null')){
                tmp2.push('Please enter a valid email address. \n');
          }
          if (message.includes('GPA', 'null')){
              tmp2.push('Please enter a valid grade point average. \n');
          }
        });
        window.alert(tmp2.join(''));
      }
    }
  }

  export const UnregisterAStudent = (student, campus) =>{
    return async(dispatch) => {
      try{
        const studentInfo = {
          campusID: campus.id,
          studentID: student.id
        }
          const editedStudent = (await axios.post(`/api/students/edit/`, studentInfo)).data;
          dispatch(editStudent(editedStudent));
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
    if (action.type === DELETE_STUDENT) {
      state = [...state.filter(student => student.id != action.studentID)]  
    }
    if (action.type === EDIT_STUDENT) { 
      state = state.map(student=> student.id === action.student.id ? action.student : student)
    }
    return state;
  }


  