import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  drawerIcons,
  generalImages,
  icons,
  sampleImages,
} from '../../assets/images';
import PragmaticaRegular from '../../components/Texts/RobotoSemiBold';
import RippleHOC from '../../components/wrappers/Ripple';
import {vw} from '../../utils/dimensions';
import styles from './styles';

const routesWithBackIconAndTitle = {
  PaymentScreen: 'Payment',
 
  UserInformation: 'Consultation',
  ConfirmationScreen: 'Consultation',

  BookingDetails: 'Booking Details',
  ReportBooking: 'Report Booking',
  ProductDetail: 'Product Details',
  // CartScreen: 'Cart',
  CheckoutScreen: 'Checkout',
  EditProfileScreen: 'Edit Profile',
  ChangePassword: 'ChangePassword',
  OrderDetails: 'Order Details',
  ProductDetails: 'ProductDetails',
  ListOfResources: 'List Of Resources',
  RatingAndReviews:"Rating And Reviews"
  // CategoryDetailScreen:"Capsules"
  // DocumentsDownload:"Document Download"
};
const routesWithTitle = {

 
  DocumentsDownload: 'Document Download',

  // ProfileScreen: 'Profile',
};
const titles = {
  ContactUs: 'Contact Us',
  AboutUs: 'About Us',
  MyOrdersScreen: 'My Orders',
  MyBookings: 'My Bookings',
  ChooseAppointment: 'Consultation',
  EducationScreen: 'Education',
  CategoryScreen: 'Categories',
  ShopScreen: 'Shop',
  GeoGeneticsScreen: 'Geo Genetics',
};
const routesWithImage = {
  GeoGeneticsScreen: 'Geo Genetics',
  EducationScreen: 'EducationScreen',
  ProfileScreen: 'ProfileScreen',
  HomeScreen: 'HomeScreen',
  DocumentsDownload: 'DocumentsDownload',
  ContactUs: 'ContactUs',
  AboutUs: 'AboutUs',
  // ChatScreen:"ChatScreen",
  // CartScreen: 'Cart',

  // ProfileScreen:"ProfileScreen"
};
const routesWithDrawer = {
  CartScreen: 'Cart',
  HomeScreen: 'HomeScreen',
  ProfileScreen: 'ProfileScreen',
  ChatScreen: 'ChatScreen',
  ContactUs: 'ContactUs',
  AboutUs: 'AboutUs',
  MyOrdersScreen: 'MyOrdersScreen',
  MyBookings: 'MyBookings',
  ChooseAppointment: 'ChooseAppointment',
  EventScreen:"EventScreen",
  CategoryScreen:"CategoryScreen",
  EducationScreen: 'EducationScreen',
  ShopScreen:"ShopScreen",
  GeoGeneticsScreen: 'GeoGeneticsScreen',
  EventsScreen:"EventsScreen"
};
// const routesWithUserImage = {
//   EducationScreen:"EducationScreen",
//   GeoGeneticsScreen: 'GeoGeneticsScreen',
// };

const NavigationOptions = navProps => {
  return {
    headerTitle: () => renderTitle(navProps),
    headerRight: () => renderheaderRight(navProps),
    headerLeft: () => renderLeftTitleWithImage(navProps),
    headerTitleAlign: 'center',
    headerLeftContainerStyle: {paddingLeft: 4 * vw},
    headerRightContainerStyle: {paddingRight: 4 * vw},
  };
};
const renderTitle = props => {
  if (titles[props?.route?.name]) {
    return (
      <View>
        <PragmaticaRegular style={styles.titleCenterText}>
          {titles[props?.route?.name]}
        </PragmaticaRegular>
      </View>
    );
  }
};
const renderLeftTitleWithImage = props => {
  if (routesWithBackIconAndTitle[props?.route?.name]) {
    return (
      <View style={styles.titleImageContainer}>
        <RippleHOC onPress={() => props.navigation.goBack()}>
          <Image source={icons.backicon} style={styles.backIcon} />
        </RippleHOC>
        <PragmaticaRegular style={styles.paymentText}>
          {routesWithBackIconAndTitle[props?.route?.name]}
        </PragmaticaRegular>
      </View>
    );
  }
  if (routesWithTitle[props?.route?.name]) {
    return (
      <PragmaticaRegular style={styles.paymentText}>
        {routesWithTitle[props?.route?.name]}
      </PragmaticaRegular>
    );
  }
  if (routesWithDrawer[props?.route?.name]) {
    return (
      <RippleHOC onPress={() => props.navigation.toggleDrawer()}>
        <Image source={drawerIcons.drawer} style={styles.iconStyle} />
      </RippleHOC>
    );
  }
  // if (routesWithBackIcon[props?.route?.name]) {
  //   return (
  //     <View></View>
  //   );
  // }
  // if (routesWithMenuIcon[props?.route?.name]) {
  //   return (
  //     <View style={styles.iconsContainer}>
  //     </View>
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
  // if (routesWithUserImage[props?.route?.name]) {
  //   return (
  //   <View>
  //     <Image source={}/>
  //   </View>
  //   );
  // }
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
