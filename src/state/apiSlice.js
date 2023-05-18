import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { base_url } from '../Api/configs';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
    tagTypes: ['Post'],
    prepareHeaders: (headers, {getState}) => {
      const token =getState()?.auth?.token

      console.log(" token in api slice", token);
    

      if(token){
        headers.set('authorization', `Bearer ${token}`);

      }
      return headers;
    },
  }),
  endpoints: builder => ({
    
  }),
});