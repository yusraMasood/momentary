import React,{useState} from 'react'
import { View } from 'react-native'
import ContentContainer from '../../../../components/wrappers/ContentContainer'
import { useDispatch } from 'react-redux'
import { useGetHashtagsQuery, useSetting } from '../../../../state/entry'
import RobotoMedium from '../../../../components/Texts/RobotoMedium'
import styles from './styles'
import InputField from '../../../../components/Inputs/InputField'
import RippleHOC from '../../../../components/wrappers/Ripple'
import RobotoRegular from '../../../../components/Texts/RobotoRegular'
import Hashtags from '../../../../components/ReusableComponent/Hashtags'
import CustomButton from '../../../../components/Buttons/CustomButton'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import useEntry from '../../../../hooks/useEntry'

const HashtagScreen=(props)=>{
    const [search,setSearch] =useState("")
    const {addEntry} = useEntry();
    const dispatch =useDispatch()
    const setting =useSetting()
    const hashtagData =useGetHashtagsQuery({keyword: search})
    const handleSubmitSearch=()=>{
        // console.log(hashtagData);
    
        if(hashtagData?.data?.hashTags.length==0)
        {
          if (!setting?.hashtags.includes(search)) {
            // props.setMyHashtags([...props.myhashtags, search]);
            dispatch(saveSetting({...setting,hashtags:[...setting?.hashtags,search] }))
          }
    
        }
        
      }
      const addEntryFunc = () => {
        addEntry({privacy, entryText, imageArray, location, myhashtags,pageDesign}).then(
          res => {
            if (res) {
              successPopup.current.show();
            }
          },
        );
      };
    return(
        <ScreenWrapper style={styles.container}>
        <ContentContainer>
             <RobotoMedium style={styles.hashtagHeading}>Add Hashtags</RobotoMedium>
        <View style={styles.hashtagContainer}>

        <InputField
        inputContainerIcon={styles.contentInput}
        inputContainerStyle={styles.inputContainer}
        // label={"search"}
        placeholder={"Search here..."}
        onSubmitEditing={handleSubmitSearch}
        onEndEditing={handleSubmitSearch}
        value={search}
        onChangeText={setSearch}
        />
        <RippleHOC onPress={handleSubmitSearch}>
          <RobotoRegular style={styles.searchText}>Search</RobotoRegular>
        </RippleHOC>

        </View>
        <View style={styles.hashtagsMainContainer}>
          <Hashtags isLoading={hashtagData?.isLoading}
          setMyHashtags={props.setMyHashtags}
          myhashtags={props.myhashtags}
          array={hashtagData?.data?.hashTags}
          searchText={search}          
          />
        </View>
        <CustomButton text={"Publish"}
        onPress={addEntryFunc}
        textStyle={styles.btnText} alignStyle={styles.alignBtn} style={styles.btnPublish}/>

        </ContentContainer>
        </ScreenWrapper>
    )
}
export default HashtagScreen