import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {endpoints} from '../Api/configs';
import {apiSlice} from './apiSlice';
import initial from './initial';
import {useSelector} from 'react-redux';

export const authSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    postLogin: builder.mutation({
      query: data => ({
        url: endpoints.auth.login,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
        credentials: 'include',
      }),
    }),
    postSignup: builder.mutation({
      query: data => ({
        url: endpoints.auth.register,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }),
    }),
    postVerifyEmail: builder.mutation({
      query: data => ({
        url: endpoints.passwordRecovery.verifyEmail,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }),
    }),
    postVerifyCode: builder.mutation({
      query: data => ({
        url: endpoints.passwordRecovery.verifyCode,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }),
    }),
    postResetPassword: builder.mutation({
      query: data => ({
        url: endpoints.passwordRecovery.updatePassword,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }),
    }),
    getUsernameSuggestion: builder.query({
      query: (queryArg) => ({
        url: endpoints.auth.usernameSuggestion,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {...queryArg},
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
  useGetUsernameSuggestionQuery
} = authSlice;

export const authSliceToken = createSlice({
  name: initial.auth.name,
  initialState: initial.auth.state,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setFont:(state,action)=>{
      state.fontStyle = action.payload;

    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    
  },
});
export const {setToken,setFont,setProfile} = authSliceToken.actions;
export default authSliceToken.reducer;
export const useToken = () => {
  const token = useSelector(state => state.auth.token);
  return token;
};
export const useFont = () => {
  const token = useSelector(state => state.auth.fontStyle);
  return token;
};
export const userProfile = () => {
  const token = useSelector(state => state.auth.profile);
  return token;
};

