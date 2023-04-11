import React, { useCallback } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { generalImages, icons } from '../../../assets/images';
import BottomSheetHOC from '../../popups/BottomSheetHOC';
// import BottomSheetHOC from '../Popups/BottomSheetHOC';

const ImagePicker = ({ imageSelection, setImageSelection, image, setImage, setUploading, options }) => {
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
      // console.log("image",image);
      // setPicture([...response?.user?.images])
      // setUploading(false)

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
    // console.log("imageArr", imageArr);
    setImage(imageArr)
  }
  const img = (data) => {
    if (data?.assets != null) {
      // data.assets.length > 1 ?
    //   typeof(image)==='object'?
    //     uploadMultipleImages(data.assets)
    //     : 
        uploadImage({
          uri: data.assets[0].uri,
          type: data.assets[0].type,
          name: data.assets[0].fileName,
          // fieldName: "image"
        })
    }

  //   _image = {
  //     uri: image,
  //     type: `image/${splittedUri[splittedUri.length - 1]}`,
  //     name: imageName ?? 'avatar',
  // };
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