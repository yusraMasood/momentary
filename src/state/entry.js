import { endpoints } from "../Api/configs";
import { apiSlice } from "./apiSlice";


export const entendedEntrySlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    postAddEntry: builder.mutation({
      query: (data) => ({
        url: endpoints.entry.add,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:data,
      }),
    }),
    getHashtags: builder.query({
      query: (queryArg) => ({
        url: endpoints.entry.hashtag,
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
  usePostAddEntryMutation,
  useGetHashtagsQuery
} = entendedEntrySlice;
