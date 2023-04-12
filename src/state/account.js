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
    }),
    postProfile: builder.mutation({
      query: (queryArg) => ({
        url: endpoints.account.update,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {...queryArg},
      }),
    }),
    postChangePassword: builder.mutation({
      query: (queryArg) => ({
        url: endpoints.account.changePassword,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {...queryArg},
      }),
    }),
    postImage: builder.mutation({
      query: (data) => ({
        url: endpoints.account.updateImage,
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          Accept: 'application/json',
          'Content-Type' : 'multipart/form-data'
        },
        body:data,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  usePostProfileMutation,
  usePostChangePasswordMutation,
  usePostImageMutation
} = extendedProfileSlice;
