import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ContentCard from "../../components/shared/ContentCard";

// Components
import More from "../../components/shared/ScreenHeaders/More";

// Images
import myaccount from "../../images/myaccount.png";
import hrmanagertool from "../../images/hrmanagertool.png";

export default function MoreScreen() {
    return (
        <View>
            <More />
            <View style={{ height: 15 }} />

            <ContentCard image={myaccount} text="My Account" route="MyAccount" />
            <ContentCard image={hrmanagertool} text="HR & Manager Resources" route="HRManagement" />
        </View>
    );
};

const styles = StyleSheet.create({

});