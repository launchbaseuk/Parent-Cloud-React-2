import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

// Components
import BackButton from "../../components/BackButton";
import SettingsCard from "../../components/SettingsCard";

// Images
import PersonalDetailsIcon from "../../icons/svg/PersonalDetailsIcon";
import MembershipIcon from "../../icons/svg/MembershipIcon";
import SavedContentIcon from "../../icons/svg/SavedContentIcon";
import SupportIcon from "../../icons/svg/SupportIcon";
import SignOutIcon from "../../icons/svg/SignOutIcon";

const { width, height } = Dimensions.get("window");
export default function MyAccount() {
    const options = [
        {text: "Personal Details", icon: <PersonalDetailsIcon />, route: "PersonalDetails"},
        {text: "Membership", icon: <MembershipIcon />, route: "Membership"},
        {text: "Saved Content", icon: <SavedContentIcon />, route: "SavedContent"},
        {text: "Support", icon: <SupportIcon />, route: "SupportSettings"},
        {text: "Logout", icon: <SignOutIcon />, route: "Logout"}
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
