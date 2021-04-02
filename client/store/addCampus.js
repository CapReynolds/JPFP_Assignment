// import axios from 'axios';

// const initialState = [];

// //action type
// export const ADD_CAMPUS = 'CREATE_CAMPUS';

// //action creator
// export const createCampus = (campus) => {
//   console.log('in create campus creator');
//     return {
//       type: CREATE_CAMPUS,
//       campus,
//     };
//   };
  
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
//   };
  

//   export default (state = initialState, action) => {
//     //console.log(action.campuses);
//     //console.log('in add campus reducer');
//     if (action.type === ADD_CAMPUS) {
//       state = [...state, action.campus]
      
//     }
//     return state;
//   };