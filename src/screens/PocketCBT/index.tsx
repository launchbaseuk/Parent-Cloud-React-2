import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import BackButton from "../../components/BackButton";
import PocketCBTCard from "../../components/PocketCBTCard";

// Images
import checkin from "../../images/CheckIn.png";
import entries from "../../images/Entries.png";
import gratitude from "../../images/Gratitude.png";
import learn from "../../images/Learn.png";

export default function PocketCBT() {
    return (
        <View style={styles.container}>
            <BackButton text={"Pocket CBT"} />

            <View style={{ height: 32 }} />

            <PocketCBTCard text="Check-in" image={checkin} route="FeelingsCBT" />
            <PocketCBTCard text="Learn" image={learn} route="Entries" />
            <PocketCBTCard text="Gratitude Diary" image={gratitude} route="Gratitude" />
            <PocketCBTCard text="Entries Log" image={entries} route="Learn" />
        </View>
    );
};

const styles = StyleSheet.create({

});
