import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { tipEnter } from '../actions'
import RoundButton from './RoundButton';
const { width } = Dimensions.get('window');

@connect((store) => {
  const { calculate } = store
  return {
    display: calculate.display,
    operation: calculate.operation,
    operatorValue: calculate.operatorValue,
    previousValue: calculate.previousValue,
    nextValue: calculate.nextValue,
  }
})

class Tipbar extends Component {
  tipcalculate(text) {
    this.props.dispatch(tipEnter(text))
  }

  render() {
    return (
      <View style={styles.tipBar}>
        <RoundButton text={"15%"} addStyle={styles.addStyle} onPress={() => this.tipcalculate('0.15')}/>
        <RoundButton text={"18%"} addStyle={styles.addStyle} onPress={() => this.tipcalculate('0.18')}/>
        <RoundButton text={"20%"} addStyle={styles.addStyle} onPress={() => this.tipcalculate('0.20')}/>
        <RoundButton text={"25%"} addStyle={styles.addStyle} onPress={() => this.tipcalculate('0.25')}/>
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