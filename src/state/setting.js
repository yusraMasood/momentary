import { apiHeaders, endpoints } from "../Api/configs";
import { apiSlice } from "./apiSlice";


export const ExtendedSettingSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

  getSupportDetails: builder.query({
    query: (queryArg) => ({
      url: `${endpoints.setting.supportContent}/${queryArg}`,
      method: apiHeaders.get,
      headers: apiHeaders.headerjson,
    //   params: {...queryArg},
    }),
  }),
  postContactUs: builder.mutation({
    query: (data) => ({
      url: endpoints.setting.contact,
      method: apiHeaders.post,
      headers: apiHeaders.headerjson,
      body: data,
    }),
  }),


  
})
})

export const {
    useGetSupportDetailsQuery,
    usePostContactUsMutation
} = ExtendedSettingSlice;