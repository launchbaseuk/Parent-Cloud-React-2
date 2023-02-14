import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';
import {GuideCardBig} from '../../components/GuideCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function Guides({navigation, route}: any) {
  const {items} = route.params;
  // console.log(items.map(item => console.log(item.excerpt)));
  const [bookmarks, setBookmarks] = useState<any>([]);

  const fetchBookmarks = async () => {
    const email = await AsyncStorage.getItem("user_email");
    const request = await fetch(`https://hub.parent-cloud.com/wp-json/swgfav/v1/get/?mail=${email}`);
    const response = await request.json();
    console.log(response)
    setBookmarks(response);
  }

  const bookmarkItem = async (postid: string, posttype: string) => {
    const email = await AsyncStorage.getItem("user_email");
    const userid = await AsyncStorage.getItem("user_id");
    console.log('bookmarking')

    // console.log(`https://parentcloud.borne.io/wp-json/swgfav/v1/set/?mail=${email}&postid=${postid}&userid=${userid}&type=${posttype}`);
    const request = await fetch(`https://hub.parent-cloud.com/wp-json/swgfav/v1/set/?mail=${email}&postid=${postid}&userid=${userid}&type=${posttype}`);
    const response = await request.json();

    if(response) {
      fetchBookmarks();
    }
  }

  const unbookmarkItem = async (postid: string) => {
    const email = await AsyncStorage.getItem("user_email");
    const userid = await AsyncStorage.getItem("user_id");
    console.log('unbookmarking')

    const request = await fetch(`https://hub.parent-cloud.com/wp-json/swgfav/v1/unset/?mail=${email}&postid=${postid}&userid=${userid}`)
    const response = await request.json();

    if(response) {
      fetchBookmarks();
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchBookmarks();
    }, [])
  )
  
  return (
    <SafeAreaView>
      <BackButton text="Guides" />

      <View style={{height: 57}} />
      <ScrollView contentContainerStyle={{ paddingBottom: 110 }}>
        {items.map((item: any) => {
          let bookmarked = false;

          if(bookmarks) {
            bookmarks.forEach((bookmark: any) => {
              console.log("bookmark", bookmark.post_id, bookmark.type)
              if(bookmark.type === "guides") {
                console.log('bookmark exists')
                if(bookmark.post_id == item.id) {
                  bookmarked = true;
                }
              }
            });
          }

          if (item.title.rendered && item.excerpt.rendered) {
            return (
              <GuideCardBig
                title={item.title.rendered}
                excerpt={item.excerpt.rendered.replace(/<[^>]+>/g, '')}
                redirect={item.content}
                fileLink={item.fileLink}
                postid={item.id}
                bookmarked={bookmarked}
                onPressBookmark={() => {
                  if(bookmarked) {
                    unbookmarkItem(item.id);
                  } else {
                    bookmarkItem(item.id, "guides");
                  }
                }}
              />
            );
          } else {
            return (
              <GuideCardBig
                title={item.title}
                excerpt={item.excerpt}
                redirect={item.content}
                fileLink={item.fileLink}
                postid={item.id}
                bookmarked={bookmarked}
                onPressBookmark={() => {
                  if(bookmarked) {
                    unbookmarkItem(item.id);
                  } else {
                    bookmarkItem(item.id, "guides");
                  }
                }}
              />
            );
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
