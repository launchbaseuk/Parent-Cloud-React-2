import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";

// Components
import BackButton from "../../components/BackButton";
import { GuideCardBig } from "../../components/GuideCard";

// Images
import LearnImage from "../../images/LearnImage.png";

const { width, height } = Dimensions.get("window");
export default function Learn({ navigation, route }: any) {
    return (
        <ScrollView>
            <BackButton text="Learn" />

            <GuideCardBig  />
            <GuideCardBig  />
            <GuideCardBig  />
            <GuideCardBig  />
            <GuideCardBig  />
        </ScrollView>
    );
};

const styles = StyleSheet.create({

});
