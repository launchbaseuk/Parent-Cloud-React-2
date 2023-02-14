import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import PrimaryButton from "../shared/PrimaryButton";

const { width, height } = Dimensions.get("window");
export default function LearnCard({ image, title, excerpt, content }: any) {
  const navigation = useNavigation();

  return (
    <View style={styles.guidecardbigContainer}>
      <View style={{ width: 312, height: 120 }}>{image}</View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: width - 40,
          marginTop: 15,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "SofiaProBlack",
              fontSize: 20,
              width: 180,
              color: "#11535C",
              marginBottom: 4,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              width: 180,
              color: "#11535C",
              fontFamily: "Montserrat-Regular",
              fontSize: 13,
            }}
          >
            {excerpt}
          </Text>
        </View>

        <View style={{ alignSelf: "flex-end", marginBottom: 6 }}>
          <PrimaryButton
            size="mini"
            text="Learn"
            onPress={() =>
              navigation.navigate("CardViewer", { text: content, title: title })
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  guidecardbigContainer: {
    width: width - 40,
    borderRadius: 5,
    backgroundColor: "#F2F2F280",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    paddingTop: 8,
    paddingBottom: 10,
  },
});
