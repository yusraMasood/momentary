import React, { Component } from 'react';
import styles from './styles';
import AddressPicker from './AddressPicker';
import { TouchableOpacity } from 'react-native';
import RippleHOC from '../wrappers/Ripple';


class AddressField extends Component {

  modalShow = () => {

    if (this.props.disabled) {
      return;
    }

    this.picker.modalShow();
  };



  render() {
    return (
      <RippleHOC
        onPress={this.modalShow}
        style={[styles.main, this.props.style]}>
        <AddressPicker
          onValueChange={this.props.onValueChange}
          data={[]}
          ref={(r) => {
            this.picker = r;
          }}
        />
        {this.props.children}
      </RippleHOC>
    );
  }
}

export default AddressField;