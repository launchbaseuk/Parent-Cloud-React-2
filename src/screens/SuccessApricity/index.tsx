import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";

// Components
import PrimaryButton from "../../components/shared/PrimaryButton";

// Images
import SuccessApricityImage from "../../images/svg/SuccessApricityImage";

const { width, height } = Dimensions.get("window");
export default function SuccessApricity({ navigation, route }: any) {
    const handlePress = () => {
        if(route.params.pageFrom == "mindhub") {
            navigation.navigate("Home");
        }
    }

    return (
        <View style={styles.successContainer}>
            <View style={{ height: 37 }} />
            <SuccessApricityImage />
            <View style={{ height: 32 }} />

            <Text style={{ fontFamily: "SofiaProBlack", fontSize: 25, color: "#11535C", marginBottom: 8 }}>{route.params.pageFrom == "mindhub" ? "Thanks for checking in!" : "Successful Outcome!"}</Text>
            <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16, color: "#11535C", marginBottom: 64, width: 311, textAlign: "center" }}>{route.params.pageFrom == "mindhub" ? "Keep checking in each day to get a better picture of how your moods change throughout the month" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</Text>

            <PrimaryButton text={route.params.pageFrom == "mindhub" ? "Done" : "Primary Action"} onPress={handlePress} />
        </View>
    );
};

const styles = StyleSheet.create({
    successContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
});
