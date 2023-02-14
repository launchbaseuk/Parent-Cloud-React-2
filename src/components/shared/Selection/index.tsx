import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default function Selection({setSelected, selected, text, itemKey}: any) {
  return (
    <TouchableOpacity
      style={
        selected.includes(itemKey)
          ? [styles.selectionContainer, styles.selected]
          : styles.selectionContainer
      }
      onPress={() => {
        if (selected.includes(itemKey)) {
          setSelected(selected.filter((i: string) => i !== itemKey));
        } else {
          setSelected([...selected, itemKey]);
        }
      }}>
      <Text
        style={
          selected.includes(itemKey)
            ? [styles.selectionText, styles.selectedText]
            : styles.selectionText
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectionContainer: {
    backgroundColor: '#F2F2F280',
    width: width - 40,
    height: 44,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 8,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  selected: {
    backgroundColor: '#11535C',
  },
  selectionText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: '#150E00',
  },
  selectedText: {
    fontFamily: 'Montserrat-Bold',
    color: '#FFFAC5',
  },
});
