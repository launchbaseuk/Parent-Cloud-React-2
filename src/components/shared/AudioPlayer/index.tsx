import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Slider, Text as TextStyled, Icon} from '@rneui/themed';

import {Switch} from '@rneui/themed';

import Replay from '../../../icons/svg/Replay';
import Backwards from '../../../icons/svg/Backwards';
import Forwards from '../../../icons/svg/Forwards';
import PlayIconBig from '../../../icons/svg/PlayIconBig';
import Queue from '../../../icons/svg/Queue';
import eclipse from '../../../images/EclipsePlayer.png';
// import PlaylistPlayer from '../../images/svg/PlaylistPlayer.svg';
// import {Sound} from 'react-native-sound';

const {width, height} = Dimensions.get('window');

const AudioPlayer = () => {
  const [value, setValue] = useState(0);

  // const Feature = ({title, onPress, buttonLabel = 'PLAY', status}) => (
  //   <View style={styles.feature}>
  //     <Header style={{flex: 1}}>{title}</Header>
  //     {status ? (
  //       <Text style={{padding: 5}}>{resultIcons[status] || ''}</Text>
  //     ) : null}
  //     <Button title={buttonLabel} onPress={onPress} />
  //   </View>
  // );

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <Search /> */}
      {/* <LiveTalks /> */}
      {/* <Player /> */}
      <Text style={styles.title}>Meditation</Text>
      <Text style={styles.desc}>Lorem ipsum...</Text>

      <Switch style={{marginTop: 30, marginBottom: 30}} />
      <View style={[styles.contentView]}>
        <View style={{alignSelf: 'center'}}>
          <Image source={eclipse} />
        </View>

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

        <View style={styles.playDashboard}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Backwards />
            <View style={{width: 21}} />
            <TouchableOpacity onPress={() => console.log()}>
              <PlayIconBig />
            </TouchableOpacity>
            <View style={{width: 21}} />
            <Forwards />
          </View>
        </View>
        <View style={styles.bottomDashboard}>
          <Replay />
          <Replay />
          <Replay />
          <Replay />
          <Replay />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginTop: 22,
    marginBottom: 8,
  },
  desc: {
    fontSize: 16,
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 40,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  playDashboard: {
    flexDirection: 'row',
    // marginTop: 32,
    backgroundColor: '#f2f2f280',
    alignSelf: 'center',
    width: width - 40,
    height: 100,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomDashboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 100,
    alignSelf: 'center',
    marginTop: 30,
  },
  contentView: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  verticalContent: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    height: 500,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  subHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default AudioPlayer;
