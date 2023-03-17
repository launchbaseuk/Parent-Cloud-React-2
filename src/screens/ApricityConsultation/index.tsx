import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import BackButton from "../../components/BackButton";
import PrimaryButton from "../../components/shared/PrimaryButton";
import SecondaryButton from "../../components/shared/SecondaryButton";

const { width, height } = Dimensions.get("window");
export default function ApricityConsultation() {
    const navigation = useNavigation();
    return (
        <View>
            <BackButton text="Apricity Consultation" />

            <Text style={{ marginTop: 57, width: width - 100, alignSelf: "center", fontFamily: "Montserrat-Regular", fontSize: 16, color: "#150E00" }}>
                We partner with Apricity to offer you access to its online fertility clinic. 
                {"\n\n"}
                Through our partnership you can book unlimited online consultations with their experienced fertility consultants, seven days a week, who can offer reliable fertility information and support.  
                {"\n\n"}
                You also have the option to self-fund further diagnostic assessments and treatment, following your consultations.
            </Text>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 107 }}>
                <PrimaryButton text="Book Consultation" onPress={() => navigation.navigate("SuccessApricity")} />
                <View style={{ height: 8 }} />
                <SecondaryButton text="Learn More" />
            </View>
            {/* <Image source={require("../../images/Clouds.png")} style={{ position: "absolute", zIndex: -1, width: width, backgroundColor: "transparent" }} /> */}
        </View>
    );
};

const styles = StyleSheet.create({

});
