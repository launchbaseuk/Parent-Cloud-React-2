import React from 'react';
import {View} from 'react-native';
import EmailSent from '../../components/auth/EmailSent';
import ForgotPassword from '../../components/auth/ForgotPassword';
import Login from '../../components/auth/Login';
import Signup from '../../components/auth/Signup';
import Calendar from '../../components/Calendar';
import OnetooneSessions from '../OnetooneSessions';
import Payment from '../Payment';
import RedeemCode from '../RedeemCode';

const DusanScreen = () => {
  return (
    <View style={{flex: 1}}>
      <RedeemCode />
    </View>
  );
};

export default DusanScreen;
