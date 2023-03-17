import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView, Image, Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';

// Components
import Home from '../../components/shared/ScreenHeaders/Home';
import ContentCard from '../../components/shared/ContentCard';
import Search from '../../components/Search';

// Images
import OneToOneImage from '../../images/svg/OneToOneImage';
import PocketCBTImage from '../../images/svg/PocketCBTImage';
import LiveTalksImage from '../../images/svg/LiveTalksImage';
import PodcastsImage from '../../images/svg/PodcastsImage';
import AppBackground from '../../images/svg/AppBackground';

const { width, height } = Dimensions.get("window");
export default function Homepage() {
  const constantOptions = [
    {text: 'One-to-One Sessions', image: <OneToOneImage />, screen: 'OneToOne'},
    {text: 'Pocket CBT', image: <PocketCBTImage />, screen: 'PocketCBT'},
    {text: 'Live Talks', image: <LiveTalksImage />, screen: 'LiveTalks'},
    {text: 'Podcasts', image: <PodcastsImage />, screen: 'Podcasts'},
  ];

  return (
    <SafeAreaView>
      <Home />
      <Search />
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
