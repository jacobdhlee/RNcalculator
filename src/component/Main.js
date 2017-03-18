import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');

import Keyboard from './KeyBoard';
import RoundButton from './RoundButton';
import Tipbar from './Tipbar'

@connect((store) => {
  const { calculate } = store
  return {
    display: calculate.display,
  }
})

class Main extends Component {
  render() {
    const { display } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.countStyle}>
          <Text style={styles.countText}>{display}</Text>
        </View>
        <Tipbar />
        <Keyboard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countStyle: {
    height: height * 0.25,
    backgroundColor: '#e3e8ff',
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  countText: {
    fontSize: 80,
    fontWeight: '600',
  }
});

export default Main;
