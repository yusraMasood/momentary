import React from 'react';
import {View, Image, useWindowDimensions} from 'react-native';
import {icons} from '../../../assets/images';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';
import RenderHtml from 'react-native-render-html';
import HtmlText from "react-native-html-to-text"
import {usePostDeleteEntryMutation} from '../../../state/entry';
import CustomSkeleton from '../../Loaders/CustomSkeleton';
import { vh } from '../../../utils/dimensions';

const NoteCardList = props => {
  const [postDeleteEntry, message] = usePostDeleteEntryMutation();
  const even = props.index % 2 == 0;
  const source = {
    html: `${props.content}`,
  };
  const {width} = useWindowDimensions();

  const deleteEntry = () => {
    postDeleteEntry(props.id);
  };

  return (
    <View>
      {props.isLoading?
    <CustomSkeleton
    height={15}
    width={40}
    marginTop={vh*2}

    />  :
    <View
    onPress={props.onPress}
    style={[styles.noteContainer, props.listStyle]}
  >
    
    <View style={styles.alignPin}>
    <Image source={icons.pinned} style={styles.pinIcon} />
    
    </View>
    <RippleHOC onPress={props.onPress} style={styles.titleDescContainer}>
       <RenderHtml
    contentWidth={width}
    source={source}
    tagsStyles={{
      p: styles.descText,
      b: styles.descText,
      div: styles.descText,
      i:styles.descText,
      u:styles.descText,
      s:styles.descText
      // h1:styles.descText,
      // h2:styles.descText,
      // h3:styles.descText,
      // h4:styles.descText,
      // h5:styles.descText,
      // h6:styles.descText,
      // h7:styles.descText,
    }}
  />
    </RippleHOC>
    <View style={styles.alignFooter}>
    <View style={styles.hashtagDeeleteContainer}>
      <View style={styles.hashtagContainer}>
        {props.hashtag.slice(0,2).map((value, index) => {
          return(
            <RobotoMedium numberOfLines={1} style={styles.hashtagText}>#{value}</RobotoMedium>

          )
        })}
      </View>
      {props.delete && (
        <RippleHOC onPress={deleteEntry}>
          <Image
            source={icons.delete}
            style={[styles.deleteIcon, props.deleteIconStyle]}
          />
        </RippleHOC>
      )}
    </View>
    </View>
  </View>

    }

  
   
    </View>
  );
};
export default NoteCardList;

// {props.pin ? (
//   <Image source={icons.pinned} style={styles.pinIcon} />
// ) : (
//   <CustomCheckBox
//     style={styles.checkboxContainer}
//     checkboxStyle={styles.checkbox}
//   />
// )}
