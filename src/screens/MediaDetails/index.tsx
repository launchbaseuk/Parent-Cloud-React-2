import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Slider} from '@rneui/themed';

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
import forward from '../../images/forward.png';
import replay from '../../images/replay.png';
import bookmark from '../../images/bookmark.png';

const {width, height} = Dimensions.get('window');
export default function MediaDetails({navigation, route}) {
  const [value, setValue] = useState(0);

  return (
    <View>
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
        <Replay />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => console.log('clicked')}>
            <Image source={replay} style={styles.icon} />
          </TouchableOpacity>
          <View style={{width: 21}} />
          <TouchableOpacity onPress={() => console.log('clicked')}>
            <PlayIconBig />
          </TouchableOpacity>
          <View style={{width: 21}} />
          <TouchableOpacity onPress={() => console.log('clicked')}>
            <Image source={forward} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Image source={bookmark} style={styles.icon} />
      </View>
      <View style={styles.contentView}>
        <View style={styles.progressBar}>
          <Text>00:00</Text>
          <View style={{width: width - 150}}>
            <Slider
              value={value}
              onValueChange={setValue}
              maximumValue={10000}
              minimumValue={0}
              step={1}
              allowTouchTrack
              trackStyle={{height: 5, backgroundColor: 'transparent'}}
              thumbStyle={{
                height: 20,
                width: 20,
                backgroundColor: 'transparent',
              }}
              thumbProps={{}}
            />
          </View>

          <Text>04:41</Text>
        </View>
      </View>
    </View>
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
