import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';

// Components
import Home from '../../components/shared/ScreenHeaders/Home';
import ContentCard from '../../components/shared/ContentCard';
import Search from '../../components/Search';

// Images
import onetoone from '../../images/onetoone.png';
import pocketcbt from '../../images/pocketcbt.png';
import dynamicone from '../../images/dynamicone.png';
import dynamictwo from '../../images/dynamictwo.png';

export default function Homepage() {
  const route = useRoute();
  const constantOptions = [
    {text: 'One-to-one Sessions', image: onetoone, screen: 'OneToOne'},
    {text: 'Pocket CBT', image: pocketcbt, screen: 'PocketCBT'},
    {text: 'Dynamic content #1', image: dynamicone, screen: 'DynamicOne'},
    {text: 'Dynamic content #2', image: dynamictwo, screen: 'DynamicTwo'},
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

const styles = StyleSheet.create({});
