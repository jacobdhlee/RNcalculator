import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const RoundButton = ({text, onPress, backgroundColor, addStyle}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={[styles.container, { backgroundColor }, addStyle]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: width * 0.20,
    height: 70,
    backgroundColor: 'lightgreen',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: '400',
    color: 'white',
  }
});

export default RoundButton