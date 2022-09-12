import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions, TouchableOpacity } from "react-native";
import BackButton from "../../components/BackButton";
import { GuideCardSmall } from "../../components/GuideCard";

const { width, height } = Dimensions.get("window");
export default function GuidesMedia({ navigation, route }: any) {
    return (
        <View>
            <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
                <BackButton text="Guides" />

                <View style={styles.guidesHeader}>
                    <Text style={{ fontFamily: "SofiaProBlack", color: "#11535C", fontSize: 20 }}>Topic #1</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Guides")}><Text style={{ fontFamily: "Montserrat-Bold", color: "#150E00", fontSize: 14}}>See all</Text></TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 8, paddingRight: 15 }}>
                    <GuideCardSmall />
                    <GuideCardSmall />
                    <GuideCardSmall />
                    <GuideCardSmall />
                </ScrollView>

                <View style={styles.guidesHeader}>
                    <Text style={{ fontFamily: "SofiaProBlack", color: "#11535C", fontSize: 20 }}>Topic #2</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Guides")}><Text style={{ fontFamily: "Montserrat-Bold", color: "#150E00", fontSize: 14}}>See all</Text></TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 8, paddingRight: 15 }}>
                    <GuideCardSmall />
                    <GuideCardSmall />
                    <GuideCardSmall />
                    <GuideCardSmall />
                </ScrollView>

                <View style={styles.guidesHeader}>
                    <Text style={{ fontFamily: "SofiaProBlack", color: "#11535C", fontSize: 20 }}>Topic #3</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Guides")}><Text style={{ fontFamily: "Montserrat-Bold", color: "#150E00", fontSize: 14}}>See all</Text></TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 8, paddingRight: 15 }}>
                    <GuideCardSmall />
                    <GuideCardSmall />
                    <GuideCardSmall />
                    <GuideCardSmall />
                </ScrollView>
            </ScrollView>
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
});
