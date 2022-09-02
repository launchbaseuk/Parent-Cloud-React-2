import React from 'react';
import { View, Text } from 'react-native';
import ContentCard from '../../components/shared/ContentCard';
import Input from '../../components/shared/Input';
import PrimaryButton from '../../components/shared/PrimaryButton';
import Home from '../../components/shared/ScreenHeaders/Home';
import LiveSupport from '../../components/shared/ScreenHeaders/LiveSupport';
import Media from '../../components/shared/ScreenHeaders/Media';
import MindHub from '../../components/shared/ScreenHeaders/MindHub';
import More from '../../components/shared/ScreenHeaders/More';
import SecondaryButton from '../../components/shared/SecondaryButton';
import TabBar from "../../components/TabBar";
import Onboarding from '../Onboarding';

// Images
import myaccount from "../../images/myaccount.png";

const MariosScreen = () => {
  return <View>
    <Text>Test</Text>
    {/* <TabBar /> OK FOR NOW */} 
    {/* <PrimaryButton text="Download" /> OK FOR NOW */}
    {/* <SecondaryButton text="Download" size="mini" /> OK FOR NOW */}
    {/* <Onboarding /> NEEDS A AUTO-SCROLL AND SCROLL FEATURE */}
    {/* <Input label="Email address" placeholder="example@gmail.com" /> OK FOR NOW */}
    {/* <MindHub /> OK FOR NOW */}
    {/* <LiveSupport /> OK FOR NOW */}
    {/* <Home /> OK FOR NOW */}
    {/* <Media /> OK FOR NOW */}
    {/* <More /> OK FOR NOW */}
    {/* <ContentCard text="My Account" image={myaccount} /> OK FOR NOW */}
  </View>;
};

export default MariosScreen;
