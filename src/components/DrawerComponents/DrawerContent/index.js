import React, {useRef, useEffect} from 'react';
import styles from './styles';
import {View, Image} from 'react-native';
import {useDrawerProgress} from '@react-navigation/drawer';
import {vh} from '../../../utils/dimensions';
import {drawerRoutes} from '../../../Navigation/NavigationOptions';
import Animated from 'react-native-reanimated';
import RecoletaDemoRegular from '../../Texts/RobotoMedium';
import {
  drawerIcons,
  generalImages,
  icons,
  sampleImages,
} from '../../../assets/images';
import RippleHOC from '../../wrappers/Ripple';
import DrawerButton from '../DrawerButton';
import CustomButton from '../../Buttons/CustomButton';
import GeneralPopup from '../../popups/GeneralPopup';
import ButtonWithIcon from '../../Buttons/ButtonWithIcon';

const routeOrders = [
  'HomeStack',
  'GeoStack',
  'ShopStack',
  'CategoryStack',
  'EducationStack',
  'EventStack',
  'ConsultaionStack',
  'BookingStack',
  'OrderStack',
  'ReportStack',
];

const DrawerContent = props => {
  const popupRef = useRef(null);
  const LogoutPopupRef = useRef(null);

  const logoutUser = () => {
    // dispatch(logout())
  };
  const progress = useDrawerProgress();
  const opacity = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-10, 1],
  });

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [40 * -vh, vh * 0],
  });

  const animatedStylesImage = {
    opacity: opacity,
  };

  const animatedStyles = {
    opacity: opacity,
    transform: [{translateX}, {scale}],
  };

  const handleOnDrawerItemPress = routeName => {
    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
      if (routeOrders[routeOrders.length - 1] == 'Logout') {
        return popupRef?.current?.show();
      }
    }
  };
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.userDetailsWithButtonContainer}>
        <RippleHOC
          onPress={() => props.navigation.navigate('ProfileNavigator')}
          style={styles.userProfileContainer}
        >
          <Image source={sampleImages.userImage} style={styles.userImage} />
          <View>
            <RecoletaDemoRegular style={styles.usernameText}>
              John Doe
            </RecoletaDemoRegular>
            <RecoletaDemoRegular style={styles.emailText}>
              @jamesondunn
            </RecoletaDemoRegular>
          </View>
        </RippleHOC>
      </View>

      {routeOrders.map((item, index) => {
        return (
          <Animated.View key={index} style={[animatedStyles]}>
            <DrawerButton
              index={index}
              onPress={handleOnDrawerItemPress}
              routeName={item}
            />
          </Animated.View>
        );
      })}
      {/* <CustomButton text="Logout" onPress={()=> LogoutPopupRef.current.show()} /> */}
      <ButtonWithIcon
        alignBtn={styles.donateBtnStyle}
        icon={drawerIcons.donation}
        buttonText={'Donate'}
      />
      <ButtonWithIcon
        icon={drawerIcons.about}
        buttonText={'About Us'}
        style={styles.btnStyle}
        onPress={() => props.navigation.navigate('AboutStack')}
        buttontextStyle={styles.btnText}
      />
      <ButtonWithIcon
        icon={drawerIcons.contactUs}
        buttonText={'Contact Us'}
        onPress={() => props.navigation.navigate('ContactStack')}
        style={styles.btnStyle}
        buttontextStyle={styles.btnText}
      />
      <CustomButton
        text="Logout"
        alignStyle={styles.logoutButtonContainer}
        style={styles.logoutBtn}
        textStyle={styles.logoutText}
        onPress={() => LogoutPopupRef.current.show()}
      />
      {/* ()=> props.navigation.navigate("AuthNavigator") */}

      <GeneralPopup
        reference={LogoutPopupRef}
        image={generalImages.logout}
        hrLineText={'Cancel'}
        title={'Are You Sure You want to Logout?'}
        buttonText={'Logout'}
        onAccept={() => props.navigation.navigate('AuthNavigator')}
      />

      {/* <SuccessPopup
        reference={successRef}
        title={'Successfull'}
        details={'You have been successfully\nlogged out'}
        onAccept={()=> props.navigation.navigate("AuthNavigator")}
      /> */}
    </View>
  );
};
export default DrawerContent;
