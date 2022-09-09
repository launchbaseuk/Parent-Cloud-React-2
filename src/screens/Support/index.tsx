import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';

// Components
import LiveSupport from '../../components/shared/ScreenHeaders/LiveSupport';
import ContentCard from '../../components/shared/ContentCard';

// Images
import onetoone from '../../images/onetoone.png';
import livetalks from '../../images/livetalkssupport.png';
import antenatalcourses from '../../images/antenatalcourses.png';
import babyclasses from '../../images/babyclasses.png';
import fertility from '../../images/fertility.png';

export default function Support() {
  const constantOptions = [
    {text: 'One-to-one Sessions', image: onetoone, screen: 'OneToOne'},
    {text: 'Live Talks', image: livetalks, screen: 'LiveTalks'},
    {text: 'Antenatal Classes', image: antenatalcourses, screen: 'Antenatal'},
    {text: 'Baby Classes', image: babyclasses, screen: 'BabyClasses'},
    {text: 'Fertility', image: fertility, screen: 'Fertility'},
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
