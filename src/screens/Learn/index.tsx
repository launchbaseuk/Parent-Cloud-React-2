import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';
import {GuideCardBig} from '../../components/GuideCard';

// Images
import LearnImage from '../../images/LearnImage.png';

const {width, height} = Dimensions.get('window');
export default function Learn({navigation, route}: any) {
  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Learn" />

        <GuideCardBig />
        <GuideCardBig />
        <GuideCardBig />
        <GuideCardBig />
        <GuideCardBig />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
