import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";
import PrimaryButton from "../shared/PrimaryButton";

const { width, height } = Dimensions.get("window");
export default function LearnCard({ image, title, excerpt, content, index, style }: any) {
  const navigation = useNavigation();

  return (
    <View style={style ? [styles.guidecardbigContainer, { position: "relative", zIndex: 1000 }] : styles.guidecardbigContainer}>
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
          <TouchableOpacity style={[styles.primaryBtnContainer, {width: 104, height: 44}]} onPress={() => navigation.navigate("CardViewer", { text: content, title: title })}>
            <Text style={[styles.primaryText, {fontSize: 16}]}>Learn</Text>
          </TouchableOpacity>
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
    paddingTop: 8,
    paddingBottom: 10,
    marginTop: 15
  },
  primaryBtnContainer: {
    backgroundColor: "#11535C",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryText: {
    color: "#FFFAC5",
    fontFamily: "SofiaProBlack",
    fontSize: 20
  }
});
