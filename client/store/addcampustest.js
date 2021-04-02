// import axios from 'axios';

// const initialState = [];

// //action type
// export const ADD_CAMPUS = 'ADD_CAMPUS';

// //action creator
// export const addCampus = (campus) => {
//   console.log('in add campus creator');
//     return {
//       type: ADD_CAMPUS,
//       campus,
//     };
// };
  
// export const createCampus = (campusName, campusAddress) =>{
//     console.log('in create campus', campusName, campusAddress);
//     return async(dispatch) => {
//       try{
//           const newCampus = {
//             name: campusName,
//             address: campusAddress
//           }
//           const campus = (await axios.post('/api/campuses', newCampus)).data;
//           console.log(campus, 'post axios');
//           dispatch(addCampus(campus));
//       }
//       catch(err)
//       {
//         console.log(err);
//       }
//     }
//   }
  

//   export default (state = initialState, action) => {
//     //console.log(action.campuses);
//     //console.log('in add campus reducer');
//     if (action.type === ADD_CAMPUS) {
//       state = [...state, action.campus]
      
//   }
//     return state;
//   }