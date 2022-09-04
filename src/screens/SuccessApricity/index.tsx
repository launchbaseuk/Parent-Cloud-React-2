import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";

// Components
import PrimaryButton from "../../components/shared/PrimaryButton";

// Images
import successapricityimage from "../../images/SuccessApricityImage.png";

const { width, height } = Dimensions.get("window");
export default function SuccessApricity() {
    return (
        <View style={styles.successContainer}>
            <Image source={successapricityimage} style={{ marginTop: 37, marginBottom: 32 }} />

            <Text style={{ fontFamily: "SofiaProBlack", fontSize: 25, color: "#11535C", marginBottom: 8 }}>Successful Outcome!</Text>
            <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16, color: "#11535C", marginBottom: 64, width: 311, textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

            <PrimaryButton text="Primary Action" />
        </View>
    );
};

const styles = StyleSheet.create({
    successContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
});
