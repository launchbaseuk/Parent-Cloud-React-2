import React from 'react';
import {View} from 'react-native';
import ForgotPassword from '../../components/auth/ForgotPassword';
import Login from '../../components/auth/Login';
import Signup from '../../components/auth/Signup';

const DusanScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ForgotPassword />
    </View>
  );
};

export default DusanScreen;
