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
    profile:null
    
  },
  name: 'auth',
};
const entry = {
  state: {
  setting:{
    visiblity: "Global Network",
    hashtags:[],
    comment: true,
    location: null,
    selectedPeople:[],
    selectedPeopleId:[]
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
