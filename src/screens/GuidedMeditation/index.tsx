import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

// Components
import BackButton from '../../components/BackButton';
import MediaListItem from '../../components/MediaListItem';
import {getGuidedMeditation} from '../../functions/requests';

export default function GuidedMeditation({navigation}: any) {
  const [items, setItems] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        console.log('test');
        // async () => {
        const response = await getGuidedMeditation();
        // console.log('meddd', response);
        setItems(response);
        // };
      })();
    }, []),
  );

  console.log('itemsss', items);

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Guided Meditation" />
        <View style={{height: 40}} />

        {/* <TagFilter /> */}
        <View style={{height: 16}} />

        <View>
          {items.map((item: any) => {
            console.log('eh', item);

            return <MediaListItem title={item.title.rendered} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
