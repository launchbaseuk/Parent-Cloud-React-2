import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';
import {GuideCardBig} from '../../components/GuideCard';

export default function Guides() {
  return (
    <SafeAreaView>
      <BackButton text="Guides" />

      <View style={{height: 57}} />
      <ScrollView>
        <GuideCardBig />
        <GuideCardBig />
        <GuideCardBig />
        <GuideCardBig />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
