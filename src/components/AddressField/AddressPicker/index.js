import React, { Component } from 'react';
import {
  Modal,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import AddressItem from './AddressItem';
import Api from '../Api';
import vh from './Units/vh';
import vw from './Units/vw';
import {icons} from "../../../assets/images"
import { colors } from '../../../utils/appTheme';

class AddressPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      visible: false,
      predictions: [],
      text: '',
      disabled: false,
    };
  }

  getPredictions = (text) => {
    this.setState((p) => {
      return {
        ...p,
        loading: true,
        text: text,
      };
    });

    Api.getAddressPrediction(text, (predictions) => {
      this.setState((p) => {
        return {
          ...p,
          predictions: predictions.predictions ? predictions.predictions : [],
          loading: false,
        };
      });
    });
  };

  onItemSelected = (item) => {

    this.setState((p) => {
      return {
        ...p,
        disabled: true,
      };
    });

    Api.getGeoCode(item.description, (success) => {
      
      this.props.onValueChange({ ...success, found: true });
      this.modalDismiss();
    });

  };

  renderPickerItems = () => {
    return this.state.predictions.map((item, index, data) => {
      let selected = false;
      if (this.state.selectedItem === item) {
        selected = true;
      }

      return (
        <AddressItem
          disabled={this.state.disabled}
          selectCallback={() => this.onItemSelected(item)}
          selected={selected}
          item={item}
          label={item['description']}
          key={index}
        />
      );
    });
  };

  modalDismiss = () => {
    // StatusBar.setHidden(false)
    this.setState((p) => {
      return {
        ...p,
        visible: false,
      };
    });
  };
  modalShow = () => {

    this.setState(
      (p) => {
        return {
          ...p,
          visible: true,
          disabled: false,
        };
      });

  };

  render() {
    let textToShow = this.props.placeHolder;
    let pickerButton = {
      ...styles.pickerButton,
      ...this.props.pickerButtonStyle,
    };

    let pickerButtonText = {
      ...styles.pickerButtonText,
      ...this.props.pickerButtonTextStyle,
    };

    let modalContentContainer = {
      ...styles.modalContentContainer,
    };
    if (this.props.defaultSelectedIndex) {
      textToShow = this.props.data[this.props.defaultSelectedIndex][
        this.props.labelProperty
      ];
    }
    if (this.state.selected === true) {
      textToShow = this.state.selectedItem[this.props.labelProperty];
    }

    if (this.props.mode === 'bottom') {
      modalContentContainer = {
        ...styles.modalContentContainer,
        height: 40 * vh,
        width: 100 * vw,
        backgroundColor: 'white',
        position: 'absolute',
        top: 60 * vh,
        left: 0 * vw,
      };
    }
    let item = { description: this.state.text };
    return (
      <Modal
        visible={this.state.visible}
        animationType="fade"
        transparent={true}
        onRequestClose={this.modalDismiss}
        style={styles.modal}>
        <TouchableOpacity
          onPress={this.modalDismiss}
          style={styles.backDrop}></TouchableOpacity>

        <View style={modalContentContainer}>
          <View>
            <TouchableOpacity onPress={this.modalDismiss} style={styles.closeBtn}>
              <Image
                source={icons.crossIcon}
                style={{ width: 3 * vw, height: 3 * vw, resizeMode: 'contain' }}
              />
            </TouchableOpacity>

            <Text style={styles.Heading}>Search Location</Text>
          </View>
          <View
            style={{ width: '100%', paddingTop: 1 * vh, alignItems: 'center' }}>
            <TextInput
              placeholder="Search Address Here..."
              autoFocus
              onChangeText={this.getPredictions}
              // containerStyle={styles.searchInput}
              style={styles.inputField}
              selectionColor={colors.darkBackgroundColor}
              placeholderTextColor={colors.iconGrey}
            />
          </View>
          <View>
            {this.state.loading && (
              <ActivityIndicator color={colors.darkBackgroundColor} size="small" />
            )}
          </View>
          <ScrollView style={styles.itemsScroll}>
            {this.state.predictions.length < 1 && this.state.text != '' ? (
              <AddressItem
                selectCallback={() => this.onItemSelected(item)}
                selected={false}
                item={item}
                label={item['description']}
                key={1}
              />
            ) : null}
            {this.renderPickerItems()}
          </ScrollView>
        </View>
      </Modal>
    );
  }
}



export default AddressPicker;
