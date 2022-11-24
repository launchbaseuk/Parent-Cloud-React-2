import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {State, usePlaybackState} from 'react-native-track-player';
import {useDebouncedValue, useOnTogglePlayback} from '../hooks/hooks';

import PlayIconBig from '../../../../icons/svg/PlayIconBig';
import pauseBtn from '../../../../images/Pause.png';

export const PlayPauseBtn: React.FC = () => {
  const state = usePlaybackState();
  const isPlaying = state === State.Playing;
  const isLoading = useDebouncedValue(
    state === State.Connecting || state === State.Buffering,
    250,
  );

  const onTogglePlayback = useOnTogglePlayback();

  if (isLoading) {
    return (
      <View style={styles.statusContainer}>
        {isLoading && <ActivityIndicator />}
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onTogglePlayback}>
      {isPlaying ? (
        <Image source={pauseBtn} style={styles.pauseIcon} />
      ) : (
        <PlayIconBig />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playPause: {
    width: 120,
    textAlign: 'center',
  },
  statusContainer: {
    height: 40,
    width: 120,
    marginTop: 20,
    marginBottom: 60,
  },
  pauseIcon: {
    width: 50,
    height: 50,
  },
});
