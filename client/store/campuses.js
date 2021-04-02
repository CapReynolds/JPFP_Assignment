import axios from 'axios';

const LOAD_CAMPUSES = 'LOAD_CAMPUSES'; //action type
const CREATE_CAMPUS = 'CREATE_CAMPUS'; //action type

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

  export const getCampuses = () => {
    //console.log('in get campuses');
    return async (dispatch) => {
      try {
        const {data} = await axios.get('/api/campuses');
        //const allCampuses = (await axios.get('/api/campuses')).data
        //console.log(' axios');
        dispatch(loadCampuses(data))
      } catch(err) {
        console.log(err)
      }
    }
  }

  export const AddACampus = (campusName, campusAddress, history) =>{
    //console.log('in create campus', campusName, campusAddress);
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

  export default (state = initialState, action) => {
    //console.log(action.campuses);
    if (action.type === LOAD_CAMPUSES) {
      state = action.campuses  
    }
    if (action.type === CREATE_CAMPUS) {
      state = [...state, action.campus]  
    }
    return state;
  }

