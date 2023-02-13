import React from 'react';
import { StyleSheet } from 'react-native';
import { fonts } from '../../../assets/fonts';
import TextWrapper from '../TextWrapper';

const RobotoRegular = props => {
    return (
        <TextWrapper {...props} style={[styles.text, props.style]}>
            {props.children}
        </TextWrapper>
    );
};
const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.roboto.regular,
    },
});
export default RobotoRegular;