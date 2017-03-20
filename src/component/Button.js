import React from 'react';
import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const Button = ({text, onPress, underlayColor}) => {
  return (
    <TouchableHighlight  underlayColor={underlayColor} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: '400',
  }
});

export default Button;