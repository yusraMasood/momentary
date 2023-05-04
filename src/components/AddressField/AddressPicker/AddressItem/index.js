import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    ActivityIndicator
} from 'react-native'
import styles from './styles';
import { colors } from '../../../../utils/appTheme';

export default class PickerItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: false

        }
    }

    onItemSelect = () => {
        this.props.selectCallback()
    }
    select = () => {
        this.setState(p => {
            return {
                ...p,
                selected: true
            }
        })
        this.props.selectCallback()
    }
    render() {
        let itemTextStyle = {
            ...styles.itemText,
            ...this.props.itemTextStyle
        }
        let itemContainer = {
            ...styles.itemContainer,
            ...this.props.itemContainerStyle,
            marginHorizontal: 2 * vw
        }
        switch (this.state.selected) {
            case false: return (
                <TouchableOpacity disabled={this.props.disabled} onPress={this.select} style={itemContainer}>
                    <Text style={itemTextStyle}>{this.props.label}</Text>
                </TouchableOpacity>
            )

            case true: return (
                <View disabled={this.state.disabled} onPress={this.select} style={itemContainer}>
                    <ActivityIndicator style={itemTextStyle} color={colors.general.white} size='small' />
                </View>
            )
        }

    }
}
