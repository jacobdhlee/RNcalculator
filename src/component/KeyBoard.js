import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Button from './Button';
import RoundButton from './RoundButton';

class KeyBoard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Button text={"AC"}/>
          <Button text={"+/-"}/>
          <Button text={"%"}/>
          <RoundButton text={"/"} backgroundColor={"#ffe135"}/>
        </View>

        <View style={styles.row}>
          <Button text={"7"}/>
          <Button text={"8"}/>
          <Button text={"9"}/>
          <RoundButton text={"X"} backgroundColor={"#ccaaff"}/>
        </View>

        <View style={styles.row}>
          <Button text={"4"}/>
          <Button text={"5"}/>
          <Button text={"6"}/>
          <RoundButton text={"-"} backgroundColor={"#ffaaff"}/>
        </View>

        <View style={styles.row}>
          <Button text={"1"}/>
          <Button text={"2"}/>
          <Button text={"3"}/>
          <RoundButton text={"+"} backgroundColor={"#3eb489"}/>
        </View>

        <View style={styles.row}>
          <Button text={"0"}/>
          <Button text={"00"}/>
          <Button text={"."}/>
          <RoundButton text={"="} backgroundColor={"#89cff0"}/>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  }
});

export default KeyBoard;