import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import {getPodcasts} from '../../functions/requests';

// Components
import BackButton from '../../components/BackButton';
import MediaListItem from '../../components/MediaListItem';
import TagFilter from '../../components/TagFilter';
import {SafeAreaView} from 'react-native-safe-area-context';

import Loader from '../../components/Loader';

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
          'https://hub.the-wellness-cloud.com/wp-json/wp/v2/tags',
          // {
          //   headers: {
          //     Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
          //   },
          // },
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
        setLoading(false);
      } else {
        setPodcasts([]);
        let responseTags: any = await fetch(
          `https://hub.the-wellness-cloud.com/wp-json/wp/v2/videos?tags=${selected}`,
          // {
          //   headers: {
          //     Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
          //   },
          // },
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
                const link = podcast?.content?.rendered?.match(
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
                    key={podcast?.ID}
                    link={link}
                    title={podcast?.title?.rendered}
                    content={result}
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
