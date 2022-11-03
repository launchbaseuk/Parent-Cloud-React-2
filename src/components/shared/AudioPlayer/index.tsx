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

import dings from '../../../sounds/mens-mental-fitness.mp3';

const {width, height} = Dimensions.get('window');

var ding = new Sound(dings, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }

  console.log('volume: ' + ding.getVolume());
});
Sound.setCategory('Playback');

const AudioPlayer = () => {
  const [value, setValue] = useState({
    playState: false,
    playSeconds: 0,
    duration: 0,
  });
  const [sliderEditing, setSliderEditing] = useState(false);

  // const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Refs
  const audioRef = useRef(ding);
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const {duration} = audioRef.current;

  // useEffect(() => {
  //   console.log('aaa');
  //   const timeout = setInterval(() => {
  //     if (ding && ding.isLoaded() && playstate && !sliderEditing) {
  //       ding.getCurrentTime((seconds, isPlaying) => {
  //         setValue({...value, playSeconds: seconds});
  //       });
  //     }
  //   }, 100);
  //   return () => {
  //     if (ding) {
  //       ding.release();
  //       // ding = null;
  //     }
  //     if (timeout) {
  //       clearInterval(timeout);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const play = () => {
    setIsPlaying(true);
    console.log('play');
    ding.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };
  const pause = () => {
    setIsPlaying(false);
    console.log('pauseee');
    ding.pause();
  };

  const onSliderEditStart = () => {
    setSliderEditing(true);
  };
  const onSliderEditEnd = () => {
    setSliderEditing(false);
  };
  const onSliderEditing = val => {
    console.log('aaa', val);
    // ding.setCurrentTime(val);
    setValue({...value, playSeconds: val});
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
        {/* <TouchableOpacity onPress={() => ding.setCurrentTime(0)}>
          <Replay />
        </TouchableOpacity> */}

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <TouchableOpacity onPress={() => console.log('clicked')}>
            <Image source={replay} style={styles.icon} />
          </TouchableOpacity> */}
          <View style={{width: 21}} />
          {value.playState && (
            <TouchableOpacity onPress={pause}>
              <Image source={pauseBtn} style={styles.pauseIcon} />
            </TouchableOpacity>
          )}
          {!value.playState && (
            <TouchableOpacity onPress={play}>
              <PlayIconBig />
            </TouchableOpacity>
          )}
          <View style={{width: 21}} />
          {/* <TouchableOpacity onPress={() => console.log('clicked')}>
            <Image source={forward} style={styles.icon} />
          </TouchableOpacity> */}
        </View>

        {/* <Image source={bookmark} style={styles.icon} /> */}
      </View>
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

export default AudioPlayer;
