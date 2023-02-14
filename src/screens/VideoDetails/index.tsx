import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import BackButton from "../../components/BackButton";

// Images
import Replay from "../../icons/svg/Replay";
import Backwards from "../../icons/svg/Backwards";
import Forwards from "../../icons/svg/Forwards";
import PlayIconBig from "../../icons/svg/PlayIconBig";
import Queue from "../../icons/svg/Queue";
import { useFocusEffect } from "@react-navigation/native";
import { getNarratorDetails } from "../../functions/requests";
import Loader from "../../components/Loader";
import FastImage from "react-native-fast-image";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RenderHTML from "react-native-render-html";

const { width, height } = Dimensions.get("window");
export default function VideoDetails({ navigation, route }: any) {
  const {
    title,
    details,
    vimeoLink,
    video,
    description,
    featuredMedia,
    imageSmall,
  } = route.params;
  // const videoId = vimeoLink.replace(/\&.*$/, '');
  // remove all spaces at the start of the videoId string
  // let videoIdTrimmed = videoId.replace(/^\s+/, '');
  // videoIdTrimmed = videoIdTrimmed.split('/');
  // videoIdTrimmed = videoIdTrimmed[videoIdTrimmed.length - 1];

  const [author, setAuthor] = useState<any>();
  // const [description, setDescription] = useState<string>('');

  // useFocusEffect(
  //   React.useCallback(() => {
  //     (async () => {
  //       const data = await getNarratorDetails(video.author);
  //       setAuthor(data[0][0]);

  //       setDescription(data[1].description);
  //       setImage(data[1].profile_image);
  //     })();
  //   }, []),
  // );

  console.log("lax", details);
  console.log("jfk", description);
  console.log("media", featuredMedia);
  console.log("link", vimeoLink);
  const [image, setImage] = useState<string>("");
  const [loadingImage, setLoadingImage] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setLoadingImage(true);
      const request = await fetch(
        `https://hub.parent-cloud.com/wp-json/wp/v2/media/${featuredMedia}`,
        {
          headers: {
            Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
          },
        }
      );
      const response = await request.json();

      setImage(response.guid.rendered);
      setLoadingImage(false);
    })();
  }, [featuredMedia]);

  if (loadingImage) {
    return (
      <SafeAreaView>
        <Loader />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <ScrollView>
          <BackButton text="Video Details" />
          <View style={{ height: 42 }} />

          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: imageSmall }}
                style={{ width: "100%", height: "100%" }}
              />
            </View>

            <View style={{ width: "75%", marginLeft: 8 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-Bold",
                  color: "#11535C",
                  fontSize: 13,
                }}
              >
                {title}
              </Text>
              <RenderHTML
                source={{ html: description }}
                baseStyle={{
                  fontFamily: "Montserrat-Regular",
                  color: "#150E00",
                  fontSize: 10,
                  lineHeight: 19.5,
                  marginTop: 10,
                  marginBottom: 20,
                }}
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              marginTop: 30,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() =>
              navigation.navigate("VideoPlayer", {
                videoId: vimeoLink,
                loadingImage: loadingImage,
                poster: image,
              })
            }
          >
            <FastImage
              key={image}
              source={{ uri: image, priority: FastImage.priority.high }}
              style={{
                width: width - 40,
                height: height - height / 2,
                alignSelf: "center",
                borderRadius: 20,
                backgroundColor: "#f3f3f3",
              }}
            />
            <View style={{ position: "absolute" }}>
              <PlayIconBig />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    paddingLeft: 8,
    paddingTop: 8,
    // paddingBottom: 8,
    paddingRight: 18,
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "#f2f2f280",
    flexDirection: "row",
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: "#11535C",
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    marginLeft: 15,
    fontFamily: "SofiaProBold",
    color: "#11535C",
    fontSize: 25,
  },
  playText: {
    marginLeft: 10,
    fontFamily: "SofiaProBold",
    color: "#11535C",
    fontSize: 25,
  },
});
