import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "../../components/BackButton";
import PocketCBTCard from "../../components/PocketCBTCard";

// Images
// import CheckInImage from "../../images/svg/CheckInImage";
// import EntriesImage from "../../images/svg/EntriesImage";
// import GratitudeImage from "../../images/svg/GratitudeImage";
// import LearnImage from "../../images/svg/LearnImage";
import checkimage from "../../icons/Group.png";
import learnimage from "../../icons/Learn.png";
import gratitudeimage from "../../icons/Gratitude.png";
import moodtrackerimage from "../../icons/MoodTracker.png";

const { width, height } = Dimensions.get("window");
export default function PocketCBT() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackButton text={"Pocket CBT"} />

        <View style={{ height: 32 }} />

        <PocketCBTCard
          text="Check-in"
          image={checkimage}
          route="FeelingsCBT"
        />
        <PocketCBTCard text="Learn" image={learnimage} route="Learn" />
        <PocketCBTCard
          text="Gratitude Diary"
          image={gratitudeimage}
          route="Gratitude"
        />
        <PocketCBTCard
          text="Mood Tracker"
          image={moodtrackerimage}
          route="MoodTracker"
        />
      </View>
      {/* <Image source={require("../../images/Clouds.png")} style={{ position: "absolute", zIndex: -1, width: width, backgroundColor: "transparent" }} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
});
