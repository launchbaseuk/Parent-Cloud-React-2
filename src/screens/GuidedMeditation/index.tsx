import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

// Components
import BackButton from '../../components/BackButton';
import MediaListItem from '../../components/MediaListItem';
import {getGuidedMeditation} from '../../functions/requests';

import Loader from '../../components/Loader';

export default function GuidedMeditation({navigation}: any) {
  const [items, setItems] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        setLoading(true);
        const response = await getGuidedMeditation();
        setItems(response);
        setLoading(false);
      })();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Guided Meditation" />
        <View style={{height: 40}} />

        {/* <TagFilter /> */}
        <View style={{height: 16}} />

        {loading ? (
          <Loader />
        ) : (
          <View>
            {items.map((item: any) => {
              console.log('eh', item);

              return <MediaListItem title={item.title.rendered} />;
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
