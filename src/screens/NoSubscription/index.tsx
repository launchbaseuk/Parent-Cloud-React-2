import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/auth-context";

// Components
import NoSubscriptionImage from "../../images/svg/NoSubscriptionImage";
import PrimaryButton from "../../components/shared/PrimaryButton";
import SecondaryButton from "../../components/shared/SecondaryButton";

export default function NoSubscription() {
    const { sub, logout }: any = useAuth();
    const navigation = useNavigation();
    const url = "https://parentcloud.borne.io";

    useEffect(() => {
        if(sub) {
            navigation.navigate("TabNav");
        }
    }, [sub]);

    return (
        <View style={styles.container}>
            <NoSubscriptionImage />
            <Text style={styles.primaryText}>You don’t have an active subscription</Text>
            <Text style={styles.secondaryText}>Click the button below to get one!</Text>

            <PrimaryButton text="Get subscription" onPress={async() => await Linking.openURL(url)} />
            <View style={{ height: 8 }} />
            <SecondaryButton text="Cancel" onPress={logout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    primaryText: {
        marginBottom: 8,
        marginTop: 32,
        width: 260,
        fontSize: 25,
        textAlign: "center",
        color: "#11535C",
        fontFamily: "SofiaProBlack"
    },
    secondaryText: {
        marginBottom: 63,
        color: "#150E00",
        fontSize: 16,
        fontFamily: "Montserrat-Regular"
    }
});
