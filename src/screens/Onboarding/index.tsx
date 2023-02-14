import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Carousel from '../../components/Carousel';
import IntroSlider from '../../components/IntroSlider';

function Onboarding({navigation}: any) {
  return (
    <View>
      {/* <Carousel navigation={navigation} /> */}
      <IntroSlider navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Onboarding;
