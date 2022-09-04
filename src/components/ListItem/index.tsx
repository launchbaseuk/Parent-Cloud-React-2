import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function ListItem({ text, image, description }: any) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.listItemContainer} onPress={() => navigation.navigate("ClassDetails")}>
            <Image source={image} style={{ borderRadius: 5, marginRight: 8 }} />
            <View style={styles.listItemTextContainer}>
                <Text style={styles.title}>{text}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItemContainer: {
        width: width - 40,
        height: 100,
        borderRadius: 5,
        backgroundColor: "#F2F2F280",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8
    },
    title: {
        fontSize: 15,
        color: "#11535C",
        fontFamily: "Montserrat-Bold"
    },
    description: {
        width: 245,
        fontFamily: "Montserrat-Regular",
        fontSize: 12
    }
});
