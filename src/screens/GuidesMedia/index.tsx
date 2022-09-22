import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions, TouchableOpacity } from "react-native";
import BackButton from "../../components/BackButton";
import { GuideCardSmall } from "../../components/GuideCard";

const { width, height } = Dimensions.get("window");
export default function GuidesMedia({ navigation, route }: any) {
    async function requests() {
        let email = await AsyncStorage.getItem("user_email");

        // Get User ID
        let responseID: any = await fetch(`https://parentcloud.borne.io/wp-json/mo/v1/getUserID/${email}`);
        responseID = await responseID.json();
        responseID = responseID[0].ID;

        // Get membership
        // let responseMembership: any = await fetch(`https://parentcloud.borne.io/wp-json/mp/v1/subscriptions/${responseID}`, {
        //     headers: {
        //         "MEMBERPRESS-API-KEY": "8T5AkgBptM"
        //     }
        // });
        // responseMembership = await responseMembership.json();
        
    }
    useFocusEffect(
        React.useCallback(() => {
            requests();
        }, [])
    );
    
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
