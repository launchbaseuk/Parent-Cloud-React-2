import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");
export default function FeelingsCard({ text, icon, iconSelected, selected, setSelected, itemKey }: any) {
    return (
        <TouchableOpacity style={{ width: 80, height: 80, borderRadius: 5, backgroundColor: "#F2F2F280", justifyContent: "center", alignItems: "center"}} onPress={() => setSelected(itemKey)}>
            {selected === itemKey ? (
                <Image source={iconSelected} />
            ) : (
                <Image source={icon} />
            )}
            <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 11, marginTop: 8, color: "#150E00" }}>{text}</Text>
        </TouchableOpacity>
    )
}