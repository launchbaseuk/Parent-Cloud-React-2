import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import MindHub from '../../components/shared/ScreenHeaders/MindHub';
import ContentCard from '../../components/shared/ContentCard';

// Images
import PocketCBTImage from '../../images/svg/PocketCBTImage';
import GuidedMeditation from '../../images/svg/GuidedMeditation';
import SleepStoriesImage from '../../images/svg/SleepStoriesImage';

const {width, height} = Dimensions.get('window');
export default function MindHubScreen() {
  // useEffect(() => {
  //     (async() => {
  //         await AsyncStorage.removeItem("pocketCBT");
  //     })();
  // }, [])

  return (
    <SafeAreaView>
      <MindHub />
      <View style={{height: 16}} />

      <ContentCard
        image={<GuidedMeditation />}
        text="Guided Meditation"
        route="GuidedMeditation"
      />
      <ContentCard
        image={<SleepStoriesImage />}
        text="Sleep Stories"
        route="SleepStories"
      />
      <ContentCard
        image={<PocketCBTImage />}
        text="Pocket CBT"
        route="PocketCBT"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
