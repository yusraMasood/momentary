import { createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../Api/configs";
import { apiSlice } from "./apiSlice";
import initial from "./initial";
import { useSelector } from "react-redux";


export const entendedEntrySlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
  getMyFriends: builder.query({
    query: (queryArg) => ({
      url: endpoints.friend.myFriends,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {...queryArg},
    }),}),
    getFriendRequest: builder.query({
        query: (queryArg) => ({
          url: endpoints.friend.friendRequest,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          params: {...queryArg},
        }),}),
})})

export const {
    useGetMyFriendsQuery,
    useGetFriendRequestQuery
 
  
} = entendedEntrySlice;