import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";

// Components
import BackButton from "../../components/BackButton";
import MediaListItem from "../../components/MediaListItem";
import { getGuidedMeditation } from "../../functions/requests";

import Loader from "../../components/Loader";
import TagFilter from "../../components/TagFilter";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function GuidedMeditation({ navigation }: any) {
  const [items, setItems] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<any>([]);
  const [selected, setSelected] = useState<string>("all");

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        setLoading(true);
        const response = await getGuidedMeditation();
        setItems(response);
        setLoading(false);
      })();
    }, [])
  );

  useEffect(() => {
    (async () => {
      setItems([]);
      if (selected == "all") {
        setLoading(true);
        const response = await getGuidedMeditation();
        setItems(response);

        let responseTags: any = await fetch(
          "https://hub.parent-cloud.com/wp-json/wp/v2/tags?taxonomy=post_tag&post_type=guided_meditation",
          {
            headers: {
              Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
            },
          }
        );
        responseTags = await responseTags.json();

        let newCategories: any = [],
          newCatsLength: number = 0;
        responseTags.forEach((tag: any) => {
          let isTagInCategories = false;
          for (let i = 0; i < items.length; i++) {
            if (items[i].categories.includes(tag.id)) {
              isTagInCategories = true;
              break;
            }
          }
          if (!isTagInCategories) {
            newCategories.forEach((category: any) => {
              if (category.id == tag.id) {
                newCatsLength++;
              }
            });
            if (!(newCatsLength > 0)) {
              newCategories.push(tag);
            }
          }
        });

        setCategories(
          newCategories.map((tags: any) => {
            return {
              text: tags.name,
              key: tags.id,
            };
          })
        );
        setLoading(false);
      } else {
        setItems([]);
        setLoading(true);
        let responseTags: any = await fetch(
          `https://hub.parent-cloud.com/wp-json/wp/v2/guided_meditation?tags=${selected}`,
          {
            headers: {
              Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
            },
          }
        );
        responseTags = await responseTags.json();

        setItems(
          responseTags.map((tags: any) => {
            return tags;
          })
        );
        setLoading(false);
      }
    })();
  }, [selected]);

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Guided Meditation" />
        {/* <View style={{height: 20}} /> */}

        <TagFilter
          categories={categories}
          selected={selected}
          setSelected={setSelected}
        />
        <View style={{ height: 16 }} />

        {loading ? (
          <Loader />
        ) : (
          <View>
            {items.length > 0 ? (
              items.map((item: any) => {
                return (
                  <MediaListItem
                    item={item}
                    onPress={(image: any) =>
                      navigation.navigate("PodcastDetails", {
                        podcast: item,
                        image: image,
                        excerpt: item.excerpt.rendered.replace(
                          /<[^>]*>?/gm,
                          ""
                        ),
                        titlePage: "Meditation Details",
                      })
                    }
                    title={item.title.rendered}
                    content={item.excerpt.rendered.replace(/<[^>]*>?/gm, "")}
                    id={item.id}
                  />
                );
              })
            ) : (
              <Text
                style={{
                  alignSelf: "center",
                  fontFamily: "SofiaProBlack",
                  color: "#11535C",
                  fontSize: 18,
                }}
              >
                No Content For This Filter
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
