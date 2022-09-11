import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("window");
export default function ContentCard({ image, text, route }: any) {
    const onPress = async () => {
        if(route == "PocketCBT") {
            if(await AsyncStorage.getItem("pocketCBT") || await AsyncStorage.getItem("pocketCBT") == "true" || !(await AsyncStorage.getItem("pocketCBT") == null) || await AsyncStorage.getItem("pocketCBT") == "false") {
                navigation.navigate(route);
            } else {
                navigation.navigate("PocketCBTIntro");
            }
        } else {
            navigation.navigate(route)
        }
    }

    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.contentCardContainer} onPress={onPress}>
            {/* <Image source={image} style={{ width: 60, height: 60 }} /> */}
            {image}
            <Text style={styles.contentCardText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    contentCardContainer: {
        width: width - 40,
        height: 80,
        borderRadius: 5,
        backgroundColor: "#F2F2F280",
        alignSelf: "center",
        paddingLeft: 32,
        alignItems: "center",
        flexDirection: "row",
        marginTop: 8
    },
    contentCardText: {
        color: "#11535C",
        fontSize: 20,
        fontFamily: "SofiaProBlack",
        marginLeft: 15
    }
});
