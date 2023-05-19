import { createSlice} from '@reduxjs/toolkit';
import {apiHeaders, endpoints} from '../Api/configs';
import {apiSlice} from './apiSlice';
import initial from './initial';
import {useSelector} from 'react-redux';

export const authSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    postLogin: builder.mutation({
      query: data => ({
        url: endpoints.auth.login,
        method: apiHeaders.post,
        headers: apiHeaders.headerjson,
        body: data,
        credentials: 'include',
      }),
    }),
    postSignup: builder.mutation({
      query: data => ({
        url: endpoints.auth.register,
        method: apiHeaders.post,
        headers: apiHeaders.headerjson,
        body: data,
      }),
    }),
    postVerifyEmail: builder.mutation({
      query: data => ({
        url: endpoints.passwordRecovery.verifyEmail,
        method: apiHeaders.post,
        headers: apiHeaders.headerjson,
        body: data,
      }),
    }),
    postVerifyCode: builder.mutation({
      query: data => ({
        url: endpoints.passwordRecovery.verifyCode,
        method: apiHeaders.post,
        headers: apiHeaders.headerjson,
        body: data,
      }),
    }),
    postResetPassword: builder.mutation({
      query: data => ({
        url: endpoints.passwordRecovery.updatePassword,
        method: apiHeaders.post,
        headers: apiHeaders.headerjson,
        body: data,
      }),
    }),
    getUsernameSuggestion: builder.query({
      query: (queryArg) => ({
        url: endpoints.auth.usernameSuggestion,
        method: 'GET',
        headers: apiHeaders.headerjson,
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

