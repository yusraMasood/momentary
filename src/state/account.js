import { apiHeaders, endpoints } from "../Api/configs";
import { apiSlice } from "./apiSlice";

 
export const extendedProfileSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query({
      query: () => ({
        url: endpoints.account.profile,
        method: apiHeaders.get,
        headers: apiHeaders.headerjson,
      }),
    }),
    postProfile: builder.mutation({
      query: (queryArg) => ({
        url: endpoints.account.update,
        method: apiHeaders.post,
        headers: apiHeaders.headerjson,
        body: {...queryArg},
      }),
    }),
    postChangePassword: builder.mutation({
      query: (queryArg) => ({
        url: endpoints.account.changePassword,
        method: apiHeaders.post,
        headers: apiHeaders.headerjson,
        body: {...queryArg},
      }),
    }),
    postImage: builder.mutation({
      query: (data) => ({
        url: endpoints.account.updateImage,
        method: apiHeaders.post,
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
