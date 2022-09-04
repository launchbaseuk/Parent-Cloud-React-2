import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// Screens
import Homepage from './src/screens/Homepage';
import MariosScreen from './src/screens/MariosScreen';
import TabBar from './src/components/TabBar';
import DusanScreen from './src/screens/DusanScreen';
import OnetooneSessions from './src/screens/OnetooneSessions';
import PocketCBT from './src/screens/PocketCBT';
import DynamicOne from './src/screens/DynamicOne';
import DynamicTwo from './src/screens/DynamicTwo';
import Support from "./src/screens/Support";
import Antenatal from './src/screens/Antenatal';
import BabyClasses from './src/screens/BabyClasses';
import Fertility from "./src/screens/Fertility";
import ApricityConsultation from "./src/screens/ApricityConsultation";
import SuccessApricity from "./src/screens/SuccessApricity";
import Guides from "./src/screens/Guides";
import PDFViewer from './src/screens/PDFViewer';
import ClassDetails from "./src/screens/ClassDetails";

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LiveTalks from './src/screens/LiveTalks';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Support"  component={Support} />
      <Tab.Screen name="Mind" component={Homepage} />
      <Tab.Screen name="Media" component={Homepage} />
      <Tab.Screen name="More" component={Homepage} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
    //   {/* <MariosScreen /> */}
    //   <Homepage />
    // </SafeAreaView>
    <NavigationContainer>
      {!loggedIn ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={MariosScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TabNav">
          <Stack.Screen name="TabNav" component={TabNav} />
          <Stack.Screen name="OneToOne" component={OnetooneSessions} />
          <Stack.Screen name="PocketCBT" component={PocketCBT} />
          <Stack.Screen name="DynamicOne" component={DynamicOne} />
          <Stack.Screen name="DynamicTwo" component={DynamicTwo} />
          <Stack.Screen name="LiveTalks" component={LiveTalks} />
          <Stack.Screen name="Antenatal" component={Antenatal} />
          <Stack.Screen name="BabyClasses" component={BabyClasses} />
          <Stack.Screen name="Fertility" component={Fertility} />
          <Stack.Screen name="ApricityConsultation" component={ApricityConsultation} />
          <Stack.Screen name="Guides" component={Guides} />
          <Stack.Screen name="PDFViewer" component={PDFViewer} />
          <Stack.Screen name="ClassDetails" component={ClassDetails} />
          <Stack.Screen name="SuccessApricity" component={SuccessApricity} />
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
