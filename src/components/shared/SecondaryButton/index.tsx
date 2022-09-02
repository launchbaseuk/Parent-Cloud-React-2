import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const SecondaryButton = ({ size, text }: any) => {
  return (
    <TouchableOpacity style={
        size == "small" ? [styles.secondaryBtnContainer, {width: 164}] 
        : size == "mini" ? [styles.secondaryBtnContainer, {width: 104, height: 44}]
        : styles.secondaryBtnContainer}>
        <Text style={
        size == "small" ? [styles.secondaryText, {fontSize: 16}] 
        : size == "mini" ? [styles.secondaryText, {fontSize: 16}]
        : styles.secondaryText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    secondaryBtnContainer: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "#11535C",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 224,
        height: 48
    },
    secondaryText: {
        color: "#11535C",
        fontFamily: "SofiaProBlack",
        fontSize: 20,
    }
});

export default SecondaryButton;
