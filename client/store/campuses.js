import axios from 'axios';

const LOAD_CAMPUSES = 'LOAD_CAMPUSES'; //action type
const CREATE_CAMPUS = 'CREATE_CAMPUS'; //action type
const DELETE_CAMPUS = 'DELETE_CAMPUS'; //action type

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
          const campus = (await axios.get(`/api/campuses/${campusID}`)).data;
          console.log(campus);
          dispatch(deleteCampus(campusID));
          const removedcampus = (await axios.delete(`/api/campuses/${campusID}`)).data;
          //dispatch(deleteCampus(campusID));
          //history.push(`/campuses/${campus.id}`);
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
      state = [...state.filter(campus => campus.id != action.campusID)]  
    }
    return state;
  }

