import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import PrimaryButton from '../../components/shared/PrimaryButton';

// Images
import SuccessApricityImage from '../../images/svg/SuccessApricityImage';

const {width, height} = Dimensions.get('window');
export default function SuccessApricity({navigation, route}: any) {
  const handlePress = () => {
    if (route.params.pageFrom == 'mindhub') {
      navigation.navigate('PocketCBTIntro');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.successContainer}>
        <View style={{height: 37}} />
        <SuccessApricityImage />
        <View style={{height: 32}} />

        <Text
          style={{
            fontFamily: 'SofiaProBlack',
            fontSize: 25,
            color: '#11535C',
            marginBottom: 8,
          }}>
          {route.params.pageFrom == 'mindhub'
            ? 'Thanks for checking in!'
            : route.params.pageFrom == 'Gratitude'
            ? 'Well Done!'
            : 'Well Done!'}
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
          {route.params.pageFrom == 'mindhub'
            ? 'Keep checking in each day to get a better picture of how your moods change throughout the month'
            : route.params.pageFrom == 'Gratitude'
            ? 'Your entry is now saved!'
            : 'Thanks for registering.'}
        </Text>

        <PrimaryButton
          text={
            route.params.pageFrom == 'mindhub' ||
            route.params.pageFrom == 'Gratitude'
              ? 'Done'
              : 'Done'
          }
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      {/* <Image source={require("../../images/Clouds.png")} style={{ position: "absolute", zIndex: -1, width: width, backgroundColor: "transparent" }} /> */}
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
