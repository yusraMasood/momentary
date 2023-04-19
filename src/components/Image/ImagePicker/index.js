import React, { useCallback } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { icons } from '../../../assets/images';
import BottomSheetHOC from '../../popups/BottomSheetHOC';
import useProfile from '../../../hooks/useProfile';

const ImagePicker = ({ imageSelection, setImageSelection, image, setImage, setUploading, options,updateImages }) => {
  const {uploadImage} =useProfile()
  const choices = [
    {
      name: 'Camera',
      image: icons.camera,
      onClick: () => {
        onCameraPress('capture', options ? options : { quality: 0.5 });
      },
    },
    {
      name: 'Gallery',
      image: icons.photo,
      onClick: () => {
        onCameraPress('gallery', options ? options : { quality: 0.5 });
      },
    },
  ];
  const getImage = async (image) => {
    try {
      let data = {
        image: image
      }
      const formData = new FormData();
      formData.append('image', data?.image);
      formData.append('entityType', "profile");
      uploadImage(formData).then((res)=>{
        setImage(res?.image)
        if(updateImages){

          updateImages(res?.image)
        }
      })

    } catch (e) {
      console.log(e);
      setUploading(false)

    }
  }
  const img = (data) => {
    if (data?.assets != null) {
      getImage({
          uri: data.assets[0].uri,
          type: data.assets[0].type,
          name: data.assets[0].fileName,
          // fieldName: "image"
        })
    }
  }


  const onCameraPress = useCallback((type, options) => {

    if (type === 'capture') {
      setTimeout(() => {
        launchCamera(options, img);
      }, 1000)
    } else {
      setTimeout(() => {
        launchImageLibrary(options, img);
      }, 1000)

    }
  }, []);
  return (
    <BottomSheetHOC visible={imageSelection} setVisibility={setImageSelection} list={choices} />

  )
}
export default ImagePicker