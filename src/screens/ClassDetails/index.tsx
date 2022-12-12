import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import PrimaryButton from '../../components/shared/PrimaryButton';
import SecondaryButton from '../../components/shared/SecondaryButton';

// Images
import zoomicon from '../../images/ZoomIcon.png';

const {width, height} = Dimensions.get('window');
export default function ClassDetails() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: '100%',
      }}>
      <View style={styles.img}>
        <Image source={zoomicon} style={{alignSelf: 'center'}} />
      </View>

      <View style={styles.text}>
        <Text style={styles.title}>Classes details...</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
          faucibus ipsum non malesuada dolor, ultrices dictumst pellentesque et.
          Bibendum sit velit enim aliquam. Eu arcu tristique odio orci, praesent
          enim. Fames tempus libero massa mattis a cras consequat nisi.
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: width - 40,
          justifyContent: 'space-evenly',
        }}>
        <SecondaryButton
          size="small"
          text="Back"
          onPress={() => navigation.goBack()}
        />
        <PrimaryButton
          size="small"
          text="Register"
          onPress={() => navigation.navigate('SuccessApricity')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    width: width - 40,
    backgroundColor: '#F2F2F280',
    padding: 16,
    marginBottom: 32,
  },
  title: {
    color: '#00084B',
    fontFamily: 'SofiaProBlack',
    fontSize: 20,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    color: '#150E00',
    fontSize: 16,
    marginTop: 8,
    paddingBottom: 47,
  },
  img: {
    width: width - 40,
    marginBottom: 16,
    backgroundColor: '#F2F2F280',
    paddingVertical: 32,
  },
});
