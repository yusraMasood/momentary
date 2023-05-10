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
    postUpdateEntry: builder.mutation({
      query: (data) => ({
        url: `${endpoints.entry.update}/${data?.id}`,
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

  
  getEntries: builder.query({
    
    query: (queryArg) => ({
      url: endpoints.entry.allEntries,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {...queryArg},
      transformResponse: (response, previousData) => {
        console.log("response,previousData",response,previousData);
        return [...previousData?.journalEntries, ...response.data?.journalEntries];
      },
      pagination: {
        perPage: 10,
      },
    }),
    
  }),
    postDeleteEntry: builder.mutation({
      query: (queryArg) => ({
        url: `${endpoints.entry.deleteEntry}/${queryArg}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // params: queryArg,
      }),
    }),
    postPinEntry: builder.mutation({
      query: (queryArg) => ({
        url: `${endpoints.entry.pinEntry}/${queryArg}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        params: queryArg,
      }),
    }),
    getEntryById: builder.query({
      query: (queryArg) => ({
        url: `${endpoints.entry.entryById}/${queryArg}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        params: queryArg,
      }),}),
  
})})

export const {
  usePostAddEntryMutation,
  useGetHashtagsQuery,
  useGetEntriesQuery,
  usePostDeleteEntryMutation,
  useGetEntryByIdQuery,
  usePostUpdateEntryMutation,
  usePostPinEntryMutation
  
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