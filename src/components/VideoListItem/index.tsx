import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import pause from "../../images/Pause.png";

// Images
import Bookmark from "../../images/svg/Bookmark";
import BookmarkMarked from "../../images/svg/BookmarkMarked";
import FastImage from "react-native-fast-image";

const { width, height } = Dimensions.get("window");
export default function VideoListItem({
  key,
  text,
  description,
  image,
  details,
  vimeoLink,
  video,
  liveTalk,
  bookmarked,
  onPressBookmark,
  imageSmall,
}: any) {
  const navigation = useNavigation();
  const [imagePl, setImagePL] = useState<string>("");

  useEffect(() => {
    (async () => {
      const request = await fetch(
        image[0].href
      );
      const response = await request.json();

      // console.log(response.guid.rendered)
      if (response.guid.rendered) {
        setImagePL(response.guid.rendered);
      }
    })();
  }, []);

  return (
    <TouchableOpacity
      key={key}
      style={styles.container}
      onPress={() =>
        navigation.navigate("VideoDetails", {
          title: text,
          details: details,
          vimeoLink: vimeoLink,
          video: video,
          featuredMedia: video.featured_media,
          description: description,
          bookmarked: bookmarked,
          imageSmall: imagePl,
        })
      }
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.imageContainer}>
        {imagePl ? (
            <FastImage
              source={{ uri: imagePl, priority: FastImage.priority.high }}
              style={styles.image}
            />
          ) : (
            <ActivityIndicator size="large" color="#fff" style={{ width: 85, height: 85 }} />
          )}
        </View>

        <View style={styles.textContainer}>
          <View style={{ width: "80%" }}>
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                color: "#11535C",
                fontSize: 14,
                width: "80%",
              }}
              numberOfLines={2}
            >
              {text}
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
              {description}
            </Text>
          </View>

          <TouchableOpacity
            style={{ marginLeft: -8, marginTop: 2 }}
            onPress={onPressBookmark}
          >
            {bookmarked ? <BookmarkMarked /> : <Bookmark />}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    // height: 100,
    borderRadius: 5,
    backgroundColor: "#F2F2F280",
    alignSelf: "center",
    marginBottom: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    marginLeft: 8,
    height: 85,
    flexDirection: "row",
    alignItems: "center",
    // marginTop: -10,
  },
  imageContainer: {
    width: 85,
    height: 85,
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
