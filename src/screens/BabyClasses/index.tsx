import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton';
import ListItem from '../../components/ListItem';
import TagFilter from '../../components/TagFilter';

// Image
import listitemimage from '../../images/ListItemImage.png';
import { useFocusEffect } from '@react-navigation/native';
import getContentPresenters from '../../functions/getContentPresenters';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BabyClasses() {
  const [presenters, setPresenters] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async() => {
        let presenters = await getContentPresenters(await AsyncStorage.getItem('token'));
        setPresenters(presenters)
      })();
    }, [])
  );

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 25 }}>
        <BackButton text={'Baby Classes'} />
        {/* <TagFilter /> */}

        <View style={{height: 12}} />

        {presenters.map((presenter: any, index: number) => {
          return (
            <ListItem
              key={presenter.id}
              id={presenter.id}
              text={presenter.title}
              image={presenter.imageLink}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
