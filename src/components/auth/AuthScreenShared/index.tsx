import React from 'react';

import {View, ScrollView, Dimensions, Text, StyleSheet} from 'react-native';
import PrimaryButton from '../../shared/PrimaryButton';
import SecondaryButton from '../../shared/SecondaryButton';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

type Props = {
  children: React.ReactNode;
  middleText?: string;
  buttonTextTop: string;
  buttonTextBottom: string;
  routeTop: never | string;
  routeBot: never | string;
};

const AuthSharedScreen = ({
  children,
  middleText,
  buttonTextTop,
  buttonTextBottom,
  routeTop,
  routeBot,
}: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={{flexDirection: 'column'}}>
        {children}
      </ScrollView>

      <View style={{flex: 1}}>
        <PrimaryButton
          text={buttonTextTop}
          onPress={() => navigation.navigate(routeTop)}
        />
        {middleText && (
          <View style={{paddingTop: 16, paddingBottom: 16}}>
            <Text style={styles.text}>{middleText}</Text>
          </View>
        )}
        <View style={{height: 8}} />
        <SecondaryButton
          text={buttonTextBottom}
          onPress={() => navigation.navigate(routeBot)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 60,
  },
  text: {
    fontSize: 13,
    color: '#11535C',
    fontFamily: 'Montserrat-Regular',
    lineHeight: 19,
    alignSelf: 'center',
  },
});

export default AuthSharedScreen;
