import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import { digitalEnter, digitalReset, operatorEnter, excutedEnter } from '../actions'
import Button from './Button';
import RoundButton from './RoundButton';

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
class KeyBoard extends Component {
  constructor() {
    super()

    this.digital = this.digital.bind(this);
    this.digitalReset = this.digitalReset.bind(this);
    this.operator = this.operator.bind(this);
    this.excuted = this.excuted.bind(this);
  }

  digital(text) {
    this.props.dispatch(digitalEnter(text))
  }

  digitalReset() {
    this.props.dispatch(digitalReset())
  }

  operator(ops) {
    this.props.dispatch(operatorEnter(ops))
  }

  excuted() {
    this.props.dispatch(excutedEnter())
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Button text={"AC"} onPress={this.digitalReset}/>
          <Button text={"+/-"} onPress={() => this.digital('-')}/>
          <Button text={"%"} onPress={() => this.digital('%')}/>
          <RoundButton 
            text={"/"} 
            backgroundColor={"#ffe135"} 
            onPress={() => this.operator('/')}/>
        </View>

        <View style={styles.row}>
          <Button text={"7"} onPress={() => this.digital('7')}/>
          <Button text={"8"} onPress={() => this.digital('8')}/>
          <Button text={"9"} onPress={() => this.digital('9')}/>
          <RoundButton 
            text={"X"} 
            backgroundColor={"#ccaaff"} 
            onPress={() => this.operator('*')}/>
        </View>

        <View style={styles.row}>
          <Button text={"4"} onPress={() => this.digital('4')}/>
          <Button text={"5"} onPress={() => this.digital('5')}/>
          <Button text={"6"} onPress={() => this.digital('6')}/>
          <RoundButton 
            text={"-"} 
            backgroundColor={"#ffaaff"} 
            onPress={() => this.operator('-')}/>
        </View>

        <View style={styles.row}>
          <Button text={"1"} underlayColor={'red'} onPress={() => this.digital('1')}/>
          <Button text={"2"} onPress={() => this.digital('2')}/>
          <Button text={"3"} onPress={() => this.digital('3')}/>
          <RoundButton 
            text={"+"} 
            backgroundColor={"#3eb489"} 
            onPress={() => this.operator('+')}/>
        </View>

        <View style={styles.row}>
          <Button text={"0"} onPress={() => this.digital('0')}/>
          <Button text={"00"} onPress={() => this.digital('00')}/>
          <Button text={"."} onPress={() => this.digital('.')}/>
          <RoundButton 
            text={"="} 
            backgroundColor={"#89cff0"} 
            onPress={this.excuted}/>
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