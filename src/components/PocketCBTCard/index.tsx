import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
export default function PocketCBTCard({text, image, route}: any) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate(route)}>
      <View style={styles.imageWrapper}><Image source={image} style={{ width: "100%", height: "100%" }} /></View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: width - 40,
    height: 120,
    borderRadius: 5,
    backgroundColor: '#F2F2F280',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 32,
    marginTop: 8,
    alignSelf: 'center',
  },
  imageWrapper: {
    width: 100,
    height: 90,
    overflow: 'hidden',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'SofiaProBlack',
    color: '#11535C',
    fontSize: 20,
    paddingLeft: 16,
  },
});
