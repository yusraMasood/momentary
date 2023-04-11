import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {endpoints} from '../Api/configs';
import {apiSlice} from './apiSlice';
import initial from './initial';
import {useSelector} from 'react-redux';

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
        // credentials: 'include',
      }),
      transformResponse: result => result?.data?.token,
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          console.log('data', data);
          dispatch(setToken(data));
        } catch (error) {}
      },
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
export const {
  usePostLoginMutation,
  usePostSignupMutation,
  usePostVerifyEmailMutation,
  usePostVerifyCodeMutation,
  usePostResetPasswordMutation,
} = authSlice;

export const authSliceToken = createSlice({
  name: initial.auth.name,
  initialState: initial.auth.state,
  reducers: {
    setToken: (state, action) => {
      console.log("setToken",action);
      state.token = action.payload;
    },
  },
});
export const {setToken} = authSliceToken.actions;
export default authSliceToken.reducer;
export const useToken = () => {
  const token = useSelector(state => state.auth.token);
  return token;
};
