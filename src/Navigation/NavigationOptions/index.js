import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  drawerIcons,
  generalImages,
  icons,
  sampleImages,
} from '../../assets/images';
import DamionRegular from '../../components/Texts/DamionRegular';
import RobotoRegular from '../../components/Texts/RobotoRegular';
import PragmaticaRegular from '../../components/Texts/RobotoSemiBold';
import RippleHOC from '../../components/wrappers/Ripple';
import {colors} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';
import styles from './styles';

const routesWithTitle = {};
const titles = {
  HomeScreen: 'Momentary',
  FriendNetworkScreen: 'My Network',
  LibraryScreen: 'Library',
  GlobalNetworkScreen: 'Global Network',
  NewEntry: 'Add Entry',
  NotificationScreen: 'Notification',
  AddNewJournal: 'Create Journal',
  StoreScreen: 'Store',
  PagesDesign: 'Page Designs',
  JournalCovers: 'Journal Covers',
  Typography: 'Font Packs',
  BookPrinting: 'Book Printing',
  SettingScreen: 'Settings',
  MyProfile: 'Account Settings',
  EditProfile: 'Account Settings',
  ChangePassword: 'Change Password',
  MyEntries: 'My Entries',
  Account: 'Account',
  AppUI: 'App/UI',
  Legacy: 'Legacy',
  Notification: 'Notifications',
  Privacy: 'Privacy',
  Support: 'Support',
  SupportDetails: 'Support',
  ContactUs: 'Contact Us',
  FrequentlyAskedQuestions: 'Frequently Asked Questions',
  PaymentLogDetail: 'Purchase History',
  SubscriptionLogs: 'SubscriptionLogs',
  SubscriptionPlans:"Subscription Plans",
  PaymentScreen:"Payment Method",
  AuditLogs:"Audit Logs",
  HomeFeature:"Home",
  AppLock:"App Lock",
  SyncModes:"Sync Modes",
  LibraryCollection:"Library",
  FriendRequest:"Friend Requests",
  SaveLocation:"Save Location",
  Visiblity:"Visiblity",
  ViewEntry:"View Entry",
  MyJournals: "My Journals",
  BookPrintingSelectType:"Book Printing",
  BookPrintingPlaceOrder:"Place Order",
  BookPrintingPayment:"Place Order",
  BookPrintingOrderSummary:"Order Summary",
  ViewLegacyContact:"Secondary Contact",
  EditEntry:"Edit Entry"
};
const titleWithDescription = {
  PostByLocation: 'Global Network',
  PaymentLogs: 'Payment Logs',
};
const routesWithDescription = {
  PostByLocation: 'Anonymous Entry From Region',
  PaymentLogs: 'Total Subscription Payments: $2,000',
};
const routesWithBackIcon = {
  LibraryScreen: 'LibraryScreen',
  NewEntry: 'NewEntry',
  EditEntry:"EditEntry",
  NotificationScreen: 'NotificationScreen',
  AddNewJournal: 'AddNewJournal',
  PagesDesign: 'PagesDesign',
  JournalCovers: 'JournalCovers',
  Typography: 'Typography',
  BookPrinting: 'BookPrinting',
  PostByLocation: 'PostByLocation',
  SettingScreen: 'SettingScreen',
  MyProfile: 'MyProfile',
  EditProfile: 'EditProfile',
  ChangePassword: 'ChangePassword',
  Account: 'Account',
  AppUI: 'AppUI',
  Legacy: 'Legacy',
  Notification: 'Notification',
  Privacy: 'Privacy',
  Support: 'Support',
  SupportDetails: 'Support',
  ContactUs: 'ContactUs',
  FrequentlyAskedQuestions: 'FrequentlyAskedQuestions',
  PaymentLogs: 'PaymentLogs',
  PaymentLogDetail: 'PaymentLogDetail',
  SubscriptionLogs: 'SubscriptionLogs',
  SubscriptionPlans:"SubscriptionPlans",
  PaymentScreen:"PaymentScreen",
  AuditLogs:"AuditLogs",
  HomeFeature:"HomeFeature",
  AppLock:"AppLock",
  SyncModes:"SyncModes",
  LegacyDetermination:"LegacyDetermination",
  LegacyContact:"LegacyContact",
  LibraryCollection:"LibraryCollection",
  FriendRequest:"FriendRequest",
  changeJournal:"changeJournal",
  SaveLocation:"SaveLocation",
  Visiblity:"Visiblity", 
  ViewEntry:"ViewEntry",
  MyJournals:"MyJournals",
  ViewAllEntries:"ViewAllEntries",
  FriendDetails:"FriendDetails",
  AddEntryInJournal:"AddEntryInJournal",
  BookPrintingSelectType:"BookPrintingSelectType",
  BookPrintingPlaceOrder:"BookPrintingPlaceOrder",
  BookPrintingPayment:"BookPrintingPayment",
  BookPrintingOrderSummary:"BookPrintingOrderSummary",
  ViewLegacyContact:"ViewLegacyContact",
  LibraryFavouriteContent:"LibraryFavouriteContent"
};
const routesWithImage = {};
const routesWithSetting = {
  HomeScreen: 'HomeScreen',
  FriendNetworkScreen: 'FriendNetworkScreen',
  GlobalNetworkScreen: 'GlobalNetworkScreen',
  StoreScreen: 'StoreScreen',
  MyEntries: 'MyEntries',
};
const routesWithNotification = {
  HomeScreen: 'HomeScreen',
  FriendNetworkScreen: 'FriendNetworkScreen',
  GlobalNetworkScreen: 'GlobalNetworkScreen',
  StoreScreen: 'StoreScreen',
  SettingScreen: 'SettingScreen',
  MyEntries: 'MyEntries',
  // EditEntry:"EditEntry"
};
const routesWithFilter = {
  SubscriptionLogs: 'My Subscriptions',
};
const routesWithSaveIcon = {
  NewEntry: 'NewEntry',
};
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
        <DamionRegular style={styles.titleCenterText}>
          {titles[props?.route?.name]}
        </DamionRegular>
    );
  }
  if (titleWithDescription[props?.route?.name]) {
    return (
      <View style={styles.titleWithDescriptionContainer}>
        <DamionRegular style={styles.titleCenterText}>
          {titleWithDescription[props?.route?.name]}
        </DamionRegular>
        <RobotoRegular style={styles.anonymousText}>
          {routesWithDescription[props?.route?.name]}
        </RobotoRegular>
      </View>
    );
  }
};
const renderHeaderLeft = props => {
  if (routesWithSetting[props?.route?.name]) {
    return (
      <RippleHOC onPress={() => props.navigation.navigate('SettingNavigator')}>
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
  // if (routesWithTitle[props?.route?.name]) {
  //   return (
  //     <PragmaticaRegular style={styles.paymentText}>
  //       {routesWithTitle[props?.route?.name]}
  //     </PragmaticaRegular>
  //   );
  // }
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
        <View style={styles.circleNotification} />
      </RippleHOC>
    );
  }
  if (routesWithFilter[props?.route?.name]) {
    return (
      <RippleHOC
        onPress={() => props.navigation.navigate('NotificationScreen')}
      >
        <Image source={icons.filter} style={styles.backIcon} />
      </RippleHOC>
    );
  }
  if (routesWithSaveIcon[props?.route?.name]) {
    return (
      <View style={styles.rightContainer}>
        <RippleHOC onPress={() => props.navigation.navigate('MyEntries')}>
          <Image source={icons.pin} style={styles.entryIcon} />
        </RippleHOC>
        <RippleHOC onPress={() => props.navigation.navigate('SaveLocation')}>
          <Image source={icons.save} style={styles.saveIcon} />
        </RippleHOC>
        <RippleHOC onPress={() => props.navigation.navigate('MyEntries')}>
          <Image source={icons.cloud} style={styles.entryIcon} />
        </RippleHOC>
      </View>
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
