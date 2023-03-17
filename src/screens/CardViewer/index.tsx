import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, ScrollView, StyleSheet, Image } from "react-native";
import RenderHtml from "react-native-render-html";
import Pdf from "react-native-pdf";

// Components
import BackButton from "../../components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
export default function CardViewer({ navigation, route }: any) {
  const title = route?.params?.title;

  const text = {
    html: route.params.text.replace(/\n/g, "<br/>"),
  };
  const source = {
    uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
    // cache: true,
  };
  console.log(route.params);

  return (
    <SafeAreaView>
      <BackButton text={title || "PDF Title"} />

      <View style={styles.container}>
        {text.html ? (
          <ScrollView
            style={{
              width: width - 50,
              alignSelf: "center",
              backgroundColor: "#F2F2F250",
              borderRadius: 5,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 16,
              paddingBottom: 100,
            }}
          >
            <RenderHtml
              source={text}
              baseStyle={{
                fontFamily: "Montserrat-Regular",
                color: "#150E00",
                fontSize: 16,
                lineHeight: "24px",
                paddingBottom: 100,
              }}
            />
          </ScrollView>
        ) : (
          <Pdf
            trustAllCerts={false}
            source={{ uri: encodeURI(route?.params?.pdf) }}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
              console.log(error);
            }}
            onPressLink={(uri) => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}
          />
        )}
      </View>
      {/* <Image source={require("../../images/Clouds.png")} style={{ position: "absolute", zIndex: -1, width: width, backgroundColor: "transparent" }} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
    paddingBottom: 100,
  },
  pdf: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
