import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useFocusEffect} from '@react-navigation/native';

// Components
import BackButton from '../../components/BackButton';
import MediaListItem from '../../components/MediaListItem';
import TagFilter from '../../components/TagFilter';

import {getSleepStories} from '../../functions/requests';

import Loader from '../../components/Loader';

export default function SleepStories({navigation}: any) {
  const [items, setItems] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<any>([]);
  const [selected, setSelected] = useState<string>("all");

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        setLoading(true);
        const response = await getSleepStories();
        setItems(response);
        setLoading(false);
      })();
    }, []),
  );

  useEffect(() => {
    (async () => {
      setItems([]);
      if (selected === 'all') {
        setLoading(true);
        const response = await getSleepStories();
        setItems(response);

        let responseTags: any = await fetch(
          'https://hub.the-wellness-cloud.com/wp-json/wp/v2/categories',
          // {
          //   headers: {
          //     Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
          //   },
          // },
        );
        responseTags = await responseTags.json();

        setCategories(
          responseTags.map((tags: any) => {
            return {
              text: tags.name,
              key: tags.id,
            };
          }),
        );
        setLoading(false);
      } else {
        setItems([]);
        setLoading(true);
        let responseTags: any = await fetch(
          `https://hub.the-wellness-cloud.com/wp-json/wp/v2/sleep_stories?categories=${selected}`,
          // {
          //   headers: {
          //     Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
          //   },
          // },
        );
        responseTags = await responseTags.json();

        setItems(
          responseTags.map((tags: any) => {
            return tags;
          }),
        );
        setLoading(false);
      }
    })();
  }, [selected]);

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Sleep Stories" />
        {/* <View style={{height: 40}} /> */}

        <TagFilter
          categories={categories}
          selected={selected}
          setSelected={setSelected}
        />
        <View style={{height: 16}} />

        {loading ? (
          <Loader />
        ) : (
          <View>
            {items.map((item: any) => {
              return <MediaListItem title={item.title.rendered} />;
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
