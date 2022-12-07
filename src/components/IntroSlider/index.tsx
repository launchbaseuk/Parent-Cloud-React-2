import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  Text,
} from 'react-native';

const {width, height} = Dimensions.get('window');

import AsyncStorage from '@react-native-async-storage/async-storage';

import Images from './images';
import PrimaryButton from '../shared/PrimaryButton';
import SecondaryButton from '../shared/SecondaryButton';

const IntroSlider = ({navigation}) => {
  const [sliderState, setSliderState] = useState({currentPage: 0});

  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const {currentPage: pageIndex} = sliderState;

  const handleLogin = async () => {
    await AsyncStorage.setItem('onboarded', 'true');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.intro_slider_wrapper}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          // style={{flex: 2}}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={event => {
            setSliderPage(event);
          }}>
          <View style={{width, height}}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 64,
                width: width,
                height: '100%',
              }}>
              <Images imageNumber={0} />
              <Text
                style={{
                  color: '#11535C',
                  fontSize: 27,
                  fontFamily: 'SofiaProBlack',
                }}>
                One-to-One Sessions
              </Text>
              <Text
                style={{
                  width: 298,
                  marginTop: 10,
                  textAlign: 'center',
                  fontSize: 15,
                  lineHeight: 24,
                  fontFamily: 'Montserrat-Regular',
                }}>
                Book an online consultation with our experienced specialists for
                help with lots of issues, from counselling to nutrition
              </Text>
            </View>
          </View>
          <View style={{width, height}}>
            <View style={{alignItems: 'center', marginTop: 64, width: width}}>
              <Images imageNumber={1} />
              <Text
                style={{
                  fontFamily: 'SofiaProBlack',
                  color: '#11535C',
                  fontSize: 27,
                }}>
                Mind Hub
              </Text>
              <Text
                style={{
                  width: 298,
                  textAlign: 'center',
                  fontSize: 15,
                  lineHeight: 24,
                  fontFamily: 'Montserrat-Regular',
                }}>
                Manage your mental wellbeing with Pocket CBT, guided
                meditations, sleep stories and mental health content
              </Text>
            </View>
          </View>
          <View style={{width, height}}>
            <View style={{alignItems: 'center', marginTop: 64, width: width}}>
              <Images imageNumber={2} />
              <Text
                style={{
                  fontFamily: 'SofiaProBlack',
                  color: '#11535C',
                  fontSize: 27,
                }}>
                Live Talks & Podcasts
              </Text>
              <Text
                style={{
                  width: 298,
                  textAlign: 'center',
                  fontSize: 15,
                  lineHeight: 24,
                  fontFamily: 'Montserrat-Regular',
                }}>
                Tune into our upcoming health and wellbeing Live Talks and
                listen to all our latest expert podcasts
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.pagination_wrapper}>
          {Array.from(Array(3).keys()).map((key, index) => (
            <View
              style={[
                styles.pagination_dots,
                {
                  backgroundColor: pageIndex === index ? '#11535C' : '#FFFAC5',
                  width: pageIndex === index ? 20 : 10,
                },
              ]}
              key={index}
            />
          ))}
        </View>
        <View style={styles.buttons}>
          <PrimaryButton
            text="Signup"
            onPress={() => navigation.navigate('Signup')}
          />
          <View style={{height: 8}} />
          <SecondaryButton text="Login" onPress={handleLogin} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  intro_slider_wrapper: {
    // flex: 1,
    // alignItems: 'center',
    // width: '100%',
    // paddingHorizontal: 24,
    // backgroundColor: '#231F20',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  pagination_wrapper: {
    position: 'absolute',
    bottom: height / 3,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // flex: 4,
  },
  pagination_dots: {
    // height: 6,
    // width: 6,
    // borderRadius: 10 / 2,
    height: 10,
    borderRadius: 360,
    marginLeft: 10,
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 80,
    alignItems: 'center',
  },
});
