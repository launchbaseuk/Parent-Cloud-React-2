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

const {width, height} = Dimensions.get('window');
export default function PodcastDetails({navigation, route}) {
  const {podcast, link} = route.params;

  const [author, setAuthor] = useState<any>();
  const [audio, setAudioLink] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const content = podcast.post_content.replace(/(<([^>]+)>)/gi, '');

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const data = await getNarratorDetails(podcast.post_author);
        setAuthor(data[0]);
        console.log(data);

        let audioLink = podcast.post_content.match(
          /<audio[^>]+src="?([^"\s]+)"?[^>]*>/,
        )[1];
        audioLink = audioLink.substring(audioLink.indexOf('/', 8) + 1);
        audioLink = 'https://parentcloud.borne.io/' + audioLink;

        setAudioLink(audioLink);
        setDescription(data[1].description);
        setImage(data[1].profile_image);
      })();
    }, []),
  );

  console.log(podcast);

  if (audio !== '') {
    return (
      <SafeAreaView>
        <ScrollView>
          <BackButton text="Podcast Details" />
          <View style={{height: 42}} />

          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={link ? {uri: link} : headphones}
              />
            </View>

            <View style={{width: 230, marginLeft: 8}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  color: '#11535C',
                  fontSize: 13,
                }}>
                {podcast.post_title}
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  color: '#150E00',
                  fontSize: 10,
                  lineHeight: 19.5,
                  marginTop: -80,
                }}>
                {content}
              </Text>
            </View>
          </View>

          <View style={[styles.container, {marginTop: 16}]}>
            <View style={{width: 60, height: 60}}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={image ? {uri: image} : placeholderImage}
              />
            </View>

            <View style={{width: 230, marginLeft: 8}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  color: '#11535C',
                  fontSize: 13,
                }}>
                {author ? author[0].display_name : ''}
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  color: '#150E00',
                  fontSize: 10,
                  lineHeight: 19.5,
                }}>
                {description}
              </Text>
            </View>
          </View>
          <MusicPlayer audioFile={audio} />
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return <Text>Loading....</Text>;
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
