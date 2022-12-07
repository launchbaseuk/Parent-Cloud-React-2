import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';

// Components
import LiveSupport from '../../components/shared/ScreenHeaders/LiveSupport';
import ContentCard from '../../components/shared/ContentCard';

// Images
import OneToOneImage from '../../images/svg/OneToOneImage';
import LiveTalksImage from '../../images/svg/LiveTalksImage';
import AntenatalCoursesImage from '../../images/svg/AntenatalCoursesImage';
import BabyClassesImage from '../../images/svg/BabyClassesImage';
import FertilityImage from '../../images/svg/FertilityImage';

export default function Support() {
  const constantOptions = [
    {text: 'One-to-One Sessions', image: <OneToOneImage />, screen: 'OneToOne'},
    {text: 'Live Talks', image: <LiveTalksImage />, screen: 'LiveTalks'},
    {
      text: 'Antenatal Classes',
      image: <AntenatalCoursesImage />,
      screen: 'Antenatal',
    },
    {text: 'Baby Classes', image: <BabyClassesImage />, screen: 'BabyClasses'},
    // {text: 'Fertility', image: <FertilityImage />, screen: 'Fertility'},
  ];

  return (
    <SafeAreaView>
      <LiveSupport />
      {constantOptions.map((option, index) => {
        return (
          <ContentCard
            key={index}
            text={option.text}
            image={option.image}
            route={option.screen}
          />
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
