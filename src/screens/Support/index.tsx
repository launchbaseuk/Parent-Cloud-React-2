import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions, SafeAreaView} from 'react-native';
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

const { width, height } = Dimensions.get("window");
export default function Support() {
  const constantOptions = [
    {text: 'One-to-One Sessions', image: <OneToOneImage />, screen: 'OneToOne'},
    {text: 'Live Talks', image: <LiveTalksImage />, screen: 'LiveTalks'},
    {
      text: 'Parent Cloud Classes',
      image: <AntenatalCoursesImage />,
      screen: 'Antenatal',
    },
    // {text: 'Baby Classes', image: <BabyClassesImage />, screen: 'BabyClasses'},
    // {text: 'Fertility', image: <FertilityImage />, screen: 'Fertility'},
  ];

  return (
    <SafeAreaView>
      <LiveSupport />
      <View style={{height: 16}} />
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
      <Image source={require("../../images/Clouds.png")} style={{ position: "absolute", zIndex: -1, width: width, backgroundColor: "transparent" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
