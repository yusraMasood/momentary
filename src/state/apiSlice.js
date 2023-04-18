import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { base_url } from '../Api/configs';
import initial from './initial';
import { createSlice } from '@reduxjs/toolkit';
import { useToken } from './auth';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
    tagTypes: ['Post'],
    prepareHeaders: (headers, {getState}) => {
      const token =getState()?.auth?.token
    

      if(token){
        headers.set('authorization', `Bearer ${token}`);

      }
      return headers;
    },
  }),
  endpoints: builder => ({
    
  }),
});