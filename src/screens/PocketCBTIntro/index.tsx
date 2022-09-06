import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import PrimaryButton from "../../components/shared/PrimaryButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");
export default function PocketCBTIntro() {
    const navigation = useNavigation();
    const onPressHandler = async () => {
        await AsyncStorage.setItem("pocketCBT", "true");
        navigation.navigate("FeelingCBT");
    }

    return (
        <View>
            <View style={{ width: width - 40, height: 140, borderRadius: 5, backgroundColor: "#F2F2F280", paddingLeft: 16, justifyContent: "center", alignSelf: "center", marginTop: 40, marginBottom: 32 }}>
                <Text style={{ fontFamily: "SofiaProBlack", fontSize: 31, color: "#11535C" }}>Pocket CBT</Text>
                <Text style={{ width: "80%", fontFamily: "Montserrat-Regular", fontSize: 16, marginTop: 4, color: "#150E00" }}>Pocket CBT is a tool enabling you to incorporate CBT techniques into your everyday life!</Text>
            </View>

            <View>
                <Text style={{ fontFamily: "SofiaProBlack", fontSize: 20, color: "#11535C", marginBottom: 8, width: width - 40, alignSelf: "center" }}>How it works...</Text>
                <View style={{ width: width - 40, height: 80, borderRadius: 5, backgroundColor: "#F2F2F280", paddingLeft: 16, alignSelf: "center", justifyContent: "center", marginBottom: 8 }}>
                    <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16, color: "#150E00", width: "85%" }}>Track your moods, challenge negative thoughts...</Text>
                </View>
                <View style={{ width: width - 40, height: 80, borderRadius: 5, backgroundColor: "#F2F2F280", paddingLeft: 16, alignSelf: "center", justifyContent: "center", marginBottom: 8 }}>
                    <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16, color: "#150E00", width: "85%" }}>Practice gratitude and assess your longer term wellbeing...</Text>
                </View>
                <View style={{ width: width - 40, height: 80, borderRadius: 5, backgroundColor: "#F2F2F280", paddingLeft: 16, alignSelf: "center", justifyContent: "center", marginBottom: 8 }}>
                    <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16, color: "#150E00", width: "85%" }}>Use this tool everyday to improve your general mood and self-esteem!</Text>
                </View>
            </View>

            <View style={{ width: width - 40, justifyContent: "center", alignItems: "center", marginTop: 40, alignSelf: "center" }}>
                <PrimaryButton text="Let's start!" onPress={onPressHandler} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});
