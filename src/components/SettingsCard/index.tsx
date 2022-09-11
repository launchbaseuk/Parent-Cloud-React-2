import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function SettingsCard({ text, icon, route }: any) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.settingsCard} onPress={() => navigation.navigate(route)}>
            {icon}
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    settingsCard: {
        width: width - 40,
        height: 44,
        alignSelf: "center",
        borderRadius: 5,
        backgroundColor: "#F2F2F280",
        paddingLeft: 17,
        alignItems: "center",
        marginTop: 8,
        flexDirection: "row"
    },
    text: {
        fontFamily: "SofiaProBlack",
        color: "#150E00",
        fontSize: 20,
        marginLeft: 8
    }
});
