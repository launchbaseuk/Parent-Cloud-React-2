import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Components
import BackButton from '../../components/BackButton';

// Images
import headphones from '../../icons/headphones.png';
import placeholderImage from '../../images/PlaceholderImage.png';

import {useFocusEffect} from '@react-navigation/native';
import {getNarratorDetails} from '../../functions/requests';
import MusicPlayer from '../../components/shared/MusicPlayer';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loader from '../../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
export default function PodcastDetails({navigation, route}) {
  const {podcast, link, postid} = route.params;

  const [author, setAuthor] = useState<any>();
  const [audio, setAudioLink] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const content = podcast.excerpt.rendered.replace(/(<([^>]+)>)/gi, '');
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        // const data = await getNarratorDetails(podcast.post_author);
        // setAuthor(data[0]);
        // console.log(data);

        let audioLink = podcast.content.rendered.match(
          /<audio[^>]+controls[^>]+src="?([^"\s]+)"?[^>]*>/,
        )[1];
        audioLink = audioLink.substring(audioLink.indexOf('/', 8) + 1);
        audioLink = 'https://hub.parent-cloud.com/' + audioLink;
        setAudioLink(audioLink);
        setDescription(data[1].description);
        setImage(data[1].profile_image);
      })();
    }, []),
  );

  useFocusEffect(
    React.useCallback(() => {
      (async() => {
        const email = await AsyncStorage.getItem("user_email");
        const request = await fetch(`https://hub.parent-cloud.com/wp-json/swgfav/v1/get/?mail=${email}`);
        const response = await request.json();

        let i = 0;
        response.forEach((fav: any) => {
          if(fav.post_id == postid) {
            setBookmarked(true);
            i = 1;
          } else if (i < 1) {
            setBookmarked(false);
          }
        })
      })();
    }, [])
  );

  const bookmarkItem = async (postid: string, posttype: string) => {
    const email = await AsyncStorage.getItem("user_email");
    const userid = await AsyncStorage.getItem("user_id");
    console.log(postid)

    // console.log(`https://parentcloud.borne.io/wp-json/swgfav/v1/set/?mail=${email}&postid=${postid}&userid=${userid}&type=${posttype}`);
    const request = await fetch(`https://hub.parent-cloud.com/wp-json/swgfav/v1/set/?mail=${email}&postid=${postid}&userid=${userid}&type=${posttype}`);
    const response = await request.json();
    console.log('bookmark added', response);
    if(response) {
      setBookmarked(true);
    }
  }

  const unbookmarkItem = async (postid: string) => {
    const email = await AsyncStorage.getItem("user_email");
    const userid = await AsyncStorage.getItem("user_id");

    const request = await fetch(`https://hub.parent-cloud.com/wp-json/swgfav/v1/unset/?mail=${email}&postid=${postid}&userid=${userid}`)
    const response = await request.json();
    if(response) {
      setBookmarked(false);
    }
  }

  console.log('miliii', link);

  if (audio !== '') {
    return (
      <SafeAreaView>
        <ScrollView>
          <BackButton text="Podcast Details" />
          <View style={{height: 42}} />

          <View style={styles.container}>
            <View style={styles.imageContainer}>
              {/* The image crashes the app for some reason */}
              <Image
                style={{width: '100%', height: '100%'}}
                source={link ? {uri: link[1]} : headphones}
              />
            </View>

            <View style={{width: 230, marginLeft: 8}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  color: '#11535C',
                  fontSize: 13,
                }}>
                {podcast.title.rendered}
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  color: '#150E00',
                  fontSize: 10,
                  lineHeight: 19.5,
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                {content}
              </Text>
            </View>
          </View>
          <MusicPlayer audioFile={audio} bookmarked={bookmarked} onPressBookmark={() => {
            if(bookmarked) {
              unbookmarkItem(postid)
            } else {
              bookmarkItem(postid, "podcasts")
            }
          }} />
          <View style={{height: 102}} />
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return <Loader />;
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 18,
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#f2f2f280',
    flexDirection: 'row',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#11535C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
