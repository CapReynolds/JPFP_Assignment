import axios from 'axios';

const initialState = {};

//action type
export const SET_CAMPUS = 'SET_CAMPUS';

//action creator
export const setCampus = (campus) => {
  return {
    type: SET_CAMPUS,
    campus,
  };
};


export const getCampus = (campusID) =>{
  //console.log('in get campus');
  return async(dispatch) => {
    try{
      const newCampus = (await axios.get(`/api/campuses/${campusID}`)).data;
      //console.log(newCampus);
      dispatch(setCampus(newCampus));
      //history.push(`/${campusID}`);
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