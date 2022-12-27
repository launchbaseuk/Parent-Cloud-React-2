import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import BackButton from '../../components/BackButton';
import ListItem from '../../components/ListItem';
import TagFilter from '../../components/TagFilter';
import VideoListItem from '../../components/VideoListItem';

// Image
import listitemimage from '../../images/ListItemImage.png';

export default function LiveTalks() {
  const [liveTalks, setLiveTalks] = useState<any>();

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        let response = await fetch(
          'https://hub.the-wellness-cloud.com/wp-json/mo/v1/posts/live-learning',
        );
        response = await response.json();

        setLiveTalks(response);
      })();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text={'Live Talks'} />

        <View style={{height: 12}} />

        {liveTalks?.map((talk, index) => {
          console.log(talk);
          return (
            <VideoListItem
              text={talk.post_title}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci turpis et tortor..."
              image={listitemimage}
              key={talk.ID}
              liveTalk
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
