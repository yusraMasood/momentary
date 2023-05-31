import React,{useState} from 'react'
import { View } from 'react-native'
import RNFS from 'react-native-fs';
import {
  PESDK,
  PhotoEditorModal,
  Configuration,
} from "react-native-photoeditorsdk";
import CustomButton from '../../Buttons/CustomButton';
import { generalImages } from '../../../assets/images';



const PhotoEditorPopup=(props)=>{
  const [loading,setLoading] =useState(false)
  PESDK.openEditor(generalImages.bookcover);

//   PhotoEditor.Edit({
//     path: RNFS.DocumentDirectoryPath + "https://www.gamespot.com/a/uploads/screen_kubrick/1603/16030002/4111613-mha-01.png"
// });
    return(
      <View>
        {/* <CustomButton
        text="Open Gallery"
        onPress={()=>{
          this.setState({loading: true});
          ImagePicker.launchCamera(
            {
              storageOptions: {
                skipBackup: true,
                path: 'images',
              },
            },
            response => {
              if (response.didCancel) {
                this.setState({loading: false});
              } else if (response.error) {
                this.setState({loading: false});
              } else {
                let photoPath =
                  RNFS.DocumentDirectoryPath + '/' + response.fileName;
                RNFS.moveFile(response.uri, photoPath)
                  .then(() => {
                    // console.log('FILE WRITTEN!');
                    RNPhotoEditor.Edit({
                      path:
                        RNFS.DocumentDirectoryPath +
                        '/' +
                        response.fileName,
                      hiddenControls: ['save', 'sticker'],
                      onDone: resp => {
                        let photoPathResp =
                          Platform.OS === 'android'
                            ? 'file://' + resp
                            : 'file://' + resp;
                        this.props.reduxActions.setPhoto(
                          this.props.navigation,
                          this.props.reduxState.photos,
                          photoPathResp,
                          () => {
                            this.setState({loading: false});
                          },
                        );
                      },
                      onCancel: () => {
                        this.setState({loading: false});
                      },
                    });
                  })
                  .catch(err => {
                    this.setState({loading: false});
                    console.log(err.message);
                  });
              }
            },
          );
        }}
        /> */}
      </View>
    )
}
export default PhotoEditorPopup