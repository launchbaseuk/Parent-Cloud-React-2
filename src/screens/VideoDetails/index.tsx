import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';

// Images
import headphones from '../../icons/headphones.png';
import placeholderImage from '../../images/PlaceholderImage.png';
import Replay from '../../icons/svg/Replay';
import Backwards from '../../icons/svg/Backwards';
import Forwards from '../../icons/svg/Forwards';
import PlayIconBig from '../../icons/svg/PlayIconBig';
import Queue from '../../icons/svg/Queue';
import {useFocusEffect} from '@react-navigation/native';
import {getNarratorDetails} from '../../functions/requests';

const {width, height} = Dimensions.get('window');
export default function VideoDetails({navigation, route}: any) {
  const {title, details, vimeoLink, video} = route.params;
  const videoId = vimeoLink.replace(/\&.*$/, '');
  // remove all spaces at the start of the videoId string
  let videoIdTrimmed = videoId.replace(/^\s+/, '');
  videoIdTrimmed = videoIdTrimmed.split('/');
  videoIdTrimmed = videoIdTrimmed[videoIdTrimmed.length - 1];

  const [author, setAuthor] = useState<any>();
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>('');

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const data = await getNarratorDetails(video.author);
        setAuthor(data[0][0]);

        setDescription(data[1].description);
        setImage(data[1].profile_image);
      })();
    }, []),
  );

  return (
    <SafeAreaView>
      <BackButton text="Video Details" />
      <View style={{height: 42}} />

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={headphones} />
        </View>

        <View style={{width: 230, marginLeft: 8}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              color: '#11535C',
              fontSize: 13,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
              color: '#150E00',
              fontSize: 10,
              lineHeight: 19.5,
              marginTop: -80,
              marginBottom: -20,
            }}>
            {details.replace('\n', '')}
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
            {author ? author.display_name : ''}
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

      <View
        style={{
          flexDirection: 'row',
          marginTop: 32,
          backgroundColor: '#f2f2f280',
          alignSelf: 'center',
          width: width - 40,
          height: 100,
          borderRadius: 5,
          paddingLeft: 20,
          paddingRight: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/* <Replay /> */}
        <TouchableOpacity
          style={{width: '100%'}}
          onPress={() =>
            navigation.navigate('VideoPlayer', {
              title: '',
              filepath: videoId,
            })
          }>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#c2c6c8',
              borderRadius: 10,
              width: '100%',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            {/* <Backwards /> */}
            <View style={{width: 21}} />

            <PlayIconBig />
            <View style={{width: 21}} />
            <Text style={styles.backButtonText}>Play Video</Text>
            {/* <Forwards /> */}
          </View>
        </TouchableOpacity>

        {/* <Queue /> */}
      </View>
    </SafeAreaView>
  );
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
  backButtonText: {
    marginLeft: 15,
    fontFamily: 'SofiaProBold',
    color: '#11535C',
    fontSize: 25,
  },
});
