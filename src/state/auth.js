import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {endpoints} from '../Api/configs';
import {apiSlice} from './apiSlice';

export const authSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    postLogin: builder.mutation({
      query: queryArg => ({
        url: endpoints.auth.login,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {...queryArg},
      }),
      
    }),
    postSignup: builder.mutation({
      query: queryArg => ({
        url: endpoints.auth.register,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {...queryArg},
      }),
      
    }),
    postVerifyEmail: builder.mutation({
      query: queryArg => ({
        url: endpoints.passwordRecovery.verifyEmail,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {...queryArg},
      }),
      
    }),
    postVerifyCode: builder.mutation({
      query: queryArg => ({
        url: endpoints.passwordRecovery.verifyCode,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {...queryArg},
      }),
      
    }),
    postResetPassword: builder.mutation({
      query: queryArg => ({
        url: endpoints.passwordRecovery.updatePassword,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {...queryArg},
      }),
      
    }),
  }),
});
export const {usePostLoginMutation,
usePostSignupMutation,
usePostVerifyEmailMutation,
usePostVerifyCodeMutation,
usePostResetPasswordMutation
} = authSlice;
// export const Login = createAsyncThunk(
//   'auth/loginuser',
//   async (body) => {
//     try {
//       let response;
//       await post(
//         endpoints.auth.login,
//        body,
//       )
//         .then(res => {
//           response = res.data.accessToken;
//         })
//         .catch(e => {
//           throw new Error(e);
//         });

//       return response;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },
// );
// export const Register = createAsyncThunk('auth/registeruser', async body => {
//   try {
//     let response;
//     console.log("signup screen ",body);
//     await post(endpoints.auth.register, body)
//       .then(res => {
//         response = res;
//       })
//       .catch(e => {
//         throw new Error(e);
//       });
//     return response;
//   } catch (error) {
//     throw new Error(error);
//   }
// });
// export const Logout = createAsyncThunk(
//   'auth/logoutuser',
//   async () => {
//     // return "hello"
//     try {
//       const response = await post(
//         endpoints.auth.logout,
//       );

//       return Promise.resolve(response);
//     } catch (error) {
//       return Promise.reject(error);
//     }
//   },
// );
// // export const Logout = createAsyncThunk('auth/logoutuser', async () => {
// //   try {
// //     let response;
// //     await get(endpoints.auth.logout)
// //       .then(res => {
// //         response = res;
// //       })
// //       .catch(e => {
// //         throw new Error(e);
// //       });

// //     return response;
// //   } catch (error) {
// //     throw new Error(error);
// //   }
// // });
// export const VerifyEmail = createAsyncThunk(
//   'auth/verifyemail',
//   async ({email}) => {
//     try {
//       const response = await post(
//         endpoints.passwordRecovery.verifyEmail,
//         {email},
//         false,
//       );

//       return Promise.resolve(response);
//     } catch (error) {
//       return Promise.reject(error);
//     }
//   },
// );

// export const VerifyCode = createAsyncThunk(
//   'auth/verifycode',
//   async ({email,code}) => {
//     console.log("email,code", email,code);
//     try {
//       const response = await post(
//         endpoints.passwordRecovery.verifyCode,
//         {email,code},
//         false,
//       );

//       return Promise.resolve(response);
//     } catch (error) {
//       console.log(error);
//       return Promise.reject(error);
//     }
//   },
// );
// // export const VerifyCode = createAsyncThunk(
// //   'auth/verifycode',
// //   async ({code}) => {
// //     try {
// //       let response;
// //       await post(endpoints.passwordRecovery.verifyCode, {code}, true)
// //         .then(res => {
// //           response = res;
// //         })
// //         .catch(e => {
// //           throw new Error(e);
// //         });

// //       return response;
// //     } catch (error) {
// //       throw new Error(error);
// //     }
// //   },
// // );
// export const ResetPassword = createAsyncThunk(
//   'auth/resetpassword',
//   async body => {
//     try {
//       let response;
//       await post(endpoints.passwordRecovery.updatePassword, body)
//         .then(res => {
//           response = res;
//         })
//         .catch(e => {
//           Toast.error(e);
//         });

//       return response;
//     } catch (error) {
//       Toast.error(error);
//     }
//   },
// );
// export const authSlice = createSlice({
//   name: initial.auth.name,
//   initialState: initial.auth.state,
//   reducers: {
//   setToken: (state, action) => {
//     state.token = action.payload;
//   },
//   setExpertise: (state, action) => {
//     console.log(`expertise payload`,action);
//     state.expertise = action.payload;
//   },
// },
// extraReducers: {
// [Login.fulfilled]: (state, action) => {
//   const {payload} = action;
//   state.token = payload;
// },
// [GetExpertise.fulfilled]: (state, action) => {
//   const {payload} = action;
//   state.expertise = payload;
// },
// [Logout.fulfilled]: state => {
//   state.token = null;
// },
// [Logout.rejected]: state => {
//   state.token = null;
// },
//   },
// });
// export const {setToken,setExpertise} = authSlice.actions;
// export default authSlice.reducer;
// export const useToken = () => {
//   const token = useSelector(state => state.auth.token);
//   return token;
// };
// export const useExpertise = () => {
//   const expertise = useSelector(state => state.auth.expertise);
//   return expertise;
// };
