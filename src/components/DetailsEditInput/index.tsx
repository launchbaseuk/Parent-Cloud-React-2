import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Dimensions, Text, Image, TextInput, View } from "react-native";

// Images
import PencilIcon from "../../icons/svg/PencilIcon";

const { width, height } = Dimensions.get("window");
export default function DetailsEditInput({ setChanged, value, setText, text }: any) {
    const handleChange = (e: string) => {
        setText(e);
        setChanged(true);
    }

    return (
        <TouchableOpacity style={{ backgroundColor: "#F2F2F280", width: width - 40, height: 44, marginTop: 8, borderRadius: 5, paddingLeft: 16, paddingRight: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between", alignSelf: "center" }}>
            <TextInput placeholder={text} value={text == "City" || text == "State" || text == "Country" || text == "Post Code" ? "" : text} onChangeText={handleChange} style={{ fontFamily: "Montserrat-Regular", color: "#150E00", width: "100%" }}></TextInput>
            <View style={{ position: "absolute", right: 20 }}>
                <PencilIcon />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

});
