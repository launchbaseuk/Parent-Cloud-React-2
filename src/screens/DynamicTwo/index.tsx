import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function DynamicTwo() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Dynamic Content #2</Text>
            <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 50,
        marginLeft: 32
    },
    title: {
        color: "#11535C",
        fontSize: 20,
        fontFamily: "SofiaProBlack"
    },
    content: {
        fontSize: 16,
        marginTop: 8,
        fontFamily: "Montserrat-Regular",
        color: "#150E00",
        width: 312
    }
});
