import React from 'react';

import Slider from '@react-native-community/slider';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import TrackPlayer, {useProgress} from 'react-native-track-player';

const {width, height} = Dimensions.get('window');

export const Progress: React.FC<{live?: boolean}> = ({live}) => {
  const progress = useProgress();
  return live ? (
    <View style={styles.liveContainer}>
      <Text style={styles.liveText}>Live Stream</Text>
    </View>
  ) : (
    <View style={styles.progress}>
      <Slider
        style={styles.container}
        value={progress.position}
        minimumValue={0}
        maximumValue={progress.duration}
        thumbTintColor="#11535C"
        minimumTrackTintColor="#11535C"
        maximumTrackTintColor="#FFFFFF"
        onSlidingComplete={TrackPlayer.seekTo}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>
          {new Date(progress.position * 1000).toISOString().slice(14, 19)}
        </Text>
        <Text style={styles.labelText}>
          {new Date((progress.duration - progress.position) * 1000)
            .toISOString()
            .slice(14, 19)}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  progress: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  liveContainer: {
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
  },
  liveText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
  },
  container: {
    height: 40,
    width: width - 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    width: 370,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    color: 'black',
    fontVariant: ['tabular-nums'],
  },
});

// progressBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: width - 40,
//     // marginTop: 20,
//     justifyContent: 'space-between',
//   },
