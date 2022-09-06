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

// Components
import PrimaryButton from '../../../components/shared/PrimaryButton';

// Images
import successapricityimage from '../../../images/SuccessApricityImage.png';

type Props = {
  title: string;
  content: string;
  buttonText: string;
};

const {width, height} = Dimensions.get('window');
export default function InfoScreen({title, content, buttonText}: Props) {
  return (
    <SafeAreaView style={styles.successContainer}>
      <Image
        source={successapricityimage}
        style={{marginTop: 37, marginBottom: 32}}
      />

      <Text
        style={{
          fontFamily: 'SofiaProBlack',
          fontSize: 25,
          color: '#11535C',
          marginBottom: 8,
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

      <PrimaryButton text={buttonText} />
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
