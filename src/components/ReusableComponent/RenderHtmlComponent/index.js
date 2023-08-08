import React from 'react'
import { View ,useWindowDimensions} from 'react-native'
import RenderHtml from 'react-native-render-html';
import styles from './styles';

const RenderHtmlComponent=(props)=>{
    const {width} = useWindowDimensions();
    const source = {
        html: `${props.content}`,
      };
      const defaultTextProps = {
        numberOfLines: 4,
      };
    return(
      <View style={props.style}>
        <RenderHtml
        contentWidth={width}
        
        // allowedStyles={{height: 100}}
        source={source}
        // baseStyle={{backgroundColor: "red"}}
        defaultTextProps={props.removeNumberOfLines?{}: defaultTextProps}
        enableExperimentalMarginCollapsing={true}
        tagsStyles={{
          p: styles.descText,
          b: styles.descText,
          div: styles.descText,
          i: styles.descText,
          u: styles.descText,
          s: styles.descText,
          div: styles.descText,
          h1:styles.descText,
          h2:styles.descText,
          h3:styles.descText,
          h4:styles.descText,
          h5:styles.descText,
          h6:styles.descText,
          h7:styles.descText,
        }}
      />
      </View>
    )
}
export default RenderHtmlComponent