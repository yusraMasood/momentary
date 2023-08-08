import { apiHeaders, endpoints } from "../Api/configs";
import { apiSlice } from "./apiSlice";


export const extendedFriendSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
  getMyFriends: builder.query({
    query: (queryArg) => ({
      url: endpoints.friend.myFriends,
      method: apiHeaders.get,
      headers: apiHeaders.headerjson,
      params: {...queryArg},
    }),}),
    getFriendDetails: builder.query({
      query: (queryArg) => ({
        url: `${endpoints.friend.friendDetails}/${queryArg}`,
        method: apiHeaders.get,
        headers: apiHeaders.headerjson,
        params: {...queryArg},
      }),}),
    getFeed: builder.query({
      query: (queryArg) => ({
        url: endpoints.friend.feed,
        method: apiHeaders.get,
        headers: apiHeaders.headerjson,
        params: {...queryArg},
      }),}),
    
      getFeedDetails: builder.query({
        query: (queryArg) => ({
          url: `${endpoints.friend.feedDetails}/${queryArg}`,
          method: apiHeaders.get,
          headers: apiHeaders.headerjson,
          // params: {...queryArg},
        }),}),
    getFriendRequest: builder.query({
        query: (queryArg) => ({
          url: endpoints.friend.friendRequest,
          method: apiHeaders.get,
          headers: apiHeaders.headerjson,
          params: {...queryArg},
        }),}),
        postAddFriend: builder.mutation({
          query: (data) => ({
            url: `${endpoints.friend.respondFriendRequest}/${data?.id}`,
            method: apiHeaders.post,
            headers: apiHeaders.headerjson,
            body:data,
          }),
        }),
        postSendFriendRequest: builder.mutation({
          query: (data) => ({
            url: endpoints.friend.sendRequest,
            method: apiHeaders.post,
            headers: apiHeaders.headerjson,
            body:data,
          }),
        }),
        postRemoveFriend: builder.mutation({
          query: (queryArg) => ({
            url: `${endpoints.friend.removeFriend}/${queryArg}`,
            method: apiHeaders.post,
            headers: apiHeaders.headerjson,
            // body:data,
          }),
        }),
        postRemoveFriendRequest: builder.mutation({
          query: (queryArg) => ({
            url: `${endpoints.friend.removeFriendRequest}/${queryArg}`,
            method: apiHeaders.post,
            headers: apiHeaders.headerjson,
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
     
 
  
} = extendedFriendSlice;