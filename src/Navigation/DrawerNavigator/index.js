// import React from 'react';
// import {View} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {vw} from '../../utils/dimensions';
// import {colors} from '../../utils/appTheme';
// import DrawerContent from '../../components/DrawerComponents/DrawerContent';
// import TabNavigator from '../TabNavigator';
// import EventNavigator from '../EventNavigator';
// import ConsultationNavigator from '../ConsultationNavigator';
// import BookingNavigator from '../BookingNavigator';
// import GeoGeneticsNavigator from '../GeoGeneticsNavigator';
// import ShopNavigator from '../ShopNavigator';
// import DrawerScreenWrapper from '../../components/DrawerComponents/DrawerScreenWrapper';
// import CategoryNavigator from '../CategoryNavigator';
// import EducationNavigator from '../EducationNavigator';
// import OrderNavigator from '../OrderNavigator';
// import AboutNavigator from '../AboutNavigator';
// import ContactNavigator from '../ContactNavigator';

// const Drawer = createDrawerNavigator();
// const HomeStack = props => {
//   return(
// <DrawerScreenWrapper>
//   <TabNavigator />
//   </DrawerScreenWrapper>
//   )
  
// };
// const EventStack = props => {
//   return(
//     <DrawerScreenWrapper>
//       <EventNavigator />
//       </DrawerScreenWrapper>
//       )
// };
// const ConsultaionStack = props => {
//   return(
//     <DrawerScreenWrapper>
//       <ConsultationNavigator />
//       </DrawerScreenWrapper>
//       )
// };
// const BookingStack = props => {
//   return(
//     <DrawerScreenWrapper>
//       <BookingNavigator />
//       </DrawerScreenWrapper>
//       )
  
// };
// const GeoStack = props => {
//   return(
//     <DrawerScreenWrapper>
//       <GeoGeneticsNavigator />
//       </DrawerScreenWrapper>
//       )
  
// };
// const ShopStack = props => {
//   return(
//     <DrawerScreenWrapper>
//       <ShopNavigator />
//       </DrawerScreenWrapper>
//       )
// };
// const CategoryStack = props => {
//   return(
//     <DrawerScreenWrapper>
//       <CategoryNavigator />
//       </DrawerScreenWrapper>
//       )
// };


// const EducationStack = props => {
//   return(
//     <DrawerScreenWrapper>
//       <EducationNavigator />
//       </DrawerScreenWrapper>
//       )
// };

// const OrderStack = props => {
//   return(
//     <DrawerScreenWrapper>
//       <OrderNavigator />
//       </DrawerScreenWrapper>
//       )
// };
// const AboutStack = props => {
//   return(
//     <DrawerScreenWrapper>
//       <AboutNavigator />
//       </DrawerScreenWrapper>
//       )
// };
// const ContactStack = props => {
//   return(
//     <DrawerScreenWrapper>
//       <ContactNavigator />
//       </DrawerScreenWrapper>
//       )
// };

// const DrawerNavigator = props => {
//   return (
//     <View style={{flex: 1, backgroundColor: colors.white,
//     }}>
//       <Drawer.Navigator
//         drawerContent={props => {
//           return <DrawerContent {...props} />;
//         }}
//         screenOptions={{
//           drawerType: 'slide',
//           headerShown: false,
//           drawerStyle: {
//             backgroundColor: 'transparent',
//             width: '52.5%',
//           },
//           overlayColor: 'transparent',
//           sceneContainerStyle: {
//             backgroundColor: 'transparent',
//           },
//         }}
//       >
//         <Drawer.Screen name="HomeStack" component={HomeStack} />
//         <Drawer.Screen name="EventStack" component={EventStack} />
//         <Drawer.Screen name="CategoryStack" component={CategoryStack} />
//         <Drawer.Screen name="ConsultaionStack" component={ConsultaionStack} />
//         <Drawer.Screen name="BookingStack" component={BookingStack} />
//         <Drawer.Screen name="GeoStack" component={GeoStack} />
//         <Drawer.Screen name="ShopStack" component={ShopStack} />
//         <Drawer.Screen name="EducationStack" component={EducationStack} />
//         <Drawer.Screen name="OrderStack" component={OrderStack} />
//         <Drawer.Screen name="AboutStack" component={AboutStack} />
//         <Drawer.Screen name="ContactStack" component={ContactStack} />
//       </Drawer.Navigator>
//     </View>
//   );
// };

// export default DrawerNavigator;
