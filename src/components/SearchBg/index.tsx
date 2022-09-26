import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import SearchIcon from '../../icons/svg/Search';

const {width, height} = Dimensions.get('window');
export default function SearchBg() {
  return (
    <View style={styles.searchContainer}>
      <SearchIcon style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#00084B"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 44,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    width: width - 40,
    height: 44,
    borderRadius: 5,
    // paddingLeft: 16,
    alignSelf: 'center',
  },
  searchIcon: {
    marginRight: 12,
    marginLeft: 15,
  },
  searchInput: {
    fontFamily: 'Montserrat-Regular',
    height: 44,
    textAlignVertical: 'center',
    width: width - 105,
  },
});
