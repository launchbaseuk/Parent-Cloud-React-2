import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from "react-native";

// Components
import BackButton from "../../components/BackButton";

// Images
import email from "../../icons/EmailIcon.png";
import phone from "../../icons/PhoneIcon.png";

const { width, height } = Dimensions.get("window");
export default function SupportSettings() {
    return (
        <View>
            <BackButton text="Support" />

            <View style={{ width: width - 40, height: 104, backgroundColor: "#F2F2F280", paddingLeft: 16, borderRadius: 5, alignSelf: "center", justifyContent: "center", alignItems: "center", marginTop: 48, marginBottom: 48 }}>
                <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16, color: "#150E00" }}>
                    We're here to help!{"\n"}
                    Send us your questions and we'll come back to you as soon as we can!
                </Text>
            </View>

            <TouchableOpacity style={{ width: width - 40, height: 44, backgroundColor: "#F2F2F280", alignItems: "center", flexDirection: "row", paddingLeft: 16, borderRadius: 5, alignSelf: "center" }}>
                <Image source={email} />
                <Text style={{ fontFamily: "Montserrat-Regular", color: "#150E00", fontSize: 16, marginLeft: 8 }}>info@parentcloud.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: width - 40, height: 44, backgroundColor: "#F2F2F280", alignItems: "center", flexDirection: "row", paddingLeft: 16, borderRadius: 5, marginTop: 16, alignSelf: "center" }}>
                <Image source={phone} />
                <Text style={{ fontFamily: "Montserrat-Regular", color: "#150E00", fontSize: 16, marginLeft: 8 }}>+44 (0) 1234 / 567 890</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

});
