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

// Components
import BackButton from "../../components/BackButton";

// Images
import headphones from "../../icons/headphones.png";
import placeholderImage from "../../images/PlaceholderImage.png";

import { useFocusEffect } from "@react-navigation/native";
import { getNarratorDetails } from "../../functions/requests";
import MusicPlayer from "../../components/shared/MusicPlayer";
import { SafeAreaView } from "react-native-safe-area-context";
import Loader from "../../components/Loader";
import { decode } from "html-entities";
import RenderHTML from "react-native-render-html";

const { width, height } = Dimensions.get("window");
export default function PodcastDetails({ navigation, route }) {
  const { item, link, image } = route.params;

  const [author, setAuthor] = useState<any>();
  const [audio, setAudioLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const content = item.excerpt.rendered.replace(/(<([^>]+)>)/gi, "");

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        // const data = await getNarratorDetails(item.post_author);
        // setAuthor(data[0]);
        // console.log(data);
        let audioLink = item.content.rendered.match(
          /<audio[^>]+controls[^>]+src="?([^"\s]+)"?[^>]*>/
        )[1];
        audioLink = audioLink.substring(audioLink.indexOf("/", 8) + 1);
        audioLink = "https://hub.parent-cloud.com/" + audioLink;
        setAudioLink(audioLink);
        // setDescription(data[1].description);
        // setImage(data[1].profile_image);
      })();
    }, [])
  );

  // console.log('miliii', link);

  if (audio !== "") {
    return (
      <SafeAreaView>
        <ScrollView>
          <BackButton text="Podcast Details" />
          <View style={{ height: 42 }} />

          <View style={styles.container}>
            <View style={styles.imageContainer}>
              {/* The image crashes the app for some reason */}
              {/* <Image
                style={{width: '100%', height: '100%'}}
                source={image ? {uri: image} : headphones}
              /> */}
            </View>

            <View style={{ width: 230, marginLeft: 8 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-Bold",
                  color: "#11535C",
                  fontSize: 13,
                }}
              >
                {item.title.rendered}
              </Text>
              <RenderHTML
                source={{ html: decode(content) }}
                baseStyle={{
                  fontFamily: "Montserrat-Regular",
                  color: "#150E00",
                  fontSize: 10,
                  lineHeight: 19.5,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              />
            </View>
          </View>
          <MusicPlayer title={item.title.rendered} audioFile={audio} />
          <View style={{ height: 102 }} />
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return <Loader />;
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8,
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
});
