import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';

// Components
import Home from '../../components/shared/ScreenHeaders/Home';
import ContentCard from '../../components/shared/ContentCard';
import Search from '../../components/Search';

// Images
import OneToOneImage from '../../images/svg/OneToOneImage';
import PocketCBTImage from '../../images/svg/PocketCBTImage';
import DynamicOneImage from '../../images/svg/DynamicOneImage';
import DynamicTwoImage from '../../images/svg/DynamicTwoImage';

export default function Homepage() {
  const route = useRoute();
  const constantOptions = [
    {text: 'One-to-one Sessions', image: <OneToOneImage />, screen: 'OneToOne'},
    {text: 'Pocket CBT', image: <PocketCBTImage />, screen: 'PocketCBT'},
    {
      text: 'Dynamic content #1',
      image: <DynamicOneImage />,
      screen: 'DynamicOne',
    },
    {
      text: 'Dynamic content #2',
      image: <DynamicTwoImage />,
      screen: 'DynamicTwo',
    },
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
    </SafeAreaView>
  );
}
