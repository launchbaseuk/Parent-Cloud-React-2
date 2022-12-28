import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useFocusEffect} from '@react-navigation/native';

// Components
import BackButton from '../../components/BackButton';
import MediaListItem from '../../components/MediaListItem';
import TagFilter from '../../components/TagFilter';

import {getSleepStories} from '../../functions/requests';

const {width, height} = Dimensions.get('window');
export default function SleepStories({navigation}: any) {
  const [items, setItems] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const response = await getSleepStories();
        setItems(response);
      })();
    }, []),
  );

  console.log('itemsss', items);

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Sleep Stories" />
        <View style={{height: 40}} />

        {/* <TagFilter /> */}
        <View style={{height: 16}} />

        <View>
          {items.map((item: any) => {
            return <MediaListItem title={item.title.rendered} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
