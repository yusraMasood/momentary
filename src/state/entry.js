import { createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../Api/configs";
import { apiSlice } from "./apiSlice";
import initial from "./initial";
import { useSelector } from "react-redux";
import { headerJson } from "../utils/Constants";


export const entendedEntrySlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    postAddEntry: builder.mutation({
      query: (data) => ({
        url: endpoints.entry.add,
        method: 'POST',
        headers: headerJson,
        body:data,
      }),
    }),
    postUpdateEntry: builder.mutation({
      query: (data) => ({
        url: `${endpoints.entry.update}/${data?.id}`,
        method: 'POST',
        headers: headerJson,
        body:data,
      }),
    }),
    getHashtags: builder.query({
      query: (queryArg) => ({
        url: endpoints.entry.hashtag,
        method: 'GET',
        headers: headerJson,
        params: {...queryArg},
      }),
    }),

  
  getEntries: builder.query({
    
    query: (queryArg) => ({
      url: endpoints.entry.allEntries,
      method: 'GET',
      headers: headerJson,
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
        headers: headerJson,
        // params: queryArg,
      }),
    }),
    postAddToLibrary: builder.mutation({
      query: (queryArg) => ({
        url: `${endpoints.entry.addToLibrary}/${queryArg}`,
        method: 'POST',
        headers: headerJson,
        // params: queryArg,
      }),
    }),
    postPinEntry: builder.mutation({
      query: (queryArg) => ({
        url: `${endpoints.entry.pinEntry}/${queryArg}`,
        method: 'POST',
        headers: headerJson,
        params: queryArg,
      }),
    }),
    postLikeEntry: builder.mutation({
      query: (queryArg) => ({
        url: `${endpoints.entry.like}/${queryArg}`,
        method: 'POST',
        headers: headerJson,
        params: queryArg,
      }),
    }),
    postCommentEntry: builder.mutation({
      query: (data) => ({
        url: `${endpoints.entry.comment}/${data?.id}`,
        method: 'POST',
        headers: headerJson,
        
        body: data,
      }),
    }),
    postShareEntry: builder.mutation({
      query: (data) => ({
        url: `${endpoints.entry.share}/${data?.id}`,
        method: 'POST',
        headers: headerJson,
        body: data,
      }),
    }),

    getEntryById: builder.query({
      query: (queryArg) => ({
        url: `${endpoints.entry.entryById}/${queryArg}`,
        method: 'GET',
        headers: headerJson,
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
  usePostPinEntryMutation,
  usePostAddToLibraryMutation,
  usePostLikeEntryMutation,
  usePostCommentEntryMutation,
  usePostShareEntryMutation
  
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