import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Dimensions, Text, Image, TextInput } from "react-native";

// Images
import PencilIcon from "../../icons/svg/PencilIcon";

const { width, height } = Dimensions.get("window");
export default function DetailsEditInput({ text }: any) {
    return (
        <TouchableOpacity style={{ backgroundColor: "#F2F2F280", width: width - 40, height: 44, marginTop: 8, borderRadius: 5, paddingLeft: 16, paddingRight: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between", alignSelf: "center" }}>
            <Text style={{ fontFamily: "Montserrat-Regular", color: "#150E00" }}>{text}</Text>
            <PencilIcon />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

});
