import {Platform} from 'react-native';

export const fonts = {
  poppins:{
    regular:'Poppins-Regular',
    semiBold:'Poppins-SemiBold',
    bold:'Poppins-Bold',
    medium:"Poppins-Medium",
    light:"Poppins-Light"
  },
  roboto:{
    regular:'Roboto-Regular',
    bold:'Roboto-Bold',
    medium:"Roboto-Medium",
    light:"Roboto-Light"
  },
  damion:{
    regular:Platform.select({
      android:"Damion-Regular",
      ios: "Damion"
    })
  },
};
