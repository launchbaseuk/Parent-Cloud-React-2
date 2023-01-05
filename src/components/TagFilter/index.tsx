import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Chip from '../shared/Chip';

export default function TagFilter({selected, setSelected, categories}: any) {
  const [options, setOptions] = useState<any>([{key: 'all', text: 'All'}]);

  useEffect(() => {
    // add {key: "all", text: "All" } and categories into options
    setOptions(prevState => [...prevState, ...categories]);
  }, [categories]);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginLeft: 16,
          marginTop: 16,
          paddingRight: 15,
        }}>
        {options.map((option: any, index: any) => {
          return (
            <Chip
              selected={selected}
              setSelected={setSelected}
              text={option.text}
              itemKey={option.key}
              key={index}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
