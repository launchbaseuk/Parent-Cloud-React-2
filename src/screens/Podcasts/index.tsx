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
  const [podcasts, setPodcasts] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const response = await getPodcasts();
        setPodcasts(response);
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

        <View style={styles.wrapper}>
          {podcasts.map((podcast: any) => {
            // remove all <> tags from post_content
            const regex = /(<([^>]+)>)/gi;
            const result = podcast.post_content.replace(regex, '');
            const link = podcast.post_content.match(
              /<img[^>]+src="?([^"\s]+)"?[^>]*>/,
            )[1];

            return (
              <MediaListItem
                onPress={() =>
                  navigation.navigate('PodcastDetails', {
                    podcast: podcast,
                    link: link,
                  })
                }
                key={podcast.ID}
                link={link}
                title={podcast.post_title}
                content={result}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 100,
  },
});
