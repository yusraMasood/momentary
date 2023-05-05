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
    getFeed: builder.query({
      query: (queryArg) => ({
        url: endpoints.friend.feed,
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
        postAddFriend: builder.mutation({
          query: (data) => ({
            url: `${endpoints.friend.respondFriendRequest}/${data?.id}`,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:data,
          }),
        }),
        postRemoveFriend: builder.mutation({
          query: (queryArg) => ({
            url: `${endpoints.friend.removeFriend}/${queryArg}`,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            // body:data,
          }),
        }),
        postRemoveFriendRequest: builder.mutation({
          query: (queryArg) => ({
            url: `${endpoints.friend.removeFriendRequest}/${queryArg}`,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            // body:data,
          }),
        }),
})})

export const {
    // useGetMyFriendsQuery,
    useGetFriendRequestQuery,
    useGetFeedQuery,
    usePostAddFriendMutation,
    useGetMyFriendsQuery,
    usePostRemoveFriendMutation,
    usePostRemoveFriendRequestMutation
     
 
  
} = entendedEntrySlice;