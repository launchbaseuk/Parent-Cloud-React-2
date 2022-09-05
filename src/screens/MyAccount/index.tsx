import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

// Components
import BackButton from "../../components/BackButton";
import SettingsCard from "../../components/SettingsCard";

// Images
import personalDetails from "../../icons/PersonalDetails.png";
import membership from "../../icons/Membership.png";
import savedContent from "../../icons/SavedContent.png";
import support from "../../icons/SupportSettings.png";
import logout from "../../icons/Logout.png";

const { width, height } = Dimensions.get("window");
export default function MyAccount() {
    const options = [
        {text: "Personal Details", icon: personalDetails, route: "PersonalDetails"},
        {text: "Membership", icon: membership, route: "Membership"},
        {text: "Saved Content", icon: savedContent, route: "SavedContent"},
        {text: "Support", icon: support, route: "SupportSettings"},
        {text: "Logout", icon: logout, route: "Logout"}
    ];

    return (
        <View>
            <BackButton text="My Account" />
            <View style={{ height: 40 }} />

            {options.map((option: any, index: number) => {
                return (
                    <SettingsCard text={option.text} icon={option.icon} route={option.route} key={index} />
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({

});
