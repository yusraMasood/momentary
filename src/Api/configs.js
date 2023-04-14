export const urls = {
  v1: `https://mobileapps.onlinetestingserver.com:1338/apis/`, //dev
  v2: `https://mobileapps.onlinetestingserver.com:16001/`,
};
export const base_url = urls.v1;
export const base_urlImage = urls.v2;

export const endpoints = {
  auth: {
    login: 'user/login',
    logout: 'auth/logout',
    register: 'user/signup',
    expertise:"expertise/all"
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
