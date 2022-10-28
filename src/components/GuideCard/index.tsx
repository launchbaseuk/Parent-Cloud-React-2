import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Images
import guidespicture from "../../images/GuidesPicture.png";

// Components
import PrimaryButton from "../shared/PrimaryButton";

const { width, height } = Dimensions.get("window");
function GuideCardSmall({ text, redirect, title }: any) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.guidecardsmallContainer}>
            <Text style={{ fontFamily: "SofiaProBlack", fontSize: 16, color: "#11535C", marginBottom: 4 }}>{title}</Text>
            <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 13, color: "#150E00", width: 130 }}>{text}</Text>

            <View style={{ marginLeft: -8, justifyContent: "center", alignItems: "center", width: 150, marginTop: 30 }}>
                <PrimaryButton size="mini" text="Download" onPress={() => navigation.navigate("PDFViewer", { text: redirect })} />
            </View>
        </View>
    );
};

function GuideCardBig() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.guidecardbigContainer}>
            <Image source={guidespicture} style={{ marginTop: 16, marginBottom: 16 }} />

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: width - 40  }}>
                <View>
                    <Text style={{ fontFamily: "SofiaProBlack", fontSize: 20, color: "#11535C", marginBottom: 4 }}>Lorem ipsum</Text>
                    <Text style={{ width: 180, color: "#11535C", fontFamily: "Montserrat-Regular", fontSize: 13 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View>
                
                <View style={{ alignSelf: "flex-end", marginBottom: 6 }}>
                    <PrimaryButton size="mini" text="Download" onPress={() => navigation.navigate("PDFViewer")} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    guidecardsmallContainer: {
        backgroundColor: "#F2F2F280",
        width: 150,
        borderRadius: 5,
        paddingLeft: 8,
        paddingTop: 8,
        marginLeft: 8
    },
    guidecardbigContainer: {
        width: width - 40,
        height: 245,
        borderRadius: 5,
        backgroundColor: "#F2F2F280",
        alignItems: "center",
        alignSelf: "center"
    }
});

export { GuideCardSmall, GuideCardBig };
