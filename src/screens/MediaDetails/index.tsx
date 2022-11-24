import React, {useState} from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';

// Components
import BackButton from '../../components/BackButton';

// Images
import headphones from '../../icons/headphones.png';
import placeholderImage from '../../images/PlaceholderImage.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import MusicPlayer from '../../components/shared/MusicPlayer';

const {width, height} = Dimensions.get('window');
export default function MediaDetails({navigation, route}) {
  return (
    <SafeAreaView>
      <BackButton text="Details" />
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
            Lorem ipsum
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
              color: '#150E00',
              fontSize: 10,
              lineHeight: 19.5,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            dictum enim elementum sociis facilisis. Ultrices adipiscing gravida
            pellentesque suspendisse a ornare. Nulla velit, pellentesque ipsum
            enim. Tellus mauris hac erat eu morbi urna eu nisi, lectus. Odio
            massa rhoncus iaculis lorem.
          </Text>
        </View>
      </View>

      <View style={[styles.container, {marginTop: 16}]}>
        <View style={styles.imageContainerNarrator}>
          <Image source={placeholderImage} />
        </View>

        <View style={{width: 230, marginLeft: 8}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              color: '#11535C',
              fontSize: 13,
            }}>
            Narrator Details
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
              color: '#150E00',
              fontSize: 10,
              lineHeight: 19.5,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            dictum enim elementum sociis facilisis. Ultrices adipiscing gravida
            pellentesque suspendisse a ornare. Nulla velit, pellentesque ipsum
            enim. Tellus mauris hac erat eu morbi urna eu nisi, lectus.
          </Text>
        </View>
      </View>
      <MusicPlayer />
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
  icon: {
    width: 24,
    height: 24,
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 40,
    // marginTop: 20,
    justifyContent: 'space-between',
  },
  contentView: {
    paddingLeft: 20,
  },
});
