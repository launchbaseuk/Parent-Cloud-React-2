import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';
import BackButton from '../../components/BackButton';
import ListItem from '../../components/ListItem';
import TagFilter from '../../components/TagFilter';

// Image
// import listitemimage from '../../images/ListItemImage.png';

const { width, height } = Dimensions.get("window");
export default function Antenatal() {
  return (
    <SafeAreaView style={{flex: 1, paddingBottom: 20}}>
      <BackButton text={'Antenatal Classes'} />

      <WebView
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        style={{width: width, flex: 1}}
        source={{uri: 'https://parentcloudandwellnesscloud.as.me/schedule.php?appointmentType=category%3AAntenatal+Course'}}
        automaticallyAdjustContentInsets={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
