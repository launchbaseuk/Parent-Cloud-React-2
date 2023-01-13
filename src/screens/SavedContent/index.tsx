import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';
import TagFilter from '../../components/TagFilter';

// Images
import FileIcon from '../../icons/svg/FileIcon';
import LinkIcon from '../../icons/svg/LinkIcon';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PodcastIcon from '../../images/svg/PodcastIcon';
import VideoIcon from '../../images/svg/VideoIcon';

const { width, height } = Dimensions.get('window');
export default function SavedContent() {
  const navigation = useNavigation();
  const [bookmarks, setBookmarks] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const email = await AsyncStorage.getItem("user_email");
        const request = await fetch(`https://hub.parent-cloud.com/wp-json/swgfav/v1/get/?mail=${email}`);
        const response = await request.json();

        setBookmarks(response);
      })();
    }, [])
  );

  function extractString(input: string) {
    const regex = /video\/(.+)\?h/;
    const match = input.match(regex);
    if (match) {
      return match[1];
    }
    return null;
  }

  const handlePodcastOrVideo = (bookmark: any) => {
    if(bookmark.type == "videos") {
      (async() => {
        const request = await fetch(`https://hub.the-wellness-cloud.com/wp-json/wp/v2/videos/${bookmark.post_id}`);
        const response = await request.json();

        if(typeof response.content !== undefined) {
          if(!response.content.rendered.includes(".mp3")) {
            return <PodcastIcon />
          }
        }
      })();
    }

    return <VideoIcon />
  }

  const handleNavigation = async (postid: string, type: string) => {
    if (type == "guides") {
      console.log(postid)
      let pdfLink = "";
      const request = await fetch(`https://hub.parent-cloud.com/wp-json/wp/v2/guides/${postid}`);
      const response = await request.json();

      if (response._links["wp:attachment"][0].href) {
        const request = await fetch(response._links["wp:attachment"][0].href);
        const data = await request.json();
        for (let k = 0; k < data.length; k++) {
          if (data[k].guid.rendered.endsWith('.pdf')) {
            let link = data[k].guid.rendered;

            pdfLink = link;
            break;
          }
        }
      }

      pdfLink = 'https://hub.parent-cloud.com/' + pdfLink.split('/').slice(3).join('/');

      navigation.navigate("PDFViewer", { pdf: pdfLink });
    } else if (type == "videos") {
      const request = await fetch(`https://hub.parent-cloud.com/wp-json/wp/v2/videos/${postid}`);
      const response = await request.json();

      let excerpt = '', details = '', toExtract = '', title = '', bookmarked = false;
      if (typeof response.excerpt == "object") {
        excerpt = response.excerpt.rendered.replace(
          /(<([^>]+)>)/gi,
          '',
        );
        details = response.content.rendered.replace(
          /(<([^>]+)>)/gi,
          '',
        );
        toExtract = response.content.rendered;
        title = response.title.rendered;
      } else {
        excerpt = response.post_excerpt.replace(
          /(<([^>]+)>)/gi,
          '',
        );
        details = response.post_content.replace(
          /(<([^>]+)>)/gi,
          '',
        );
        toExtract = response.post_content;
        title = response.post_title;
      }

      if(extractString(toExtract) != null) {
        navigation.navigate('VideoDetails', {
          title: title.replace(/&[^;]*;/g, ''),
          details: details,
          vimeoLink: extractString(toExtract),
          video: response,
          featuredMedia: response.featured_media,
          description: excerpt.replace(/&[^;]*;/g, ''),
          bookmarked: bookmarked
        })
      } else {
        navigation.navigate('PodcastDetails', {
          podcast: response,
          postid: response.id,
          bookmarked: bookmarked
        })
      }
    }
  }

  return (
    <SafeAreaView>
      <BackButton text="Saved Content" />

      {/* <TagFilter /> */}
      <View style={{ height: 16 }} />

      {bookmarks.map((bookmark: any) => {
        if(bookmark.type !== "revision" && bookmark.type !== false) {
        return (
          <TouchableOpacity
            style={{
              marginTop: 4,
                width: width - 40,
                height: 44,
                borderRadius: 5,
                backgroundColor: '#F2F2F280',
                alignSelf: 'center',
                paddingLeft: 16,
                alignItems: 'center',
                flexDirection: 'row',
              }}
              onPress={() => handleNavigation(bookmark.post_id, bookmark.type)}
            >
              {bookmark.type == "videos" ? handlePodcastOrVideo(bookmark) : <FileIcon />}
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  color: '#150E00',
                  fontSize: 16,
                  marginLeft: 10,
                }}>
                {bookmark.post_title.substring(0, 30) + '...'}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
      {/* {Array.from({length: 7}).map((_, index) => {
        return (
          <View
            style={{
              marginTop: 4,
              width: width - 40,
              height: 44,
              borderRadius: 5,
              backgroundColor: '#F2F2F280',
              alignSelf: 'center',
              paddingLeft: 16,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <FileIcon />
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                color: '#150E00',
                fontSize: 16,
                marginLeft: 10,
              }}>
              PDF Title...
            </Text>
          </View>
        );
      })} */}
      <View style={{ height: 16 }} />
      {/* {Array.from({length: 3}).map((_, index) => {
        return (
          <View
            style={{
              marginTop: 4,
              width: width - 40,
              height: 44,
              borderRadius: 5,
              backgroundColor: '#F2F2F280',
              alignSelf: 'center',
              paddingLeft: 16,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <LinkIcon />
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                color: '#150E00',
                fontSize: 16,
                marginLeft: 10,
              }}>
              01/02/1234 - 12:34
            </Text>
          </View>
        );
      })} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
