export const urls = {
  v1: `https://mobileapps.onlinetestingserver.com:1338/apis/`, //dev
  // v2: `https://dev74.onlinetestingserver.com:7081/`,
  // v3: `https://dev28.onlinetestingserver.com/soachatapi/api/`,
};
export const base_url = urls.v1;
// export const base_urlImage = urls.v2;
// export const soa_url = urls.v3;
export const endpoints = {
  auth: {
    login: 'user/login',
    logout: 'auth/logout',
    register: 'user/signup',
    expertise:"expertise/all"
  },
  account: {
    profile: 'user',
    update: 'user/update',
    changePassword: 'user/updatePassword',
    uploadPicture:"user/upload"
  },
  passwordRecovery: {
    verifyEmail: 'user/forgotPassword/request',
    verifyCode: 'user/forgotPassword/verifyCode',
    updatePassword: 'user/forgotPassword/changePassword',
  },
  home: {
   venue:"venue/all",
   notification:"notification/all",
   applyJob:"job/apply",
   venueDetail:"venue/",
   job:"job/musician/logs",
   markRead:"notification/mark-as-read"
  },
  
  miscellaneous: {
    contactUs: 'feedback/create',
    about:"about-us",
    terms:"terms-and-conditions",
    privacy:"privacy-policy"
  },
  
};
export const headers={
          
  json: `'Content-Type': 'application/json'`
}
export default {
  endpoints: endpoints,
  base_url: base_url,
};
