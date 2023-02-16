import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  drawerIcons,
  generalImages,
  icons,
  sampleImages,
} from '../../assets/images';
import DamionRegular from '../../components/Texts/DamionRegular';
import PragmaticaRegular from '../../components/Texts/RobotoSemiBold';
import RippleHOC from '../../components/wrappers/Ripple';
import { colors } from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';
import styles from './styles';


const routesWithTitle = {
};
const titles = {
  HomeScreen:"Momentary",
  FriendNetworkScreen:"My Network",
  LibraryScreen:"Library",
  GlobalNetworkScreen:"Global Network",
  NewEntry:"Add Entry",
  NotificationScreen:"Notification",
  AddNewJournal:"Create Journal",
  StoreScreen:"Store"

};
const routesWithBackIcon={
  LibraryScreen:"LibraryScreen",
  NewEntry:"NewEntry",
  NotificationScreen:"NotificationScreen",
  AddNewJournal:"AddNewJournal"
}
const routesWithImage = {

};
const routesWithSetting = {
  HomeScreen:"HomeScreen",
  FriendNetworkScreen:"FriendNetworkScreen",
  GlobalNetworkScreen:"GlobalNetworkScreen",
  StoreScreen:"StoreScreen"
}
const routesWithNotification = {
  HomeScreen:"HomeScreen",
  FriendNetworkScreen:"FriendNetworkScreen",
  GlobalNetworkScreen:"GlobalNetworkScreen",
  StoreScreen:"StoreScreen"
}
const NavigationOptions = navProps => {
  return {
    headerTitle: () => renderTitle(navProps),
    headerRight: () => renderheaderRight(navProps),
    headerLeft: () => renderHeaderLeft(navProps),
    headerTitleAlign: 'center',
    headerLeftContainerStyle: {paddingLeft: 4 * vw},
    headerRightContainerStyle: {paddingRight: 4 * vw},
    // headerStyle:{backgroundColor: colors.general.black}
    headerStyle: {
      backgroundColor: colors.general.black,
      shadowColor: 'transparent',
      // height: vh * 14,
    },
  };
};
const renderTitle = props => {
  if (titles[props?.route?.name]) {
    return (
      <View>
        <DamionRegular style={styles.titleCenterText}>
          {titles[props?.route?.name]}
        </DamionRegular>
      </View>
    );
  }
};
const renderHeaderLeft = props => {
  if (routesWithSetting[props?.route?.name]) {
    return (
        <RippleHOC onPress={() => props.navigation.goBack()}>
          <Image source={icons.setting} style={styles.backIcon} />
        </RippleHOC>
    );
  }
  if (routesWithBackIcon[props?.route?.name]) {
    return (
        <RippleHOC onPress={() => props.navigation.goBack()}>
          <Image source={icons.back} style={styles.backIcon} />
        </RippleHOC>
    );
  }
  if (routesWithTitle[props?.route?.name]) {
    return (
      <PragmaticaRegular style={styles.paymentText}>
        {routesWithTitle[props?.route?.name]}
      </PragmaticaRegular>
    );
  }
};

const renderheaderRight = props => {
  if (routesWithImage[props?.route?.name]) {
    return (
      <RippleHOC
        onPress={() => props.navigation.navigate('ProfileNavigator')}
        style={styles.imgContainer}
      >
        <Image source={sampleImages.userImage} style={styles.userImage} />
      </RippleHOC>
    );
  }
  if (routesWithNotification[props?.route?.name]) {
    return (
      <RippleHOC
        onPress={() => props.navigation.navigate('NotificationScreen')}
        style={styles.imgContainer}
      >
        <Image source={icons.notification} style={styles.backIcon} />
       <View style={styles.circleNotification}/>
      </RippleHOC>
    );
  }
  
};

export const drawerRoutes = {
  HomeStack: {
    label: 'Home',
    icon: drawerIcons.home,
  },
  EventStack: {
    label: 'Event',
    icon: drawerIcons.events,
  },

  ConsultaionStack: {
    label: 'Consultation',
    icon: drawerIcons.contactUs,
  },
  BookingStack: {
    label: 'My Bookings',
    icon: drawerIcons.booking,
  },
  CategoryStack: {
    label: 'Category',
    icon: drawerIcons.category,
  },
  GeoStack: {
    label: 'Geo Genetics',
    icon: drawerIcons.geoGenetics,
  },
  ShopStack: {
    label: 'Shop',
    icon: drawerIcons.shop,
  },
  EducationStack: {
    label: 'Education',
    icon: drawerIcons.education,
  },

  EducationStack: {
    label: 'Education',
    icon: drawerIcons.education,
  },
  OrderStack: {
    label: 'My Orders',
    icon: drawerIcons.orders,
  },
  ReportStack: {
    label: 'My Reports',
    icon: drawerIcons.report,
  },
};

export default NavigationOptions;
