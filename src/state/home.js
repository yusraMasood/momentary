import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import initial from './initial';
import {get, post} from '../Api';
import {endpoints} from '../Api/configs';


export const GetVenueList = createAsyncThunk(
  'home/getVenue',
  async (data) => {
    try {
      const response = await get(
        endpoints.home.venue,data
      );

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
export const GetMyJobs = createAsyncThunk(
  'home/getMyJobs',
  async (data) => {
    try {
      const response = await get(
        endpoints.home.job,data
      );

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
export const GetVenueDetails = createAsyncThunk(
  'home/venueDetail',
  async (data) => {
    try {
      const response = await get(
        endpoints.home.venueDetail,data
      );

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
export const PostApplyJob = createAsyncThunk(
  'home/applyjob',
  async (data) => {
    try {
      const response = await post(
        endpoints.home.applyJob,data
      );

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
export const PostMarkRead = createAsyncThunk(
  'home/markRead',
  async (body) => {
    try {
      const response = await post(
        endpoints.home.markRead,body
      );

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
export const GetNotificationListing = createAsyncThunk(
  'home/notifications',
  async (data) => {
    try {
      const response = await get(
        endpoints.home.notification,data
      );

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const homeSlice = createSlice({
  name: initial.home.name,
  initialState: initial.home.state,
  reducers: {},
  extraReducers: {
    // [GetWishlist.fulfilled]: (state, action) => {
    //   state.wishlist = action.payload;
    // },
  },
});

export default homeSlice.reducer;
