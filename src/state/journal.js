import { createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../Api/configs";
import { apiSlice } from "./apiSlice";
import initial from "./initial";
import { useSelector } from "react-redux";


export const entendedEntrySlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    postAddJournal: builder.mutation({
      query: (data) => ({
        url: endpoints.journal.add,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:data,
      }),
    }),
  getJournals: builder.query({
    query: (queryArg) => ({
      url: endpoints.journal.allJournals,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {...queryArg},
    }),
    // serializeQueryArgs: ({ endpointName }) => {
    //   console.log("endpointName",endpointName);
    //   return endpointName
    // },
    // merge: (currentCache, newItems) => {
    //   // console.log("currentCache, newItems in merge",currentCache, newItems);
    //   currentCache.push(...newItems)
    // },
    // forceRefetch({ currentArg, previousArg }) {
    //   return currentArg !== previousArg
    // },
    
    // transformResponse: (response, meta, arg) => response.data,
  }),
    postDeleteJournal: builder.mutation({
      query: (queryArg) => ({
        url: `${endpoints.journal.delete}/${queryArg}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // params: queryArg,
      }),
    }),
    getJournalById: builder.query({
      query: (queryArg) => ({
        url: `${endpoints.journal.journalDetails}/${queryArg}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // params: {...queryArg},
      }),}),
      postUpdateJournal: builder.mutation({
        query: (queryArg) => ({
          url: `${endpoints.journal.update}/${queryArg}`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // params: queryArg,
        }),

        // transformResponse:(response)=>{
        //   console.log(response,"response");
        // }
      
      }),
  
})})

export const {
    useGetJournalByIdQuery,
    useGetJournalsQuery,
    usePostAddJournalMutation,
    usePostDeleteJournalMutation,
    usePostUpdateJournalMutation
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