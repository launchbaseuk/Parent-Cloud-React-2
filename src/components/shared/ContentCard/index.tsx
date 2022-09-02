import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");
export default function ContentCard({ image, text }: any) {
    return (
        <TouchableOpacity style={styles.contentCardContainer}>
            <Image source={image} />
            <Text style={styles.contentCardText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    contentCardContainer: {
        width: width - 40,
        height: 120,
        borderRadius: 5,
        backgroundColor: "#F2F2F280",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    contentCardText: {
        color: "#11535C",
        fontSize: 20,
        fontFamily: "SofiaProBlack",
        marginLeft: 15
    }
});
