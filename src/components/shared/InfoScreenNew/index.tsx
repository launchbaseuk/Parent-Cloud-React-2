import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import PrimaryButton from '../PrimaryButton';

// Images
import WarningAuthImage from '../../../images/svg/WarningAuthImage';
import SecondaryButton from '../SecondaryButton';

type Props = {
  title: string;
  content: string;
  buttonText: string;
  buttonTextSecond: string;
  route: never | string;
};

const {width, height} = Dimensions.get('window');
export default function InfoScreenNew({
  title,
  content,
  buttonText,
  route,
  buttonTextSecond,
}: Props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.successContainer}>
      <View style={{height: 37}} />
      <WarningAuthImage />
      <View style={{height: 32}} />

      <Text
        style={{
          fontFamily: 'SofiaProBlack',
          fontSize: 25,
          color: '#11535C',
          marginBottom: 8,
          textAlign: 'center',
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: 'Montserrat-Regular',
          fontSize: 16,
          color: '#11535C',
          marginBottom: 64,
          width: 311,
          textAlign: 'center',
        }}>
        {content}
      </Text>

      <PrimaryButton
        text={buttonText}
        onPress={() => navigation.navigate(route)}
      />
      <View style={{height: 8}} />
      <SecondaryButton
        text={buttonTextSecond}
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  successContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
