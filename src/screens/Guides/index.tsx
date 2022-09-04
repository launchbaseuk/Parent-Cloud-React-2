import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

// Components
import BackButton from "../../components/BackButton";
import { GuideCardBig } from "../../components/GuideCard";

export default function Guides() {
    return (
        <View>
            <BackButton text="Guides" />

            <View style={{ height: 57 }} />
            <ScrollView>
                <GuideCardBig />
                <GuideCardBig />
                <GuideCardBig />
                <GuideCardBig />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});
