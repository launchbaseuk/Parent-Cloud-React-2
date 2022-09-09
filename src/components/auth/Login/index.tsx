import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Input from '../../shared/Input';
import AuthSharedScreen from '../AuthScreenShared';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <AuthSharedScreen
        middleText={'New to WellnessCloud?'}
        buttonTextTop={'Login'}
        buttonTextBottom={'Register'}
        routeTop={'ForgotPassword'}
        routeBot={'Signup'}>
        <View>
          <View>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.content}>
              Login to your Wellness Cloud account
            </Text>
          </View>
          <View style={{height: '100%', justifyContent: 'center'}}>
            <Input label="Email Address" placeholder="example@gmail.com" />
            <Input label="Password" placeholder="Minimum 6 characters" />
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </AuthSharedScreen>
    </View>
  );
};

export default Login;

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
    maxWidth: 200,
    textAlign: 'center',
    alignSelf: 'center',
  },
  forgotPassword: {
    color: '#D98E04',
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 19,
  },
});
