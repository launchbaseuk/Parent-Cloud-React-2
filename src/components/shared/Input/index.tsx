import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default function Input({ label, placeholder, value, onChangeText, secureTextEntry }: any) {
    return (
        <View>
            <Text style={styles.text}>{label}</Text>
            <TextInput placeholder={placeholder} placeholderTextColor="#150E00" style={styles.input} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#F2F2F280",
        borderRadius: 5,
        width: width - 70,
        height: 44,
        paddingLeft: 16,
        fontFamily: "Montserrat-Italic"
    },
    text: {
        fontSize: 13,
        color: "#11535C",
        fontFamily: "Montserrat-Regular",
        lineHeight: 19
    }
});
