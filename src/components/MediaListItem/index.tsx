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
import headphones from '../../icons/headphones.png';
import PlayIconSmall from '../../icons/svg/PlayIconSmall';

const {width, height} = Dimensions.get('window');
export default function MediaListItem({
  title,
  content,
  link,
  image,
  onPress,
}: any) {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.navigate('MediaDetails');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imageContainer}>
          <Image
            source={link ? {uri: link} : headphones}
            style={{width: '100%', height: '100%'}}
          />
        </View>

        <View style={styles.textContainer}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              color: '#11535C',
              fontSize: 14,
              width: '45%',
              marginBottom: 2,
            }}>
            {title}
          </Text>
          <Text
            style={{
              width: 200,
              fontFamily: 'Montserrat-Regular',
              color: '#150E00',
              fontSize: 11,
            }}>
            {/* {content.toString().substring(0, 50)} */}
            {/* {content} */}
            Lorem ipsum dolor sit amet...
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          position: 'absolute',
          bottom: 14,
          right: 14,
        }}
        onPress={handlePress}>
        <PlayIconSmall />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#F2F2F280',
    alignSelf: 'center',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  textContainer: {
    marginLeft: 8,
    height: '100%',
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
