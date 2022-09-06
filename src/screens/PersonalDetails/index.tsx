import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";

// Components
import BackButton from "../../components/BackButton";
import DetailsEditInput from "../../components/DetailsEditInput";

// Images
import placeholderImage from "../../images/PlaceholderImage.png";

const { width, height } = Dimensions.get("window");
export default function PersonalDetails() {
    return (
        <View>
            <BackButton text="Personal Details" />

            <View style={{ width: width - 40, height: 140, backgroundColor: "#F2F2F280", alignSelf: "center", flexDirection: "row", alignItems: "center", borderRadius: 5, paddingLeft: 16, marginTop: 40, marginBottom: 16 }}>
                <View style={{ width: 100, height: 100, borderRadius: 350, backgroundColor: "#11535C", justifyContent: "center", alignItems: "center", marginRight: 16 }}>
                    <Image source={placeholderImage} style={{ height: 50, width: 50 }} />
                </View>
                <Text style={{ fontFamily: "SofiaProBlack", color: "#150E00", fontSize: 22 }}>Name Surname</Text>
            </View>

            <DetailsEditInput text="Name" />
            <DetailsEditInput text="Surname" />
            <DetailsEditInput text="Email address" />
            <DetailsEditInput text="Address Line" />
            <DetailsEditInput text="State/Province" />
            <DetailsEditInput text="Country" />
            <DetailsEditInput text="Post Code" />
        </View>
    );
}

const styles = StyleSheet.create({

});
