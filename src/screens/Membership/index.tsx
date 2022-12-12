import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';

const {width, height} = Dimensions.get('window');
export default function Membership() {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <BackButton text="Membership" />
        <View style={{height: 32}} />

        <View style={styles.itemWrapper}>
          <View style={styles.insideContainer}>
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                color: '#150E00',
                fontSize: 16,
                width: '50%',
              }}>
              Membership
            </Text>
            <Text
              style={{
                fontFamily: 'SofiaProBlack',
                color: '#11535C',
                fontSize: 16,
                marginLeft: 26,
              }}>
              Corporate Plus
            </Text>
          </View>
        </View>
        <View style={styles.itemWrapper}>
          <View style={styles.insideContainer}>
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                color: '#150E00',
                fontSize: 16,
                width: '50%',
              }}>
              Subscription
            </Text>
            <Text
              style={{
                fontFamily: 'SofiaProBlack',
                color: '#11535C',
                fontSize: 16,
                marginLeft: 26,
              }}>
              Sub Account
            </Text>
          </View>
        </View>
        <View style={styles.itemWrapper}>
          <View style={styles.insideContainer}>
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                color: '#150E00',
                fontSize: 16,
                width: '50%',
              }}>
              Status
            </Text>
            <Text
              style={{
                fontFamily: 'SofiaProBlack',
                color: '#11535C',
                fontSize: 16,
                marginLeft: 26,
              }}>
              Active
            </Text>
          </View>
        </View>
        <View style={styles.itemWrapper}>
          <View style={styles.insideContainer}>
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                color: '#150E00',
                fontSize: 16,
                width: '50%',
              }}>
              Created
            </Text>
            <Text
              style={{
                fontFamily: 'SofiaProBlack',
                color: '#11535C',
                fontSize: 16,
                marginLeft: 26,
              }}>
              01/2022
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    width: width - 40,
    paddingVertical: 10,
    backgroundColor: '#F2F2F280',
    // flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 4,
  },
  wrapper: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  insideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
});
