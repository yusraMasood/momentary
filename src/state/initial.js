const general = {
  state: {
    globalLoadingEnabled: false,
    inlineLoadingEnabled: false,
  },
  name: 'general',
};
const auth = {
  state: {
    token: null,
    expertise:null
  },
  name: 'auth',
};
const account = {
  state: {
    profile: {},
    credentials: {
      email: null,
      password: null,
      rememberMe: false
    },
    location: {
      coordinate: {
        latitiude: 0,
        longitude: 0,
      },
      address: '',
      city: '',
      country: '',
    },
  },
  name: 'account',
};

const home = {
  state: {
  },
  name: 'home',
};

const miscellaneous = {
  state: {
  },
  name: 'miscellaneous',
};

const initial = {
  general: general,
  auth,
  account,
  home,
  miscellaneous
};
export default initial;
