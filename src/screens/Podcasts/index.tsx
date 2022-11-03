import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import {getPodcasts} from '../../functions/requests';

// Components
import BackButton from '../../components/BackButton';
import MediaListItem from '../../components/MediaListItem';
import TagFilter from '../../components/TagFilter';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
export default function Podcasts({navigation, route}: any) {
  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const response = await getPodcasts();
      })();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Podcasts" />
        <View style={{height: 16}} />

        <TagFilter />
        <View style={{height: 16}} />

        <MediaListItem onPress={() => navigation.navigate('PodcastDetails')} />
        <MediaListItem onPress={() => navigation.navigate('PodcastDetails')} />
        <MediaListItem onPress={() => navigation.navigate('PodcastDetails')} />
        <MediaListItem onPress={() => navigation.navigate('PodcastDetails')} />
        <MediaListItem onPress={() => navigation.navigate('PodcastDetails')} />
        <MediaListItem onPress={() => navigation.navigate('PodcastDetails')} />
        <MediaListItem onPress={() => navigation.navigate('PodcastDetails')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
