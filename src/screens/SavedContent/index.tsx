import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';
import TagFilter from '../../components/TagFilter';

// Images
import FileIcon from '../../icons/svg/FileIcon';
import LinkIcon from '../../icons/svg/LinkIcon';

const {width, height} = Dimensions.get('window');
export default function SavedContent() {
  return (
    <SafeAreaView>
      <BackButton text="Saved Content" />

      {/* <TagFilter /> */}
      <View style={{height: 16}} />

      {Array.from({length: 7}).map((_, index) => {
        return (
          <View
            style={{
              marginTop: 4,
              width: width - 40,
              height: 44,
              borderRadius: 5,
              backgroundColor: '#F2F2F280',
              alignSelf: 'center',
              paddingLeft: 16,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <FileIcon />
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                color: '#150E00',
                fontSize: 16,
                marginLeft: 10,
              }}>
              PDF Title...
            </Text>
          </View>
        );
      })}
      <View style={{height: 16}} />
      {Array.from({length: 3}).map((_, index) => {
        return (
          <View
            style={{
              marginTop: 4,
              width: width - 40,
              height: 44,
              borderRadius: 5,
              backgroundColor: '#F2F2F280',
              alignSelf: 'center',
              paddingLeft: 16,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <LinkIcon />
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                color: '#150E00',
                fontSize: 16,
                marginLeft: 10,
              }}>
              01/02/1234 - 12:34
            </Text>
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
