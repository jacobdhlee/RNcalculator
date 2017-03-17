import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

import RoundButton from './RoundButton';

class Tipbar extends Component {
  render() {
    return (
      <View style={styles.tipBar}>
        <RoundButton text={"15%"} addStyle={styles.addStyle}/>
        <RoundButton text={"18%"} addStyle={styles.addStyle}/>
        <RoundButton text={"20%"} addStyle={styles.addStyle}/>
        <RoundButton text={"25%"} addStyle={styles.addStyle}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tipBar: {
    height: 50,
    padding: 10,
    width,
    flexDirection: 'row',
    backgroundColor: 'lightyellow',
    justifyContent: 'space-around',
  },
  addStyle: {
    width: 80,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'lightgreen'
  }
})

export default Tipbar;