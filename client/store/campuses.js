import axios from 'axios';

const LOAD_CAMPUSES = 'LOAD_CAMPUSES'; //action type
const CREATE_CAMPUS = 'CREATE_CAMPUS'; //action type
const DELETE_CAMPUS = 'DELETE_CAMPUS'; //action type
const EDIT_CAMPUS = 'EDIT_CAMPUS'; //action type

const initialState = [];

export const loadCampuses = (campuses) => {
    return {
      type: LOAD_CAMPUSES,
      campuses
    }
  }

  export const createCampus = (campus) => {
    return {
      type: CREATE_CAMPUS,
      campus
    }
  }

  export const deleteCampus = (campusID) => {
    return {
      type: DELETE_CAMPUS,
      campusID
    }
  }

  export const editCampus = (campus) => {
    return {
      type: EDIT_CAMPUS, 
      campus
    }
  }

  export const getCampuses = () => {
    return async (dispatch) => {
      try {
        const {data} = await axios.get('/api/campuses');
        dispatch(loadCampuses(data))
      } catch(err) {
        console.log(err)
      }
    }
  }

  export const AddACampus = (campusName, campusAddress, history) =>{
    return async(dispatch) => {
      try{
          const newCampus = {
            name: campusName,
            address: campusAddress
          }
          const campus = (await axios.post('/api/campuses', newCampus)).data;
          dispatch(createCampus(campus));
          history.push(`/campuses/${campus.id}`);
      }
      catch(err)
      {
        console.log(err);
      }
    }
  }

  export const DeleteACampus = (campusID) =>{
    return async(dispatch) => {
      try{
          dispatch(deleteCampus(campusID));
          const removedcampus = (await axios.delete(`/api/campuses/${campusID}`)).data;
      }
      catch(err)
      {
        console.log(err);
      }
    }
  }

  export const EditACampus = (campusName, campusAddress, campusID, studentsArr) =>{
    return async(dispatch) => {
      try{
        const campusInfo = {
          id: campusID,
          name: campusName,
          address: campusAddress,
          students: studentsArr
        }
          const campus = (await axios.post(`/api/campuses/edit/`, campusInfo)).data;
          dispatch(editCampus(campus));
      }
      catch(err)
      {
        console.log(err);
      }
    }
  }

  export default (state = initialState, action) => {
    if (action.type === LOAD_CAMPUSES) {
      state = action.campuses  
    }
    if (action.type === CREATE_CAMPUS) {
      state = [...state, action.campus]  
    }
    if (action.type === DELETE_CAMPUS) {
      state = [...state.filter(campus => campus.id !== action.campusID)]  
    }
    if (action.type === EDIT_CAMPUS) { 
      state = state.map(campus=> campus.id === action.campus.id ? action.campus : campus)
    }
    return state;
  }

