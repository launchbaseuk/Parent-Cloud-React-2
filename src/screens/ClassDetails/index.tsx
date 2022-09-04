import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import PrimaryButton from "../../components/shared/PrimaryButton";
import SecondaryButton from "../../components/shared/SecondaryButton";

// Images
import zoomicon from "../../images/ZoomIcon.png";

const { width, height } = Dimensions.get("window");
export default function ClassDetails() {
    const navigation = useNavigation();

    return (
        <View style={{ justifyContent: "center", alignItems: "center"}}>
            <Image source={zoomicon} style={{ alignSelf: "center", marginTop: 70 }} />

            <View style={{ width: width - 70 }}>
                <Text style={styles.title}>Classes details...</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis faucibus ipsum non malesuada dolor, ultrices dictumst pellentesque et. Bibendum sit velit enim aliquam. Eu arcu tristique odio orci, praesent enim. Fames tempus libero massa mattis a cras consequat nisi.</Text>
            </View>

            <View style={{ flexDirection: "row", width: width - 40, justifyContent: "space-evenly" }}>
                <SecondaryButton size="small" text="Back" onPress={() => navigation.goBack()} />
                <PrimaryButton size="small" text="Register" onPress={() => navigation.navigate("SuccessApricity")} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: "#00084B",
        fontFamily: "SofiaProBlack",
        fontSize: 20,
    },
    description: {
        fontFamily: "Montserrat-Regular",
        color: "#150E00",
        fontSize: 16,
        marginTop: 8,
        marginBottom: 80
    }
});
