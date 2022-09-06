import React from 'react';

import {View, ScrollView, Dimensions, Text, StyleSheet} from 'react-native';
import PrimaryButton from '../../shared/PrimaryButton';
import SecondaryButton from '../../shared/SecondaryButton';

const {width, height} = Dimensions.get('window');

const AuthSharedScreen = ({children}: any) => {
  return (
    <View>
      <ScrollView contentContainerStyle={{flexDirection: 'column'}}>
        {children}
      </ScrollView>

      <View style={{flex: 1}}>
        <PrimaryButton text="Signup" />
        <View style={{paddingTop: 16, paddingBottom: 16}}>
          <Text style={styles.text}>Already have an account with us?</Text>
        </View>
        <View style={{height: 8}} />
        <SecondaryButton text="Login" />
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
  },
});

export default AuthSharedScreen;
