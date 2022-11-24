// import React, {useEffect} from 'react';
import TrackPlayer, {State} from 'react-native-track-player';
// import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Slider} from '@rneui/themed';

import Sound from 'react-native-sound';

// Components
import BackButton from '../../components/BackButton';

// Images
// import headphones from '../../../icons/headphones.png';
import placeholderImage from '../../../images/PlaceholderImage.png';
import Replay from '../../../icons/svg/Replay';
import Backwards from '../../../icons/svg/Backwards';
import Forwards from '../../../icons/svg/Forwards';
import PlayIconBig from '../../../icons/svg/PlayIconBig';
import pauseBtn from '../../../images/Pause.png';
import Queue from '../../../icons/svg/Queue';
import forward from '../../../images/forward.png';
import replay from '../../../images/replay.png';
import bookmark from '../../../images/bookmark.png';
import {PlayPauseBtn} from './PlayPauseBtn';
import {Progress} from './Progress';

const {width, height} = Dimensions.get('window');

const track = {
  id: 1,
  url: require('../../../sounds/podcast.mp3'),
  title: 'FC',
};

TrackPlayer.updateOptions({
  stopWithApp: false,
  capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  compactCapabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
  ],
});

const MusicPlayer = ({audioFile}: any) => {
  console.log('filee', audioFile);

  const track2 = {
    id: 1,
    url: audioFile,
    title: 'FC',
  };

  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      // await TrackPlayer.add(track2);
      await TrackPlayer.add(audioFile ? track2 : track);
      console.log('Tracks added');
      const position = await TrackPlayer.getPosition();
      const duration = await TrackPlayer.getDuration();
      console.log(`${duration - position} seconds left.`);
    } catch (e) {
      console.log(e);
    }
  };

  const addTrack = async () => {
    try {
      await TrackPlayer.add(audioFile ? audioFile : track);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   addTrack();
  //   console.log('adding');
  // }, [audioFile]);

  useEffect(() => {
    setUpTrackPlayer();

    return () => {
      TrackPlayer.seekTo(0);
    };
  }, []);

  const skipTo = async (add?: boolean) => {
    try {
      const position = await TrackPlayer.getPosition();
      const duration = await TrackPlayer.getDuration();
      console.log(`${duration - position} seconds left.`);

      add
        ? TrackPlayer.seekTo(position + 30)
        : TrackPlayer.seekTo(position - 30);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
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
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{marginRight: 56}}
          onPress={() => TrackPlayer.seekTo(0)}>
          <Replay />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => skipTo()}>
            <Image source={replay} style={styles.icon} />
          </TouchableOpacity>
          <View style={{width: 21}} />
          <PlayPauseBtn />
          <View style={{width: 21}} />
          <TouchableOpacity onPress={() => skipTo(true)}>
            <Image source={forward} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Image source={bookmark} style={[styles.icon, {marginLeft: 56}]} />
      </View>
      <Progress live={track?.isLiveStream} />

      {/* <View style={styles.contentView}>
        <View style={styles.progressBar}>
          <Text>00:00</Text>
          <View style={{width: width - 150}}>
            <Slider
              value={value.playSeconds}
              maximumValue={value.duration}
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
              onValueChange={onSliderEditing}
              onSlidingStart={onSliderEditStart}
              onSlidingComplete={onSliderEditEnd}
            />
          </View>

          <Text>04:41</Text>
        </View>
      </View> */}
    </View>
  );
};

export default MusicPlayer;

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
  pauseIcon: {
    width: 50,
    height: 50,
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
