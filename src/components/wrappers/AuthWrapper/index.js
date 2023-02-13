import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import styles from './styles';
import { generalImages, icons } from '../../../assets/images';

const AuthWrapper = (props) => {
    return (
        
        <View style={[styles.container]}>
            <Image source={generalImages.header} style={styles.headerImage} />
            <View style={[styles.childrenContainer,props.style]}>
            {props.children}
            </View>
            <Image source={generalImages.footer} style={styles.footerImage} />
        </View>
    )
}
export default AuthWrapper;