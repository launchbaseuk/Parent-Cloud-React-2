import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import backarrow from "../../icons/backarrow.png";

export default function BackButton({ text }: any) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
            <Image source={backarrow} style={styles.backButtonIcon} />
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
