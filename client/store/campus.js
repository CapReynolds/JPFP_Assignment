import axios from 'axios'

//action type
const SET_CAMPUSES = 'SET_CAMPUSES'

//action creator
export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses
  }
}

export const fetchCampuses = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/campuses')
      dispatch(setCampuses(data))
    } catch(err) {
      console.log(err)
    }
  }
}

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CAMPUSES:
      return action.campuses
    default:
      return state
  }
}
