import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import MindHub from "../../components/shared/ScreenHeaders/MindHub";
import ContentCard from "../../components/shared/ContentCard";

// Images
import pocketcbt from "../../images/pocketcbt.png";
import guidedmeditation from "../../images/guidedmeditation.png";
import sleepstories from "../../images/sleepstories.png";

const { width, height } = Dimensions.get("window");
export default function MindHubScreen() {
    // useEffect(() => {
    //     (async() => {
    //         await AsyncStorage.removeItem("pocketCBT");
    //     })();
    // }, [])

    return (
        <View>
            <MindHub />
            <View style={{ height: 16 }} />

            <ContentCard image={guidedmeditation} text="Guided Meditation" route="GuidedMeditation" />
            <ContentCard image={sleepstories} text="Sleep Stories" route="SleepStories" />
            <ContentCard image={pocketcbt} text="Pocket CBT" route="PocketCBT" />
        </View>
    );
}

const styles = StyleSheet.create({

});
