import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Images
import headphones from "../../icons/headphones.png";
import PlayIcon from "../../icons/PlayIcon.png";

const { width, height } = Dimensions.get("window");
export default function MediaListItem({ text, description, image }: any) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.imageContainer}>
                    <Image source={headphones} style={styles.image} />
                </View>

                <View style={styles.textContainer}>
                    <Text style={{ fontFamily: "Montserrat-Bold", color: "#11535C", fontSize: 14 }}>Lorem ipsum</Text>
                    <Text style={{ width: 200, fontFamily: "Montserrat-Regular", color: "#150E00", lineHeight: 19, fontSize: 11 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
                </View>
            </View>

            <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => navigation.navigate("MediaDetails")}>
                <Image source={PlayIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width - 40,
        height: 100,
        borderRadius: 5,
        backgroundColor: "#F2F2F280",
        alignSelf: "center",
        paddingLeft: 10,
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textContainer: {
        marginLeft: 8,
        height: 100,
        justifyContent: "center",
        marginTop: -10
    },
    imageContainer: {
        width: 80,
        height: 80,
        borderRadius: 5,
        backgroundColor: "#11535C",
        justifyContent: "center",
        alignItems: "center"
    }
});
