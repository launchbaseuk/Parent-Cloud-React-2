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
  Image,
} from 'react-native';
import {getVideos} from '../../functions/requests';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';
import TagFilter from '../../components/TagFilter';
import VideoListItem from '../../components/VideoListItem';
import Loader from '../../components/Loader';

export default function Videos({navigation, route}: any) {
  const [videos, setVideos] = useState<any>([]);
  const [selected, setSelected] = useState<any>('all');
  const [categories, setCategories] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function extractString(input: string) {
    const regex = /video\/(.+)\?h/;
    const match = input.match(regex);
    if (match) {
      return match[1];
    }
    return null;
  }

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        if (selected == 'all') {
          setLoading(true);
          const response = await getVideos();
          setVideos(response);

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
          setVideos([]);
          let responseTags: any = await fetch(
            `https://hub.the-wellness-cloud.com/wp-json/wp/v2/videos?tags=${selected}`,
            // {
            //   headers: {
            //     Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
            //   },
            // },
          );
          responseTags = await responseTags.json();

          setVideos(
            responseTags.map((tags: any) => {
              return {
                post_title: tags.title.rendered,
                post_content: tags.content.rendered,
                ID: tags.id,
                post_excerpt: tags.excerpt.rendered,
                _links: tags._links,
              };
            }),
          );

          setLoading(false);
        }
      })();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Videos" />
        {loading ? (
          <Loader />
        ) : (
          <View>
            <View style={{height: 16}} />

            <TagFilter
              selected={selected}
              setSelected={setSelected}
              categories={categories}
            />
            <View style={{height: 16}} />

            {videos.map((video: any) => {
              // remove html from excerpt
              console.log(video._links['wp:featuredmedia'][0].href);
              const excerpt = video.excerpt.rendered.replace(
                /(<([^>]+)>)/gi,
                '',
              );
              const details = video.content.rendered.replace(
                /(<([^>]+)>)/gi,
                '',
              );

              return (
                <VideoListItem
                  text={video.title.rendered}
                  description={excerpt}
                  image={video._links['wp:featuredmedia']}
                  vimeoLink={extractString(video.content.rendered)}
                  details={details}
                  video={video}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
