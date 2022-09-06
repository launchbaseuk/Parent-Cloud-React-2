import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import BackButton from "../../components/BackButton";
import { GuideCardSmall } from "../../components/GuideCard";
import PrimaryButton from "../../components/shared/PrimaryButton";

// Images
import placeholderImage from "../../images/PlaceholderImage.png";

const { width, height } = Dimensions.get("window");
export default function Fertility() {
    const navigation = useNavigation();

    return (
        <View>
            <BackButton text={"Fertility"} />

            <View style={styles.guidesContainer}>
                <View style={styles.guidesHeader}>
                    <Text style={{ fontFamily: "SofiaProBlack", color: "#11535C", fontSize: 20 }}>Guides</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Guides")}><Text style={{ fontFamily: "Montserrat-Bold", color: "#150E00", fontSize: 14}}>See all</Text></TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 8, paddingRight: 15 }}>
                    <GuideCardSmall />
                    <GuideCardSmall />
                    <GuideCardSmall />
                    <GuideCardSmall />
                </ScrollView>
                <View style={styles.card}>
                    <View style={{ flexDirection: "row", width: "100%", paddingTop: 16, paddingLeft: 16, marginBottom: 70  }}>
                        <Image source={placeholderImage} />
                        <View style={{ marginLeft: 8 }}>
                            <Text style={{ fontFamily: "SofiaProBlack", fontSize: 17, color: "#11535C" }}>Apricity Consultation</Text>
                            <Text style={{ width: "40%", fontFamily: "Montserrat-Regular", fontSize: 13, color: "#150E00" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        </View>
                    </View>

                    <PrimaryButton text="Book consultation" onPress={() => navigation.navigate("ApricityConsultation")} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    guidesHeader: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        width: width - 40,
        marginTop: 41,
        marginBottom: 16
    },
    card: {
        backgroundColor: "#F2F2F280",
        width: width - 40,
        height: 246,
        borderRadius: 5,
        alignItems: "center",
        alignSelf: "center",
        marginTop: 32
    }
});