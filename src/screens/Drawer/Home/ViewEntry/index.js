import React, { useRef } from 'react';
import {View, Image} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import LikeCommentCard from '../../../../components/Cards/LikeCommentCard';
import HashtagPopup from '../../../../components/popups/HashtagPopup';
import MyNetworkPopup from '../../../../components/popups/MyNetworkPopup';
import SharePopup from '../../../../components/popups/SharePopup';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const ViewEntry = (props) => {
  const specificRef=useRef(null)
  const networkRef=useRef(null)
  const globalRef =useRef(null)
  const shareRef=useRef(null)
  const successPopup=useRef(null)
  const hashTagRef=useRef(null)
  const publishArray = [1, 2];
  return (
    <ScreenWrapper style={styles.container}>
      <RobotoMedium style={styles.publishedText}>Published To</RobotoMedium>
      <View style={styles.publishContainer}>
        {publishArray.map((item, index) => {
          return (
            <View key={index}>
              <RobotoRegular style={styles.friendText}>
                Friends Network
              </RobotoRegular>
              <View style={styles.mainContainerOfCalendar}>
                <View style={styles.calendarContainer}>
                  <Image source={icons.calendar} style={styles.calendarIcon} />
                  <RobotoRegular style={styles.entryDescText}>
                    Feb 04, '22{'  '}
                  </RobotoRegular>
                </View>
                <View style={styles.calendarContainer}>
                  <Image source={icons.clock} style={styles.calendarIcon} />
                  <RobotoRegular style={styles.entryDescText}>
                    12:40
                  </RobotoRegular>
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <Image source={generalImages.bookcover5} style={styles.postImage} />
      <RobotoRegular style={styles.descText}>
        Lorem ipsum dolor sit amet, consectetur are it adipiscing elit. Aenean
        euismod bibendum laoreet. Proin gravida dolor sitom
      </RobotoRegular>
      <RobotoMedium style={styles.hashtagText}>#trends #fashion</RobotoMedium>
      <LikeCommentCard onPressShare={()=> shareRef.current.show()}/>
      <SharePopup
      reference={shareRef}
      onPressSpecific={()=> specificRef.current.show()}
      onPressNetwork={()=> props.navigation.navigate("FriendNavigator")}
      onPressGlobal={()=> props.navigation.navigate("GlobalNavigator")}

      />
        <MyNetworkPopup
          reference={specificRef}
          onAccept={() => hashTagRef.current.show()}
        />
         <HashtagPopup
          reference={hashTagRef}
          onAccept={() => successPopup.current.show()}
        />
          <SuccessPopup
          reference={successPopup}
          onAccept={() => props.navigation.navigate('MyEntries')}
          title={'Success'}
          desc={'Your entry has been Successfully Shared.'}
        />

    </ScreenWrapper>
  );
};
export default ViewEntry;
