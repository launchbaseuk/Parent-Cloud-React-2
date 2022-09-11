import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BackArrow from "../../icons/svg/BackArrow";

export default function BackButton({ text }: any) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
            <BackArrow />
            <Text style={styles.backButtonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 22,
        marginTop: 30
    },
    backButtonText: {
        marginLeft: 15,
        fontFamily: "SofiaProBold",
        color: "#11535C",
        fontSize: 25
    }
});
