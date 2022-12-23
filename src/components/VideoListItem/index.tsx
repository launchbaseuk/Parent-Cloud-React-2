import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Images
import playiconyellow from '../../icons/PlayIconYellow.png';

const {width, height} = Dimensions.get('window');
export default function VideoListItem({
  key,
  text,
  description,
  image,
  details,
  vimeoLink,
  video,
  liveTalk,
}: any) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      key={key}
      style={styles.container}
      onPress={() =>
        navigation.navigate('VideoDetails', {
          title: text,
          details: details,
          vimeoLink: vimeoLink,
          video: video,
        })
      }>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imageContainer}>
          <Image
            source={liveTalk ? image : image[0].href}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              color: '#11535C',
              fontSize: 14,
              width: width - 120,
            }}>
            {text.substring(0, 30) + '...'}
          </Text>
          <Text
            style={{
              width: 200,
              fontFamily: 'Montserrat-Regular',
              color: '#150E00',
              lineHeight: 19,
              fontSize: 11,
            }}
            numberOfLines={3}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: 100,
    borderRadius: 5,
    backgroundColor: '#F2F2F280',
    alignSelf: 'center',
    marginBottom: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginLeft: 8,
    height: 100,
    justifyContent: 'center',
    marginTop: -10,
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
