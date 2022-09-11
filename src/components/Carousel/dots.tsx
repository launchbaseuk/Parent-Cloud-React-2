import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

export default function Dots({ number, setCurrent }: any) {
    return (
        <View style={styles.dotsContainer}>
            {Array.from({ length: 3 }, (_, i) => (
                <TouchableOpacity key={i} style={[styles.dot, i === number ? styles.activeDot : {}]} onPress={() => setCurrent(i)} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    dotsContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 16,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 360,
        backgroundColor: "#FFFAC5",
        marginLeft: 10
    },
    activeDot: {
        width: 20,
        backgroundColor: "#11535C"
    }
});
