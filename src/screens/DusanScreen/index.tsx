import React from 'react';
import {View} from 'react-native';
import EmailSent from '../../components/auth/EmailSent';
import ForgotPassword from '../../components/auth/ForgotPassword';
import Login from '../../components/auth/Login';
import Signup from '../../components/auth/Signup';
import Calendar from '../../components/Calendar';
import Search from '../../screens/Search';
import LiveTalks from '../LiveTalks';
import OnetooneSessions from '../OnetooneSessions';
import Payment from '../Payment';
import RedeemCode from '../RedeemCode';

const DusanScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Search />
      {/* <LiveTalks /> */}
    </View>
  );
};

export default DusanScreen;
