import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import Input from '../../shared/Input';
import AuthSharedScreen from '../AuthScreenShared';

const Signup = () => {
  return (
    <View style={styles.wrapper}>
      <AuthSharedScreen>
        <View>
          <View>
            <Text style={styles.title}>Signup</Text>
            <Text style={styles.content}>
              Create a new Wellness Cloud account.
            </Text>
          </View>
          <View style={{height: '100%', justifyContent: 'center'}}>
            <Input label="Email Address" placeholder="example@gmail.com" />
            <Input label="Password" placeholder="Minimum 6 characters" />
            <Input label="Repeat Password" placeholder="Must match the above" />
          </View>
        </View>
      </AuthSharedScreen>
    </View>
  );
};

export default Signup;

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
});
