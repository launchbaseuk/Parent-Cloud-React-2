import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useAuth} from '../../contexts/auth-context';

// Components
import BackButton from '../../components/BackButton';
import SettingsCard from '../../components/SettingsCard';

// Images
import PersonalDetailsIcon from '../../icons/svg/PersonalDetailsIcon';
import MembershipIcon from '../../icons/svg/MembershipIcon';
import SavedContentIcon from '../../icons/svg/SavedContentIcon';
import SupportIcon from '../../icons/svg/SupportIcon';
import SignOutIcon from '../../icons/svg/SignOutIcon';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
export default function MyAccount() {
  const {logout} = useAuth();
  const options = [
    {
      text: 'Personal Details',
      icon: <PersonalDetailsIcon />,
      route: 'PersonalDetails',
    },
    {text: 'Membership', icon: <MembershipIcon />, route: 'Membership'},
    {text: 'Saved Content', icon: <SavedContentIcon />, route: 'SavedContent'},
    {text: 'Support', icon: <SupportIcon />, route: 'SupportSettings'},
    {text: 'Logout', icon: <SignOutIcon />, route: 'Logout'},
  ];

  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#ffffff', height: '100%'}}>
        <BackButton text="My Account" />
        <View style={{height: 40}} />

        {options.map((option: any, index: number) => {
          return (
            <SettingsCard
              text={option.text}
              icon={option.icon}
              route={option.route}
              key={index}
              logout={option.text == 'Logout' && logout}
            />
          );
        })}
      </View>
      {/* <Image source={require("../../images/Clouds.png")} style={{ position: "absolute", zIndex: -1, width: width, backgroundColor: "transparent" }} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
