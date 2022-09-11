import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image, TextInput } from "react-native";
import SearchIcon from "../../icons/svg/Search";

const { width, height } = Dimensions.get("window");
export default function Search() {
    return (
        <View style={styles.searchContainer}>
            <SearchIcon />
            <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#00084B" />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F2F2F280",
        width: width - 40,
        height: 44,
        borderRadius: 5,
        paddingLeft: 16,
        alignSelf: "center"
    },
    searchIcon: {
        marginRight: 12,
    },
    searchInput: {
        fontFamily: "Montserrat-Regular",
        height: 44,
        textAlignVertical: "center",
        width: width - 105
    }
});
