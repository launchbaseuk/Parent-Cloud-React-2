import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import pause from "../../images/Pause.png";

// Images
import Bookmark from "../../images/svg/Bookmark";
import BookmarkMarked from "../../images/svg/BookmarkMarked";

const { width, height } = Dimensions.get("window");
export default function LiveTalkItem({
  key,
  title,
  description,
  externalLink,
  imageLink,
  details,
}: any) {
  const navigation = useNavigation();
  const [imagePl, setImagePL] = useState<string | undefined>("");

  useEffect(() => {
    (async () => {
      const request = await fetch(imageLink);
      const response = await request.json();

      setImagePL(response.source_url);
    })();
  }, []);

  return (
    <TouchableOpacity
      key={key}
      style={styles.container}
      onPress={() =>
        navigation.navigate("ClassDetails", {
          title: title,
          details: details,
          image: imagePl,
          description: description,
          link: externalLink,
        })
      }
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imageContainer}>
          <Image
            source={imagePl ? { uri: encodeURI(imagePl) } : pause}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          <View style={{ width: "80%" }}>
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                color: "#150E00",
                fontSize: 14,
                width: width - 135,
              }}
              numberOfLines={2}
            >
              {title}
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                color: "#11535C",
                fontSize: 13,
                width: width - 135,
              }}
            >
              {details}
            </Text>
            <Text
              style={{
                width: 200,
                fontFamily: "Montserrat-Regular",
                color: "#150E00",
                lineHeight: 19,
                fontSize: 11,
              }}
              numberOfLines={3}
            >
              {/* {description.toString().substring(0, 50)} */}
              {description}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    // maxHeight: 100,
    borderRadius: 5,
    backgroundColor: "#F2F2F280",
    alignSelf: "center",
    paddingLeft: 10,
    // paddingBottom: 50,
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 8,
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 8,
    // height: '100%',
    marginBottom: 10,
    width: "90%",
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: "#11535C",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
