import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { base_url } from '../Api/configs';
import initial from './initial';
import { createSlice } from '@reduxjs/toolkit';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
    tagTypes: ['Post'],
    prepareHeaders: (headers, {getState}) => {
      const token = getState();
      // console.log("token", token);
      // const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDMzZDVlZWFlZTY0ZjViNjRiZDQ2NzIiLCJ1cGRhdGVkQXQiOjE2ODExMTg3MDI4NjcsInJvbGUiOiJhZG1pbiIsInRva2VuQ3JlYXRlZEF0IjoxNjgxMTE4NzMwNTY3LCJpYXQiOjE2ODExMTg3MzB9.OODO3fnrBQWEQgZjm8JO8BeoqasY-9UW3GQX1I481jM"
  
      headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    // getMe: builder.query({
    //   query() {
    //     return {
    //       url: 'users/me',
    //       credentials: 'include',
    //     };
    //   },
    //   transformResponse: (result) =>
    //   result.data.user,
    // async onQueryStarted(args, { dispatch, queryFulfilled }) {
    //   try {
    //     const { data } = await queryFulfilled;
    //     dispatch(setUser(data));
    //   } catch (error) {}
    // },
    // })
    
  }),
});
// const apiSliceReducer = createSlice({
//   name: initial.apiSlice.name,
//   initialState: initial.apiSlice.state,
//   reducers: {
//   setToken: (state, action) => {
//     console.log("settoken",action);
//     state.token = action.payload;
//   },
// }})
// export const {setToken} = apiSliceReducer.actions;
// export default apiSliceReducer.reducer;
// export const useToken = () => {
//   const token = useSelector(state => state.auth.token);
//   return token;
// };