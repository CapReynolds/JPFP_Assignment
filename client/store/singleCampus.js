import axios from 'axios';

const initialState = {};

export const SET_CAMPUS = 'SET_CAMPUS';

export const setCampus = (campus) => {
  return {
    type: SET_CAMPUS,
    campus,
  };
};


export const getCampus = (campusID) =>{

  return async(dispatch) => {
    try{
      const newCampus = (await axios.get(`/api/campuses/${campusID}`)).data;
      dispatch(setCampus(newCampus));
    }
    catch(err)
    {
      console.log(err);
    }
  }
}


export default (state = initialState, action) => {
  if(action.type === SET_CAMPUS)
    state = action.campus

  return state;
}