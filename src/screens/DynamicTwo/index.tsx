import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import BackButton from '../../components/BackButton';
import latestItems from '../../functions/latestItems';

export default function DynamicTwo() {
  const [guides, setGuides] = useState<any>([]);
  const [videos, setVideos] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async() => {
        const items = await latestItems();

        setGuides(items[0][0]);
        setVideos(items[0][1]);
      })();
    }, [])
  );

  return (
    <SafeAreaView>
      <BackButton text={'Latest Releases'} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Latest Guides</Text>
        {/* MAP GUIDES */}
        <Text style={styles.title}>Latest Videos</Text>
        {/* MAP VIDEOS */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    marginLeft: 32,
  },
  title: {
    color: '#11535C',
    fontSize: 20,
    fontFamily: 'SofiaProBlack',
  },
  content: {
    fontSize: 16,
    marginTop: 8,
    fontFamily: 'Montserrat-Regular',
    color: '#150E00',
    width: 312,
  },
});
