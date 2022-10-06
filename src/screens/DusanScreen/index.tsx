import React from 'react';
import {View} from 'react-native';
import AudioPlayer from '../../components/shared/AudioPlayer';
import Player from '../../components/shared/Player';

const DusanScreen = () => {
  return (
    <View style={{flex: 1}}>
      <AudioPlayer />
      <Player />
    </View>
  );
};

export default DusanScreen;
