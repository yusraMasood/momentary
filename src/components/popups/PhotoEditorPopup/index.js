import React from 'react'
import { View } from 'react-native'
import { PhotoEditorModal } from "react-native-photoeditorsdk";
import { generalImages, sampleImages } from '../../../assets/images';


const PhotoEditorPopup=(props)=>{
    return(
        <PhotoEditorModal
        // Add a photo from the assets directory.
        image={generalImages.bookcover2}
        // Determine whether the editor should be visible or not.
        visible={props.visible}
        onExport={(result) => {
          // The user exported a new photo successfully and the newly generated photo is located at `result.image`.
          console.log(result.image);
          props.onFinish();
        }}
        onCancel={() => {
          // The user tapped on the cancel button within the editor.
          props.onFinish();
        }}
        onError={(error) => {
          // There was an error generating the photo.
          console.log(error);
          props.onFinish();
        }}
      ></PhotoEditorModal>
    )
}
export default PhotoEditorPopup