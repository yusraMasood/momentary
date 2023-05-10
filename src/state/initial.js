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
    fontStyle:null,
    
  },
  name: 'auth',
};
const entry = {
  state: {
  setting:{
    visiblity: "",
    hashtags:[],
    comment: true,
    location: null,
    selectedPeople:[]
  }
    
  },
  name: 'entry',
};

const apiSlice = {
  state: {
  },
  name: 'apiSlice',
};
const initial = {
  general: general,
  auth,
  apiSlice,
  entry
};
export default initial;
