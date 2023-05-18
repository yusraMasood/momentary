import { endpoints } from "../Api/configs";
import { apiSlice } from "./apiSlice";
import { headerJson } from "../utils/Constants";


export const entendedEntrySlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
  getMyFriends: builder.query({
    query: (queryArg) => ({
      url: endpoints.friend.myFriends,
      method: 'GET',
      headers: headerJson,
      params: {...queryArg},
    }),}),
    getFriendDetails: builder.query({
      query: (queryArg) => ({
        url: `${endpoints.friend.friendDetails}/${queryArg}`,
        method: 'GET',
        headers: headerJson,
        params: {...queryArg},
      }),}),
    getFeed: builder.query({
      query: (queryArg) => ({
        url: endpoints.friend.feed,
        method: 'GET',
        headers: headerJson,
        params: {...queryArg},
      }),}),
    
      getFeedDetails: builder.query({
        query: (queryArg) => ({
          url: `${endpoints.friend.feedDetails}/${queryArg}`,
          method: 'GET',
          headers: headerJson,
          // params: {...queryArg},
        }),}),
    getFriendRequest: builder.query({
        query: (queryArg) => ({
          url: endpoints.friend.friendRequest,
          method: 'GET',
          headers: headerJson,
          params: {...queryArg},
        }),}),
        postAddFriend: builder.mutation({
          query: (data) => ({
            url: `${endpoints.friend.respondFriendRequest}/${data?.id}`,
            method: 'POST',
            headers: headerJson,
            body:data,
          }),
        }),
        postSendFriendRequest: builder.mutation({
          query: (data) => ({
            url: endpoints.friend.sendRequest,
            method: 'POST',
            headers: headerJson,
            body:data,
          }),
        }),
        postRemoveFriend: builder.mutation({
          query: (queryArg) => ({
            url: `${endpoints.friend.removeFriend}/${queryArg}`,
            method: 'POST',
            headers: headerJson,
            // body:data,
          }),
        }),
        postRemoveFriendRequest: builder.mutation({
          query: (queryArg) => ({
            url: `${endpoints.friend.removeFriendRequest}/${queryArg}`,
            method: 'POST',
            headers: headerJson,
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
    usePostRemoveFriendRequestMutation,useGetFriendDetailsQuery,
    useGetFeedDetailsQuery,
    usePostSendFriendRequestMutation
     
 
  
} = entendedEntrySlice;