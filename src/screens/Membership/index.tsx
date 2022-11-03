import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';

const {width, height} = Dimensions.get('window');
export default function Membership() {
  return (
    <SafeAreaView>
      <BackButton text="Membership" />
      <View style={{height: 32}} />

      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            color: '#150E00',
            fontSize: 16,
            width: '30%',
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
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            color: '#150E00',
            fontSize: 16,
            width: '30%',
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
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            color: '#150E00',
            fontSize: 16,
            width: '30%',
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
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            color: '#150E00',
            fontSize: 16,
            width: '30%',
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    width: width - 40,
    height: 44,
    backgroundColor: '#F2F2F280',
    alignSelf: 'center',
    marginTop: 4,
  },
});
