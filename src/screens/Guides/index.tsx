import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';
import {GuideCardBig} from '../../components/GuideCard';

export default function Guides({ navigation, route }: any) {
  const { items } = route.params;
  console.log(items.map((item) => console.log(item.excerpt)))

  return (
    <SafeAreaView>
      <BackButton text="Guides" />

      <View style={{height: 57}} />
      <ScrollView>
        {items.map((item: any) => {
          if(item.title.rendered && item.excerpt.rendered) {
            return (
              <GuideCardBig title={item.title.rendered} excerpt={item.excerpt.rendered.replace(/<[^>]+>/g, '')} redirect={item.content} />
            )
          } else {
            return (
              <GuideCardBig title={item.title} excerpt={item.excerpt} redirect={item.content} />
            )
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
