import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import {getPodcasts} from '../../functions/requests';

// Components
import BackButton from '../../components/BackButton';
import MediaListItem from '../../components/MediaListItem';
import TagFilter from '../../components/TagFilter';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
export default function Podcasts({navigation, route}: any) {
  const [podcasts, setPodcasts] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [selected, setSelected] = useState<string>('all');

  useEffect(() => {
    (async () => {
      setCategories([]);
      if (selected === 'all') {
        const response = await getPodcasts();
        setPodcasts(response);

        let responseTags: any = await fetch(
          'https://parentcloud.borne.io/wp-json/wp/v2/tags',
          {
            headers: {
              Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
            },
          },
        );
        responseTags = await responseTags.json();

        setCategories(
          responseTags.map((tags: any) => {
            return {
              text: tags.name,
              key: tags.id,
            };
          }),
        );
      } else {
        setPodcasts([]);
        let responseTags: any = await fetch(
          `https://parentcloud.borne.io/wp-json/wp/v2/videos?tags=${selected}`,
          {
            headers: {
              Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
            },
          },
        );
        responseTags = await responseTags.json();

        setPodcasts(
          responseTags.map((tags: any) => {
            return {
              post_title: tags.title.rendered,
              post_content: tags.content.rendered,
              ID: tags.id,
            };
          }),
        );
      }
    })();
  }, [selected]);

  useEffect(() => {
    console.log(podcasts);
  }, [podcasts]);

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Podcasts" />
        <View style={{height: 16}} />

        <TagFilter
          categories={categories}
          selected={selected}
          setSelected={setSelected}
        />
        <View style={{height: 16}} />

        <View style={styles.wrapper}>
          {podcasts.map((podcast: any) => {
            // remove all <> tags from post_content
            const regex = /(<([^>]+)>)/gi;
            const result = podcast.post_content.replace(regex, '').trim();
            const link = podcast.post_content.match(
              /<img[^>]+src="?([^"\s]+)"?[^>]*>/,
            );

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
