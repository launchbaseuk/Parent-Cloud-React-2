import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import BackButton from '../../components/BackButton';
import PocketCBTCard from '../../components/PocketCBTCard';

// Images
import CheckInImage from '../../images/svg/CheckInImage';
import EntriesImage from '../../images/svg/EntriesImage';
import GratitudeImage from '../../images/svg/GratitudeImage';
import LearnImage from '../../images/svg/LearnImage';

export default function PocketCBT() {
  return (
    <View style={styles.container}>
      <BackButton text={'Pocket CBT'} />

      <View style={{height: 32}} />

      <PocketCBTCard
        text="Check-in"
        image={<CheckInImage />}
        route="FeelingsCBT"
      />
      <PocketCBTCard text="Learn" image={<LearnImage />} route="Learn" />
      <PocketCBTCard
        text="Gratitude Diary"
        image={<GratitudeImage />}
        route="Gratitude"
      />
      <PocketCBTCard
        text="Entries Log"
        image={<EntriesImage />}
        route="MoodTracker"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
