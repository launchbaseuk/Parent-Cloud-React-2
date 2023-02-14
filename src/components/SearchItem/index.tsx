import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { decode } from "html-entities";
import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import WarnModal from "../Modal";

const { width, height } = Dimensions.get("window");
export default function SearchItem({
  title,
  description,
  image,
  id,
  type,
}: any) {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  function extractString(input: string) {
    const regex = /video\/(.+)\?h/;
    const match = input.match(regex);
    if (match) {
      return match[1];
    }
    return null;
  }

  const handlePress = async () => {
    if (type == "videos") {
      try {
        const request = await fetch(
          `https://hub.parent-cloud.com/wp-json/wp/v2/videos/${id}`
        );
        const response = await request.json();

        const email = await AsyncStorage.getItem("user_email");
        const requestBookmark = await fetch(
          `https://hub.parent-cloud.com/wp-json/swgfav/v1/get/?mail=${email}`
        );
        const responseBookmark = await requestBookmark.json();

        let excerpt = "",
          details = "",
          toExtract = "",
          title = "",
          bookmarked = false;
        if (
          responseBookmark.filter((item: any) => item.post_id == id).length > 0
        ) {
          bookmarked = true;
        }

        console.log(response);
        if (typeof response.excerpt == "object") {
          excerpt = response.excerpt.rendered.replace(/(<([^>]+)>)/gi, "");
          details = response.content.rendered.replace(/(<([^>]+)>)/gi, "");
          toExtract = response.content.rendered;
          title = response.title.rendered;
        } else {
          excerpt = response.post_excerpt.replace(/(<([^>]+)>)/gi, "");
          details = response.post_content.replace(/(<([^>]+)>)/gi, "");
          toExtract = response.post_content;
          title = response.post_title;
        }

        if (extractString(toExtract) != null) {
          navigation.navigate("VideoDetails", {
            title: decode(title),
            details: details,
            vimeoLink: extractString(toExtract),
            video: response,
            featuredMedia: response.featured_media,
            description: decode(excerpt),
            bookmarked: bookmarked,
          });
        } else {
          navigation.navigate("PodcastDetails", {
            podcast: response,
            postid: response.id,
            bookmarked: bookmarked,
          });
        }
      } catch (err) {
        console.log("errorrr", err);
        setModalVisible(true);
      }
    } else {
      try {
        const request = await fetch(
          `https://hub.parent-cloud.com/wp-json/wp/v2/guides/${id}`
        );
        const response = await request.json();

        const email = await AsyncStorage.getItem("user_email");
        const requestBookmark = await fetch(
          `https://hub.parent-cloud.com/wp-json/swgfav/v1/get/?mail=${email}`
        );
        const responseBookmark = await requestBookmark.json();
        console.log(responseBookmark);

        let bookmarked = false;
        if (
          responseBookmark.filter((item: any) => item.post_id == id).length > 0
        ) {
          bookmarked = true;
        }

        if (response.acf.documents) {
          navigation.navigate("PDFViewer", {
            title: decode(title),
            pdf: response.acf.documents[0].file,
          });
        } else {
          navigation.navigate("PDFViewer", {
            title: decode(title),
            text: decode(response.content.rendered),
          });
        }
      } catch (err) {
        console.log("errorrr", err);
        setModalVisible(true);
      }
    }
  };
  //70%
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <WarnModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: encodeURI(image) }}
            style={{
              borderRadius: 10,
              width: 80,
              height: 80,
              resizeMode: "cover",
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={{ width: "70%" }}>
            <Text
              style={{
                color: "#11535C",
                fontFamily: "SofiaProBlack",
                fontSize: 17,
              }}
            >
              {title}
            </Text>
            <Text style={{ width: "100%" }} numberOfLines={3}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // wrapperSearchItem: {
  //   width: width - 60,
  //   // height: 100,
  //   alignSelf: "center",
  //   borderRadius: 10,
  //   backgroundColor: "#F8F8F8",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 10,
  // },

  container: {
    width: width - 40,
    // maxHeight: 100,
    borderRadius: 5,
    backgroundColor: "#F2F2F280",
    alignSelf: "center",
    paddingLeft: 18,
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
