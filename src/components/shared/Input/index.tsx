import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default function Input({ label, placeholder }: any) {
    return (
        <View>
            <Text style={styles.text}>{label}</Text>
            <TextInput placeholder={placeholder} style={styles.input} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#F2F2F280",
        borderRadius: 5,
        width: width - 70,
        height: 44,
        paddingLeft: 16
    },
    text: {
        fontSize: 13,
        color: "#11535C",
        fontWeight: "400",
        lineHeight: 19
    }
});
