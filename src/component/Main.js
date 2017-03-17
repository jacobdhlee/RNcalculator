import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

import Keyboard from './KeyBoard';
import RoundButton from './RoundButton';
import Tipbar from './Tipbar'

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countStyle}>
          <Text style={styles.countText}>0</Text>
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
