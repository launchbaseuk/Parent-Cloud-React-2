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

// Images
import headphones from "../../icons/headphones.png";
import PlayIconSmall from "../../icons/svg/PlayIconSmall";
import Loader from "../Loader";

const { width, height } = Dimensions.get("window");
export default function MediaListItem({
  title,
  content,
  link,
  image,
  onPress,
  id,
  item,
  idSleep,
}: any) {
  const navigation = useNavigation();
  const [imagePl, setImagePL] = useState<string | undefined>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handlePress = () => {
    if (onPress && imagePl) {
      onPress(imagePl);
    } else {
      navigation.navigate("MediaDetails", { item: item, image: imagePl });
    }
  };

  useEffect(() => {
    (async () => {
      if (id) {
        setLoading(true);
        const request = await fetch(
          `https://hub.parent-cloud.com/wp-json/wp/v2/guided_meditation/${id}`
        );
        const response = await request.json();

        if (
          typeof response.acf.image == "object" &&
          response.acf.image != null
        ) {
          console.log("image url", response.acf.image.url);
          setImagePL(response.acf.image.url);
        }
        setLoading(false);
      }
      if (idSleep) {
        setLoading(true);
        const request = await fetch(
          `https://hub.parent-cloud.com/wp-json/wp/v2/sleep_stories/${idSleep}`
        );
        const response = await request.json();

        const imageRequest = await fetch(
          `https://hub.parent-cloud.com/wp-json/wp/v2/media/${response.featured_media}`
        );
        const imageResponse = await imageRequest.json();
        if (
          typeof imageResponse.guid.rendered == "string" &&
          imageResponse.guid.rendered != null
        ) {
          console.log("image url", imageResponse.guid.rendered);
          setImagePL(imageResponse.guid.rendered);
        }

        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(image);
    if (image) setImagePL(image);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imageContainer}>
          {loading ? (
            <View style={{ position: "absolute", zIndex: 1000, top: -10 }}>
              <Loader />
            </View>
          ) : (
            <Image
              source={
                imagePl ? { uri: encodeURI(imagePl) } : link ? link : headphones
              }
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </View>

        <View style={styles.textContainer}>
          <Text
            style={{
              fontFamily: "Montserrat-Bold",
              color: "#11535C",
              fontSize: 14,
              width: "45%",
              marginBottom: 2,
            }}
          >
            {/* {title.substring(0, 50) + '...'} */}
            {title}
          </Text>
          <Text
            style={{
              width: "50%",
              fontFamily: "Montserrat-Regular",
              color: "#150E00",
              fontSize: 11,
            }}
            numberOfLines={2}
          >
            {/* {content.toString().substring(0, 50)} */}
            {content ? content : "No description."}
            {/* Lorem ipsum dolor sit amet... */}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          alignSelf: "center",
          position: "absolute",
          // bottom: 14,
          right: 14,
        }}
        onPress={handlePress}
      >
        <PlayIconSmall />
      </TouchableOpacity>
    </View>
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
    height: 70,
    borderRadius: 5,
    backgroundColor: "#11535C",
    justifyContent: "center",
    alignItems: "center",
  },
});
