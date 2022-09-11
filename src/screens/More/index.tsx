import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import ContentCard from '../../components/shared/ContentCard';

// Components
import More from '../../components/shared/ScreenHeaders/More';

// Images
import MyAccountImage from "../../images/svg/MyAccountImage";
import HRManagerImage from '../../images/svg/HRManagerImage';

export default function MoreScreen() {
  return (
    <SafeAreaView>
      <More />
      <View style={{height: 15}} />

      <ContentCard image={<MyAccountImage />} text="My Account" route="MyAccount" />
      <ContentCard
        image={<HRManagerImage />}
        text="HR & Manager Resources"
        route="HRManagement"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
