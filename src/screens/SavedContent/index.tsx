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
import VideoIcon from '../../images/svg/VideoIcon';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PodcastIcon from '../../images/svg/PodcastIcon';
import TrashIcon from '../../images/svg/TrashIcon';
import { decode } from 'html-entities';

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

  const handleNavigation = async (title: string, postid: string, type: string) => {
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

      navigation.navigate("PDFViewer", { title: title, pdf: pdfLink });
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
          title: decode(title),
          details: details,
          vimeoLink: extractString(toExtract),
          video: response,
          featuredMedia: response.featured_media,
          description: decode(excerpt),
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

  const handlePodcastOrVideo = (bookmark: any) => {
    if(bookmark.type == "videos") {
      (async() => {
        const request = await fetch(`https://hub.parent-cloud.com/wp-json/wp/v2/videos/${bookmark.post_id}`);
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

  const unbookmarkItem = async (postid: string) => {
    const email = await AsyncStorage.getItem("user_email");
    const userid = await AsyncStorage.getItem("user_id");
    console.log('unbookmarking')

    const request = await fetch(`https://hub.parent-cloud.com/wp-json/swgfav/v1/unset/?mail=${email}&postid=${postid}&userid=${userid}`)
    const response = await request.json();

    if(response) {
      const newBookmarks = bookmarks.filter((bookmark: any) => bookmark.post_id !== postid);
      setBookmarks(newBookmarks);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: Dimensions.get("window").height }}>
        <BackButton text="Saved Content" />

        {/* <TagFilter /> */}
        <View style={{ height: 16 }} />

        {bookmarks.map((bookmark: any) => {
          if(bookmark.type !== "revision" && bookmark.type !== false) {
            return (
              <View style={{ height: 48, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    marginTop: 4,
                    width: width - 95,
                    height: 44,
                    borderRadius: 5,
                    backgroundColor: '#F2F2F280',
                    alignSelf: 'center',
                    paddingLeft: 16,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                  onPress={() => handleNavigation(bookmark.post_title, bookmark.post_id, bookmark.type)}
                >
                  {bookmark.type == "videos" ? handlePodcastOrVideo(bookmark) : <FileIcon />}
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Regular',
                      color: '#150E00',
                      fontSize: 16,
                      marginLeft: 10,
                    }}>
                    {bookmark.post_title.substring(0, 25) + '...'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => unbookmarkItem(bookmark.post_id)} style={{ justifyContent: "center", alignItems: "center", marginLeft: 5, width: 44, height: 44, borderRadius: 10, backgroundColor: "#F2F2F280" }}>
                  <TrashIcon />
                </TouchableOpacity>
              </View>
            );
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
