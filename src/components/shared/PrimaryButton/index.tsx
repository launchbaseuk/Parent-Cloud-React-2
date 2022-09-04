import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const PrimaryButton = ({size, text, onPress}: any) => {
  return (
    <TouchableOpacity style={
      size == "small" ? [styles.primaryBtnContainer, {width: 164}] 
      : size == "mini" ? [styles.primaryBtnContainer, {width: 104, height: 44}]
      : styles.primaryBtnContainer} onPress={onPress}>
      <Text style={
      size == "small" ? [styles.primaryText, {fontSize: 16}] 
      : size == "mini" ? [styles.primaryText, {fontSize: 16}]
      : styles.primaryText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryBtnContainer: {
    backgroundColor: "#11535C",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 224,
    height: 48
  },
  primaryText: {
    color: "#FFFAC5",
    fontFamily: "SofiaProBlack",
    fontSize: 20
  }
});

export default PrimaryButton;
