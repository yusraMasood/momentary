import React from 'react';
import {
  View,
  Image,
  useWindowDimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {icons} from '../../../assets/images';
import RobotoMedium from '../../Texts/RobotoMedium';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';
import RenderHtml from 'react-native-render-html';
import {
  usePostDeleteEntryMutation,
  usePostPinEntryMutation,
} from '../../../state/entry';
import CustomSkeleton from '../../Loaders/CustomSkeleton';
import {vh} from '../../../utils/dimensions';
import ButtonLoading from '../../Loaders/ButtonLoading';
import {Toast} from '../../../Api/APIHelpers';
import RenderHtmlComponent from '../../ReusableComponent/RenderHtmlComponent';

const NoteCard = props => {
  const [postDeleteEntry, message] = usePostDeleteEntryMutation(props.id);
  const [postPinEntry, messagePin] = usePostPinEntryMutation(props.id);
  // console.log("status postPinEntry ",messagePin);

  const even = props.index % 2 == 0;
  const source = {
    html: `${props.content}`,
  };
  const {width} = useWindowDimensions();

  const deleteEntry = () => {
    postDeleteEntry(props.id);

    if (props.refetch) {
      Toast.success('Journal Entry Deleted Successfully!');
      props.refetch();
    }
  };
  const pinEntry = () => {
    postPinEntry(props.id).then(res => {
      console.log('res', res);
      if (res?.data?.message) {
        Toast.success(res?.data?.message);
        if (props.refetch) {
          // Toast.success("Journal Entry Deleted Successfully!")
          props.refetch();
        }
      }
    });

    
  };
  const defaultTextProps = {
    numberOfLines: 4,
  };

  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        onLongPress={pinEntry}
        style={[styles.noteContainer, props.listStyle]}
      >
        <RenderHtmlComponent content={props.content} />
        <View style={styles.alignFooter}>
          <View style={styles.hashtagDeeleteContainer}>
            <View style={styles.hashtagContainer}>
              {props.hashtag &&
                props.hashtag.slice(0, 2).map((value, index) => {
                  return (
                    <RobotoMedium style={styles.hashtagText} numberOfLines={1}>
                      #{value}
                    </RobotoMedium>
                  );
                })}
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {props.delete && (
        <RippleHOC style={styles.deleteContainer} onPress={deleteEntry}>
          {message?.isLoading ? (
            <ButtonLoading />
          ) : (
            <Image
              source={icons.delete}
              style={[styles.deleteIcon, props.deleteIconStyle]}
            />
          )}
        </RippleHOC>
      )}
      {props.pin && (
        <RippleHOC onPress={pinEntry} style={styles.alignPin}>
          <Image source={icons.pinned} style={styles.pinIcon} />
        </RippleHOC>
      )}
    </View>
  );
};
export default NoteCard;

// {props.pin ? (
//   <Image source={icons.pinned} style={styles.pinIcon} />
// ) : (
//   <CustomCheckBox
//     style={styles.checkboxContainer}
//     checkboxStyle={styles.checkbox}
//   />
// )}
