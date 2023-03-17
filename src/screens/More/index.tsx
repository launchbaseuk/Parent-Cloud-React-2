import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import ContentCard from '../../components/shared/ContentCard';

// Components
import More from '../../components/shared/ScreenHeaders/More';

// Images
import MyAccountImage from '../../images/svg/MyAccountImage';
import HRManagerImage from '../../images/svg/HRManagerImage';

const { width, height } = Dimensions.get("window");
export default function MoreScreen() {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <More />
        <View style={{height: 15}} />

        <ContentCard
          image={<MyAccountImage />}
          text="My Account"
          route="MyAccount"
        />
        {/* <ContentCard
          image={<HRManagerImage />}
          text="HR & Manager Resources"
          route="HRManagement"
        /> */}
      </View>

      <Image source={require("../../images/Clouds.png")} style={{ position: "absolute", zIndex: -1, width: width, backgroundColor: "transparent" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',

  },
});
