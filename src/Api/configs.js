export const urls = {
  v1: `https://mobileapps.onlinetestingserver.com:1701/apis/`, //dev
  v2: `https://mobileapps.onlinetestingserver.com:1701/`,
};
export const base_url = urls.v1;
export const base_urlImage = urls.v2;

export const endpoints = {
  auth: {
    login: 'user/login',
    logout: 'auth/logout',
    register: 'user/signup',
    expertise:"expertise/all",
    usernameSuggestion:"user/username-suggestions"
  },
  account: {
    profile: 'user',
    update: 'user/edit',
    updateImage: 'upload/user',
    changePassword:"user/changepassword/"
  },
  passwordRecovery: {
    verifyEmail: 'user/forgotPassword/request',
    verifyCode: 'user/forgotPassword/verifyCode',
    updatePassword: 'user/forgotPassword/changePassword',
  },
  entry:{
    add:"user/journal/entries/create",
    hashtag:"hashTags/all",
    allEntries:"user/journal/entries",
    deleteEntry:"user/journal/entries/delete" ,
    entryById:"user/journal/entries" ,
    update:"user/journal/entries/update"
  },
  friend:{
    myFriends:"user/my-friends/all",
    friendRequest:"user/friend-requests/all",
    feed:"feeds/all",
    respondFriendRequest:"user/friend-requests/respond",
    sendRequest:"user/friend-requests/send",
    removeFriend:"user/my-friends/remove",
    decline:"user/friend-requests/remove"


  },
  journal:{
    add:"user/journals/create",
    allJournals:"user/journals/all",
    journalDetails:"user/journals",
    update:"user/journals/update",
    delete:"user/journals/delete"
  }
};
export const headers={
          
  json: `'Content-Type': 'application/json'`
}
export default {
  endpoints: endpoints,
  base_url: base_url,
};
