import React,{useEffect,useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {generalImages} from '../../../assets/images';
import FriendRequestCard from '../../../components/Cards/FriendRequestCard';
import DamionRegular from '../../../components/Texts/DamionRegular';
import PoppinsRegular from '../../../components/Texts/PoppinsRegular';
import RobotoRegular from '../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../components/wrappers/ScreenWrapper';
import styles from './styles';
const items = [
  {
    read: false,
  },
  {
    read: true,
  },
  {
    read: true,
  },
  {
    read: true,
  },
  {
    read: true,
  },
  {
    read: true,
  },
  {
    read: true,
  },
  {
    read: true,
  },
  {
    read: true,
  },
  {
    read: true,
  },
];

const NotificationScreen = (props) => {
  const [showItems,setShowItems] =useState([])
  const [isMore, setIsMore] = useState(false);
  
  const friendRequestArray = [1, 2, 3];
  useEffect(()=>{
    // setShowItems(items.slice(0, showItems.length + 3))
    setShowItems([...items.slice(0, 3)]);
    // if (items.length >= 3) {
    //   setIsMore(true);
    // }

  },[])

  const handleMore=()=>{
    setIsMore(true)
    setShowItems(items)

  }

  const renderNotificationCard = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.dateContainer}>
          <RobotoRegular style={styles.dateText}>01/01/2010</RobotoRegular>
          <RobotoRegular style={styles.dateText}>01:01 PM</RobotoRegular>
        </View>
        <RobotoRegular style={[styles.descText, item.read && styles.readText]}>
          There are many variations of passages of Lorem Ipsum available
        </RobotoRegular>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View>
        {
          !isMore &&

        <RippleHOC onPress={handleMore} style={styles.alignContent}>
          <PoppinsRegular style={styles.viewText}>View All</PoppinsRegular>
        </RippleHOC>
        }
      </View>
    );
  };
  const renderFooter = () => {
    return (
      <View>
        {!isMore&&
        <View>
          <View style={styles.friendHeadingContainer}>
            <DamionRegular style={styles.headingText}>
              Friend Requests
            </DamionRegular>
            <RippleHOC onPress={()=> props.navigation.navigate("FriendRequest")}>
            <PoppinsRegular style={styles.viewText}>View All</PoppinsRegular>

            </RippleHOC>
          </View>
          {friendRequestArray.map((item, index) => {
            return (
              <FriendRequestCard
                name={'Kamila Thompson'}
                job={'Content Writer'}
              />
            );
          })}

        </View>
         }
      </View>
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
      <FlatList
        data={showItems}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item, index) => index}
        key={'notificationScreenArray'}
        ListFooterComponent={renderFooter}
        renderItem={renderNotificationCard}
      />
    </ScreenWrapper>
  );
};
export default NotificationScreen;
