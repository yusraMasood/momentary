import { createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../Api/configs";
import { apiSlice } from "./apiSlice";
import initial from "./initial";
import { useSelector } from "react-redux";


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

export const entrySliceToken = createSlice({
  name: initial.entry.name,
  initialState: initial.entry.state,
  reducers: {
    saveSetting: (state, action) => {
      state.setting = action.payload;
    },
  
  },
});
export const {saveSetting} = entrySliceToken.actions;
export default entrySliceToken.reducer;
export const useSetting = () => {
  const setting = useSelector(state => state.entry.setting);
  return setting;
};