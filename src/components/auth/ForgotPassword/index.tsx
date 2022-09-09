import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import Input from '../../shared/Input';
import AuthSharedScreen from '../AuthScreenShared';

const ForgotPassword = () => {
  return (
    <View style={styles.wrapper}>
      <AuthSharedScreen
        buttonTextTop={'Submit'}
        buttonTextBottom={'Cancel'}
        routeTop={'EmailSent'}
        routeBot={'Login'}>
        <View>
          <View>
            <Text style={styles.title}>Forgot your password</Text>
            <Text style={styles.content}>
              Give us your details below and we'll email you a link to create a
              new password
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              paddingBottom: 160,
            }}>
            <Input label="Email Address" placeholder="example@gmail.com" />
          </View>
        </View>
      </AuthSharedScreen>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 115,
    alignItems: 'center',
  },
  title: {
    color: '#11535C',
    fontSize: 31,
    fontFamily: 'SofiaProBlack',
    textAlign: 'center',
  },
  contentWrapper: {
    width: '100%',
    alignSelf: 'center',
  },
  content: {
    fontSize: 16,
    marginTop: 8,
    fontFamily: 'Montserrat-Regular',
    color: '#150E00',
    maxWidth: 250,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
