import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import initial from './initial';
import {get, post} from '../Api';
import {endpoints} from '../Api/configs';


export const GetAboutUs = createAsyncThunk(
  'home/about',
  async () => {
    try {
      const response = await get(
        endpoints.miscellaneous.about
      );

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
export const GetTermsAndConditions = createAsyncThunk(
    'home/terms',
    async () => {
      try {
        const response = await get(
          endpoints.miscellaneous.terms
        );
  
        return Promise.resolve(response);
      } catch (error) {
        return Promise.reject(error);
      }
    },
  );
  export const GetPrivacyPolicy = createAsyncThunk(
    'home/privacy',
    async () => {
      try {
        const response = await get(
          endpoints.miscellaneous.privacy
        );
  
        return Promise.resolve(response);
      } catch (error) {
        return Promise.reject(error);
      }
    },
  );

export const homeSlice = createSlice({
  name: initial.miscellaneous.name,
  initialState: initial.miscellaneous.state,
  reducers: {},
  extraReducers: {
    // [GetWishlist.fulfilled]: (state, action) => {
    //   state.wishlist = action.payload;
    // },
  },
});

export default homeSlice.reducer;
