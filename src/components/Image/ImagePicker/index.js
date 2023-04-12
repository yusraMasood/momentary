import React, { useCallback } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { icons } from '../../../assets/images';
import BottomSheetHOC from '../../popups/BottomSheetHOC';

const ImagePicker = ({ imageSelection, setImageSelection, image, setImage, setUploading, options,updateImages }) => {
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
  const uploadImage = async (image) => {
    try {
      let data = {
        image: image
      }

      setImage(data?.image)
      updateImages(data)

    } catch (e) {
      console.log(e);
      setUploading(false)

    }
  }
  const uploadMultipleImages = (data) => {
    const imageArr = image
    data.map((v, i) => {
      imageArr.push({
        uri: v.uri,
        type: v.type,
        name: v.fileName,
        // fieldName: "image"
      })
    })
    setImage(imageArr)
  }
  const img = (data) => {
    if (data?.assets != null) {
        uploadImage({
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