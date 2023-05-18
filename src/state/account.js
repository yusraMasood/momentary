import { endpoints } from "../Api/configs";
import { headerJson } from "../utils/Constants";
import { apiSlice } from "./apiSlice";


export const extendedProfileSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query({
      query: (queryArg) => ({
        url: endpoints.account.profile,
        method: 'GET',
        headers: headerJson,
        params: {...queryArg},
      }),
    }),
    postProfile: builder.mutation({
      query: (queryArg) => ({
        url: endpoints.account.update,
        method: 'POST',
        headers: headerJson,
        body: {...queryArg},
      }),
    }),
    postChangePassword: builder.mutation({
      query: (queryArg) => ({
        url: endpoints.account.changePassword,
        method: 'POST',
        headers: headerJson,
        body: {...queryArg},
      }),
    }),
    postImage: builder.mutation({
      query: (data) => ({
        url: endpoints.account.updateImage,
        method: 'POST',
        headers: {
          'Content-Type' : 'multipart/form-data',
          // 'Content-Type': 'application/json',
          Accept: 'multipart/form-data',
         
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
