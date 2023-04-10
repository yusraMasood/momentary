import { endpoints } from "../Api/configs";
import { apiSlice } from "./apiSlice";


export const extendedProfileSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query({
      query: (queryArg) => ({
        url: endpoints.account.profile,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {...queryArg},
      }),
      // transformResponse: (response) => {
      //   if(response?.meta?.pagination?.page === 1){
      //     return response
      //   }
      //   else{
      //     return response?.data.conc
      //   }
      //   return response
      // }
    }),
  }),
});

export const {useGetProfileQuery} = extendedProfileSlice;

// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import initial from './initial';
// import {get, post} from '../Api';
// import {endpoints} from '../Api/configs';
// import {Toast} from '../Api/APIHelpers';
// import {useSelector} from 'react-redux';
// import { Login } from './auth';
// export const GetProfile = createAsyncThunk('account/getprofile', async () => {
//   try {
//     let response;
//     await get(endpoints.account.profile)
//       .then(res => {
//         response = res?.data?.user;
//       })
//       .catch(e => {
//         // throw new Error(e);
//         Toast.errore(e);
//       });

//     return response;
//   } catch (error) {
//     // throw new Error(error);
//     Toast.error(error);
//   }
// });
// export const PostPicture = createAsyncThunk(
//   'account/uploadPicture',
//   async (data, {dispatch}) => {
//     try {
//       let response;
//       await post(endpoints.account.uploadPicture, data, true)
//         .then(res => {
//           response = res;
//         })
//         .catch(e => {
//           throw new Error(e);
//         });

//       return response;
//     } catch (error) {
//       console.warn(error);
//       throw new Error(error);
//     }
//   },
// ); 
// export const EditProfile = createAsyncThunk(
//   'account/editprofile',
//   async (data, {dispatch}) => {
//     try {
//       let response;
//       await post(endpoints.account.update, data)
//         .then(res => {
//           response = res;
//           dispatch(GetProfile());
//         })
//         .catch(e => {
//           throw new Error(e);
//         });

//       return response;
//     } catch (error) {
//       console.warn(error);
//       throw new Error(error);
//     }
//   },
// ); 

// export const ChangePassword = createAsyncThunk(
//   'account/changepassword',
//   async (body) => {
//     try {
//       const response = await post(
//         endpoints.account.changePassword,
//         body,
//         false,
//       );

//       return Promise.resolve(response);
//     } catch (error) {
//       console.log(error);
//       return Promise.reject(error);
//     }
//   },
// );

// export const ChangePassword = createAsyncThunk(
//   'account/changepassword',
//   async (body) => {
//     try {
//       let response;
//       await post(
//         endpoints.account.changePassword,
//         body,
//         false,
//       )
//         .then(res => {
//           response = res;
//         })
//         .catch(e => {
//           Toast.error(e);
//           throw new Error(e);
//         });

//       return response;
//     } catch (error) {
//       Toast.error(error);
//       throw new Error(error);
//     }
//   },
// );
// export const ContactUs = createAsyncThunk(
//   'account/contactus',
//   async (body) => {
//     try {
//       let response;
//       await post(
//         endpoints.miscellaneous.contactUs,
//         body,
//         false,
//       )
//         .then(res => {
//           response = res;
//         })
//         .catch(e => {
//           Toast.error(e);
//           throw new Error(e);
//         });

//       return response;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },
// );

// export const accountSlice = createSlice({
//   name: initial.account.name,
//   initialState: initial.account.state,
//   reducers: {
//     saveCredentials: (state, action) => {
//       state.credentials = action.payload;
//     },
//   },
//   extraReducers: {
//     [GetProfile.fulfilled]: (state, action) => {
//       const {payload} = action;
//       state.profile = payload;
//     },
//   },
// });
// export const useCredentials = () => {
//   const userCredentials = useSelector(state => state.account.credentials);
//   return userCredentials;
// };
// export const {saveCredentials} = accountSlice.actions;
// export default accountSlice.reducer;
