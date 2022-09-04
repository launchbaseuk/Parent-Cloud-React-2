import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default function Chip({ setSelected, selected, text, itemKey }: any) {
    return (
        <TouchableOpacity style={selected == itemKey ? [styles.selectionContainer, styles.selected] : styles.selectionContainer} onPress={() => setSelected(itemKey)}>
            <Text style={selected == itemKey ? [styles.selectionText, styles.selectedText] : styles.selectionText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    selectionContainer: {
        backgroundColor: "#F2F2F280",
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 30,
        alignSelf: "center",
        marginTop: 8,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#11535C",
        borderWidth: 2,
        marginRight: 8
    },
    selected: {
        backgroundColor: "#11535C",
    },
    selectionText: {
        fontFamily: "Montserrat-Regular",
        fontSize: 15,
        color: "#150E00"
    },
    selectedText: {
        fontFamily: "Montserrat-Bold",
        color: "#FFFAC5"
    }
});
