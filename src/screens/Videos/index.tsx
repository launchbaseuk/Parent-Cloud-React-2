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
import {getVideos} from '../../functions/requests';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';
import TagFilter from '../../components/TagFilter';
import VideoListItem from '../../components/VideoListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
export default function Videos({navigation, route}: any) {
  const [videos, setVideos] = useState<any>([]);
  const [selected, setSelected] = useState<any>('all');
  const [categories, setCategories] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        if(selected == "all") {
          const response = await getVideos();
          setVideos(response);

          let responseTags: any = await fetch("https://parentcloud.borne.io/wp-json/wp/v2/tags", {
            headers: {
              "Authorization": `Bearer ${await AsyncStorage.getItem("token")}`,
            }
          });
          responseTags = await responseTags.json();

          setCategories(responseTags.map((tags: any) => {
            return {
              text: tags.name,
              key: tags.id,
            }
          }))
        } else {
          setVideos([]);
          let responseTags: any = await fetch(`https://parentcloud.borne.io/wp-json/wp/v2/videos?tags=${selected}`, {
            headers: {
              "Authorization": `Bearer ${await AsyncStorage.getItem("token")}`,
            }
          });
          responseTags = await responseTags.json();

          setVideos(responseTags.map((tags: any) => {
            return {
              post_title: tags.title.rendered,
              post_content: tags.content.rendered,
              ID: tags.id,
              post_excerpt: tags.excerpt.rendered,
              _links: tags._links,
            }
          }));
        }
      })();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Videos" />
        <View style={{height: 16}} />

        <TagFilter selected={selected} setSelected={setSelected} categories={categories} />
        <View style={{height: 16}} />

        {videos.map((video: any) => {
          // remove html from excerpt
          console.log(video._links["wp:featuredmedia"][0].href);
          const excerpt = video.excerpt.rendered.replace(/(<([^>]+)>)/gi, '');
          const details = video.content.rendered.replace(/(<([^>]+)>)/gi, '');

          // Get link inside src="" of iframe
          let vimeoLink = video.content.rendered.match(/src="([^"]+)"/);
          vimeoLink = vimeoLink[0].replace('src=', '').replace(/"/g, '');

          return (
            <VideoListItem
              text={video.title.rendered}
              description={excerpt}
              image={video._links['wp:featuredmedia']}
              vimeoLink={vimeoLink}
              details={details}
              video={video}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
