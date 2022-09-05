import React, { useState, useEffect } from "react";
import { View, ScrollView, TouchableOpacity, Text, Dimensions, StyleSheet, Image } from "react-native";

// Components
import BackButton from "../../components/BackButton";
import TagFilter from "../../components/TagFilter";

// Images
import file from "../../icons/FileIcon.png";
import link from "../../icons/LinkIcon.png";

const { width, height } = Dimensions.get("window");
export default function SavedContent() {
    return (
        <View>
            <BackButton text="Saved Content" />

            <TagFilter />
            <View style={{ height: 16 }} />

            {Array.from({ length: 7 }).map((_, index) => {
                return (
                    <View style={{ marginTop: 4, width: width - 40, height: 44, borderRadius: 5, backgroundColor: "#F2F2F280", alignSelf: "center", paddingLeft: 16, alignItems: "center", flexDirection: "row" }}>
                        <Image source={file} />
                        <Text style={{ fontFamily: "Montserrat-Regular", color: "#150E00", fontSize: 16, marginLeft: 10 }}>PDF Title...</Text>
                    </View>
                )
            })}
            <View style={{ height: 16 }} />
            {Array.from({ length: 3 }).map((_, index) => {
                return (
                    <View style={{ marginTop: 4, width: width - 40, height: 44, borderRadius: 5, backgroundColor: "#F2F2F280", alignSelf: "center", paddingLeft: 16, alignItems: "center", flexDirection: "row" }}>
                        <Image source={link} />
                        <Text style={{ fontFamily: "Montserrat-Regular", color: "#150E00", fontSize: 16, marginLeft: 10 }}>01/02/1234 - 12:34</Text>
                    </View>
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({

});
