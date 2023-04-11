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
  },
  name: 'auth',
};

const apiSlice = {
  state: {
  },
  name: 'apiSlice',
};
const initial = {
  general: general,
  auth,
  apiSlice
};
export default initial;
