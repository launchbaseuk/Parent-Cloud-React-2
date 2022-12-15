import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import { getPodcasts } from '../../functions/requests';

// Components
import BackButton from '../../components/BackButton';
import MediaListItem from '../../components/MediaListItem';
import TagFilter from '../../components/TagFilter';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');
export default function Podcasts({ navigation, route }: any) {
  const [podcasts, setPodcasts] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [selected, setSelected] = useState<string>("all");

  useEffect(() => {
    (async() => {
      setCategories([]);
      const response = await getPodcasts();
      setPodcasts(response);

      // get response.ID and fetch categories from https://parentcloud.borne.io/wp-json/wp/v2/videos/${response.ID}
      if (categories.length === 0) {
        for (let i = 0; i < response.length; i++) {
          const categoriesS = await fetch(`https://parentcloud.borne.io/wp-json/wp/v2/videos/${response[i].ID}`, {
            headers: {
              "Authorization": `Bearer ${await AsyncStorage.getItem("token")}`
            }
          });
          const data = await categoriesS.json();

          for (let j = 0; j < data.master_filter.length; j++) {
            const responseS = await fetch(`https://parentcloud.borne.io/wp-json/wp/v2/master_filter/${data.master_filter[j]}`, {
              headers: {
                "Authorization": `Bearer ${await AsyncStorage.getItem("token")}`
              }
            });
            const dataS = await responseS.json();

            // check all categories value and if dataS.id doesn't exist in any then add it
            if (categories.length === 0) {
              setCategories(prevState => [...prevState, { key: dataS.id, text: dataS.name }]);
            } else {
              let isExist = false;
              for (let k = 0; k < categories.length; k++) {
                if (categories[k].key === dataS.id) {
                  isExist = true;
                  break;
                }
              }

              if (!isExist) {
                setCategories(prevState => [...prevState, { key: dataS.id, text: dataS.name }]);
              }
            }
          }
        }
      }
    })();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Podcasts" />
        <View style={{ height: 16 }} />

        <TagFilter categories={categories} selected={selected} setSelected={setSelected} />
        <View style={{ height: 16 }} />

        <View style={styles.wrapper}>
          {podcasts.map((podcast: any) => {
            // remove all <> tags from post_content
            const regex = /(<([^>]+)>)/gi;
            const result = podcast.post_content.replace(regex, '');
            const link = podcast.post_content.match(
              /<img[^>]+src="?([^"\s]+)"?[^>]*>/,
            )[1];

            return (
              <MediaListItem
                onPress={() =>
                  navigation.navigate('PodcastDetails', {
                    podcast: podcast,
                    link: link,
                  })
                }
                key={podcast.ID}
                link={link}
                title={podcast.post_title}
                content={result}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 100,
  },
});
