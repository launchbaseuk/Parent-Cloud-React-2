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
  VirtualizedList
} from 'react-native';
import {getVideos} from '../../functions/requests';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [bookmarks, setBookmarks] = useState<any>();

  function extractString(input: string) {
    const regex = /video\/(.+)\?h/;
    const match = input.match(regex);
    if (match) {
      return match[1];
    }
    return null;
  }

  const fetchBookmarks = async () => {
    const email = await AsyncStorage.getItem("user_email");
    const request = await fetch(`https://hub.parent-cloud.com/wp-json/swgfav/v1/get/?mail=${email}`);
    const response = await request.json();

    setBookmarks(response);
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchBookmarks();
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        if (selected == 'all') {
          setLoading(true);
          const response = await getVideos();
          setVideos(response);

          let responseTags: any = await fetch(
            'https://hub.parent-cloud.com/wp-json/wp/v2/tags',
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
          setLoading(true);
          setVideos([]);
          let responseTags: any = await fetch(
            `https://hub.parent-cloud.com/wp-json/wp/v2/videos?tags=${selected}`,
            {
              headers: {
                Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
              },
            },
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
    }, [selected]),
  );

  const bookmarkItem = async (postid: string, posttype: string) => {
    const email = await AsyncStorage.getItem("user_email");
    const userid = await AsyncStorage.getItem("user_id");

    // console.log(`https://parentcloud.borne.io/wp-json/swgfav/v1/set/?mail=${email}&postid=${postid}&userid=${userid}&type=${posttype}`);
    const request = await fetch(`https://hub.parent-cloud.com/wp-json/swgfav/v1/set/?mail=${email}&postid=${postid}&userid=${userid}&type=${posttype}`);
    const response = await request.json();
    console.log('bookmark added', response);
    if(response) {
      fetchBookmarks();
    }
  }

  const unbookmarkItem = async (postid: string) => {
    const email = await AsyncStorage.getItem("user_email");
    const userid = await AsyncStorage.getItem("user_id");

    const request = await fetch(`https://hub.parent-cloud.com/wp-json/swgfav/v1/unset/?mail=${email}&postid=${postid}&userid=${userid}`)
    const response = await request.json();
    if(response) {
      fetchBookmarks();
    }
  }

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
               let excerpt = '', details = '', toExtract = '', title = '', bookmarked = false;
               if(typeof video.excerpt == "object") {
                 excerpt = video.excerpt.rendered.replace(
                   /(<([^>]+)>)/gi,
                   '',
                 );
                 details = video.content.rendered.replace(
                   /(<([^>]+)>)/gi,
                   '',
                 );
                 toExtract = video.content.rendered;
                 title = video.title.rendered;
               } else {
                 excerpt = video.post_excerpt.replace(
                   /(<([^>]+)>)/gi,
                   '',
                 );
                 details = video.post_content.replace(
                   /(<([^>]+)>)/gi,
                   '',
                 );
                 toExtract = video.post_content;
                 title = video.post_title;
               }
 
               if(bookmarks) {
                 bookmarks.forEach((bookmark: any) => {
                   if(bookmark.type === "videos") {
                     console.log(bookmark)
                     if(bookmark.post_id == video.id) {
                        bookmarked = true;
                     }
                   }
                 });
               }

               console.log(title, video.id);

              return (
                <VideoListItem
                  text={title.replace(/&[^;]*;/g, '')}
                  description={excerpt.replace(/&[^;]*;/g, '')}
                  image={video._links['wp:featuredmedia']}
                  vimeoLink={extractString(toExtract)}
                  details={details}
                  video={video}
                  bookmarked={bookmarked}
                  onPressBookmark={() => {
                    if(bookmarked) {
                      unbookmarkItem(video.id)
                    } else {
                      bookmarkItem(video.id, "videos")
                    }
                  }}
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
