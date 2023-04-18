export const urls = {
  v1: `https://mobileapps.onlinetestingserver.com:1601/apis/`, //dev
  v2: `https://mobileapps.onlinetestingserver.com:1601/`,
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
    add:"user/journal/enteries/create",
    hashtag:"hashTags/all"
  }
  
  
};
export const headers={
          
  json: `'Content-Type': 'application/json'`
}
export default {
  endpoints: endpoints,
  base_url: base_url,
};
