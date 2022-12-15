import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from './src/contexts/auth-context';

import TrackPlayer from 'react-native-track-player';

// Screens
import Homepage from './src/screens/Homepage';
import MariosScreen from './src/screens/MariosScreen';
import TabBar from './src/components/TabBar';
import DusanScreen from './src/screens/DusanScreen';
import OnetooneSessions from './src/screens/OnetooneSessions';
import PocketCBT from './src/screens/PocketCBT';
import DynamicOne from './src/screens/DynamicOne';
import DynamicTwo from './src/screens/DynamicTwo';
import Support from './src/screens/Support';
import Antenatal from './src/screens/Antenatal';
import BabyClasses from './src/screens/BabyClasses';
import Fertility from './src/screens/Fertility';
import ApricityConsultation from './src/screens/ApricityConsultation';
import SuccessApricity from './src/screens/SuccessApricity';
import Guides from './src/screens/Guides';
import PDFViewer from './src/screens/PDFViewer';
import ClassDetails from './src/screens/ClassDetails';
import MoreScreen from './src/screens/More';
import LiveTalks from './src/screens/LiveTalks';
import MyAccount from './src/screens/MyAccount';
import PersonalDetails from './src/screens/PersonalDetails';
import Membership from './src/screens/Membership';
import SupportSettings from './src/screens/SupportSettings';
import SavedContent from './src/screens/SavedContent';
import HRManagerResources from './src/screens/HRManagerResources';
import Mind from './src/screens/MindHub';
import PocketCBTIntro from './src/screens/PocketCBTIntro';
import FeelingsCBT from './src/screens/FeelingsCBT';
import Feelings from './src/screens/Feelings';
import Activities from './src/screens/Activities';
import Thoughts from './src/screens/Thoughts';
import Learn from './src/screens/Learn';
import Gratitude from './src/screens/Gratitude';
import SleepStories from './src/screens/SleepStories';
import GuidedMeditation from './src/screens/GuidedMeditation';
import MediaDetails from './src/screens/MediaDetails';
import Success from './src/components/auth/Success';
import ForgotPassword from './src/components/auth/ForgotPassword';
import Login from './src/components/auth/Login';
import Signup from './src/components/auth/Signup';
import EmailSent from './src/components/auth/EmailSent';
import Onboarding from './src/screens/Onboarding';
import MediaScreen from './src/screens/MediaScreen';
import GuidesMedia from './src/screens/GuidesMedia';
import Videos from './src/screens/Videos';
import Podcasts from './src/screens/Podcasts';
import VideoDetails from './src/screens/VideoDetails';
import PodcastDetails from './src/screens/PodcastDetails';
import VideoPlayerShared from './src/components/shared/VideoPlayer';
import ReviewDetails from './src/screens/ReviewDetails';
import ReviewSection from './src/screens/ReviewSection';
import NoSubscription from './src/screens/NoSubscription';
import PlayerScreen from 'react-native-sound-playerview';

// Navigation
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MusicPlayer from './src/components/shared/MusicPlayer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  const navigation = useNavigation();
  const {sub}: any = useAuth();

  useEffect(() => {
    if (!sub) {
      navigation.navigate('NoSubscription');
    }
  }, [sub]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Support" component={Support} />
      <Tab.Screen name="Mind" component={Mind} />
      <Tab.Screen name="Media" component={MediaScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

//Declaring an audioplayer
TrackPlayer.registerPlaybackService(() => require('./service'));

const App = () => {
  const {loggedIn}: any = useAuth();
  // const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const [onboarded, setOnboarded] = useState<boolean>(false);

  // useEffect(() => {
  //   (async() => {
  //     await AsyncStorage.setItem('onboarded', "false");
  //     const onboarded = await AsyncStorage.getItem('onboarded');
  //     if (onboarded == "true") {
  //       setOnboarded(true);
  //     } else {
  //       setOnboarded(false);
  //     }
  //   })();
  // }, []);

  const setUpTrackPlayer = useCallback(async () => {
    try {
      await TrackPlayer.setupPlayer();
      console.log('Player Set Up');
    } catch (e) {
      console.log(e);
    }
  }, []);

  // useMemo(() => {
  //   useCallback(() => {
  //     setUpTrackPlayer();
  //   });
  // }, [setUpTrackPlayer]);

  useEffect(() => {
    // this will be triggered only when "fetch" value actually changes
    setUpTrackPlayer();
  }, [setUpTrackPlayer]);

  return (
    <NavigationContainer>
      {!loggedIn ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Onboarding">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="EmailSent" component={EmailSent} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="TabNav">
          <Stack.Screen name="TabNav" component={TabNav} />
          <Stack.Screen name="OneToOne" component={OnetooneSessions} />
          <Stack.Screen name="PocketCBT" component={PocketCBT} />
          <Stack.Screen name="DynamicOne" component={DynamicOne} />
          <Stack.Screen name="DynamicTwo" component={DynamicTwo} />
          <Stack.Screen name="LiveTalks" component={LiveTalks} />
          <Stack.Screen name="Antenatal" component={Antenatal} />
          <Stack.Screen name="BabyClasses" component={BabyClasses} />
          {/* <Stack.Screen name="Fertility" component={Fertility} /> */}
          <Stack.Screen
            name="ApricityConsultation"
            component={ApricityConsultation}
          />
          <Stack.Screen name="Guides" component={Guides} />
          <Stack.Screen name="PDFViewer" component={PDFViewer} />
          <Stack.Screen name="ClassDetails" component={ClassDetails} />
          <Stack.Screen name="SuccessApricity" component={SuccessApricity} />
          <Stack.Screen name="MyAccount" component={MyAccount} />
          <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
          <Stack.Screen name="Membership" component={Membership} />
          <Stack.Screen name="SupportSettings" component={SupportSettings} />
          <Stack.Screen name="SavedContent" component={SavedContent} />
          <Stack.Screen name="HRManagement" component={HRManagerResources} />
          <Stack.Screen name="PocketCBTIntro" component={PocketCBTIntro} />
          <Stack.Screen name="FeelingsCBT" component={FeelingsCBT} />
          <Stack.Screen name="Feelings" component={Feelings} />
          <Stack.Screen name="Activities" component={Activities} />
          <Stack.Screen name="Thoughts" component={Thoughts} />
          <Stack.Screen name="Learn" component={Learn} />
          <Stack.Screen name="Gratitude" component={Gratitude} />
          <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
          <Stack.Screen name="MoodTracker" component={ReviewSection} />
          <Stack.Screen name="SleepStories" component={SleepStories} />
          <Stack.Screen name="GuidedMeditation" component={GuidedMeditation} />
          <Stack.Screen name="MediaDetails" component={MediaDetails} />
          <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
          <Stack.Screen name="player" component={PlayerScreen} />
          <Stack.Screen name="GuidesMedia" component={GuidesMedia} />
          <Stack.Screen name="Videos" component={Videos} />
          <Stack.Screen name="Podcasts" component={Podcasts} />
          <Stack.Screen name="VideoDetails" component={VideoDetails} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayerShared} />
          <Stack.Screen name="PodcastDetails" component={PodcastDetails} />
          <Stack.Screen name="NoSubscription" component={NoSubscription} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
