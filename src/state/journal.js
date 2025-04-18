import { apiHeaders, endpoints } from "../Api/configs";
import { apiSlice } from "./apiSlice";


export const extendedJournalSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    postAddJournal: builder.mutation({
      query: (data) => ({
        url: endpoints.journal.add,
        method: apiHeaders.headerjson,
        headers: apiHeaders.headerjson,
        body:data,
      }),
    }),
  getJournals: builder.query({
    query: (queryArg) => ({
      url: endpoints.journal.allJournals,
      method: apiHeaders.get,
      headers: apiHeaders.headerjson,
      params: {...queryArg},
    }),
  
    // serializeQueryArgs: ({ endpointName }) => {
    //   return endpointName
    // },
    // merge: (currentCache, newItems) => {
    //   currentCache.push(...newItems)
    // },
    // forceRefetch({ currentArg, previousArg }) {
    //   return currentArg !== previousArg
    // },
    
    // transformResponse: (response, meta, arg) => response.data,
  }),
  getLibrary: builder.query({
    query: (queryArg) => ({
      url: endpoints.library.library,
      method: apiHeaders.get,
      headers: apiHeaders.headerjson,
      params: {...queryArg},
    }),}),
    postDeleteJournal: builder.mutation({
      query: (queryArg) => ({
        url: `${endpoints.journal.delete}/${queryArg}`,
        method: apiHeaders.headerjson,
        headers: apiHeaders.headerjson,
        // params: queryArg,
      }),
    }),
    getJournalById: builder.query({
      query: (queryArg) => ({
        url: `${endpoints.journal.journalDetails}/${queryArg}`,
        method: apiHeaders.get,
        headers: apiHeaders.headerjson,
        // params: {...queryArg},
      }),}),
      postUpdateJournal: builder.mutation({
        query: (queryArg) => ({
          url: `${endpoints.journal.update}/${queryArg}`,
          method: apiHeaders.headerjson,
          headers: apiHeaders.headerjson,
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
    usePostUpdateJournalMutation,
    useGetLibraryQuery
} = extendedJournalSlice;

// export const entrySliceToken = createSlice({
//   name: initial.jout.name,
//   initialState: initial.entry.state,
//   reducers: {
//     // saveSetting: (state, action) => {
//     //   state.setting = action.payload;
//     // },
  
//   },
// });
// export const {saveSetting} = entrySliceToken.actions;
// export default entrySliceToken.reducer;
// export const useSetting = () => {
//   const setting = useSelector(state => state.entry.setting);
//   return setting;
// };