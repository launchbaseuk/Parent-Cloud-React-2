import React from 'react';
import {View} from 'react-native';
import EmailSent from '../../components/auth/EmailSent';
import ForgotPassword from '../../components/auth/ForgotPassword';
import Login from '../../components/auth/Login';
import Signup from '../../components/auth/Signup';
import Calendar from '../../components/Calendar';
import OnetooneSessions from '../OnetooneSessions';

const DusanScreen = () => {
  return (
    <View style={{flex: 1}}>
      <OnetooneSessions />
    </View>
  );
};

export default DusanScreen;
