import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import {getPodcasts} from '../../functions/requests';

// Components
import BackButton from '../../components/BackButton';
import MediaListItem from '../../components/MediaListItem';
import TagFilter from '../../components/TagFilter';
import {SafeAreaView} from 'react-native-safe-area-context';

import Loader from '../../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decode } from 'html-entities';

export default function Podcasts({navigation}: any) {
  const [podcasts, setPodcasts] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [selected, setSelected] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setCategories([]);
      if (selected === 'all') {
        setLoading(true);
        const response = await getPodcasts();
        setPodcasts(response);

        let responseTags: any = await fetch(
          'https://hub.parent-cloud.com/wp-json/wp/v2/tags?per_page=100',
          {
            headers: {
              Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
            },
          },
        );
        responseTags = await responseTags.json();

        let newCategories: any = [];
        responseTags.forEach((tag: any) => {
          if (
            !newCategories.some((category: any) => category.id == tag.id) &&
            response.some((video: any) => video.tags.includes(tag.id))
          ) {
            newCategories.push(tag);
          }
        });

        setCategories(
          newCategories.map((tags: any) => {
            return {
              text: tags.name,
              key: tags.id,
            };
          }),
        );
        setLoading(false);
      } else {
        setPodcasts([]);
        console.log(selected)
        let responseTags: any = await fetch(
          `https://hub.parent-cloud.com/wp-json/wp/v2/videos?tags=${selected}`,
          {
            headers: {
              Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
            },
          },
        );
        responseTags = await responseTags.json();

        console.log(responseTags)
        setPodcasts(responseTags.filter((item: any) => !item.content.rendered.includes("vimeo")));
        setLoading(false);
      }
    })();
  }, [selected]);

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Podcasts" />
        <View style={{height: 16}} />
        {loading ? (
          <Loader />
        ) : (
          <View>
            <TagFilter
              categories={categories}
              selected={selected}
              setSelected={setSelected}
            />
            <View style={{height: 16}} />

            <View style={styles.wrapper}>
              {podcasts?.map((podcast: any) => {
                // remove all <> tags from post_content
                const regex = /(<([^>]+)>)/gi;
                const result = podcast?.excerpt?.rendered
                  .replace(regex, '')
                  .trim();
                const link = encodeURI(podcast?.content?.rendered?.match(
                  /\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/,
                )[1]);
                console.log('img podcasts', link)

                return (
                  <MediaListItem
                    onPress={(imagePl: any) =>
                      navigation.navigate('PodcastDetails', {
                        podcast: podcast,
                        link: link,
                        postid: podcast?.id,
                        result: decode(result),
                        image: link
                      })
                    }
                    key={podcast?.id}
                    postid={podcast?.id}
                    image={link}
                    title={decode(podcast?.title?.rendered)}
                    content={decode(result)}
                    item={podcast}
                  />
                );
              })}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 100,
  },
});
