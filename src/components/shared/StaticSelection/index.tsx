import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const StaticSelection = ({text, route, checkIn }: any) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.selectionContainer}
      onPress={() => navigation.navigate(route, { checkIn: checkIn })}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default StaticSelection;

const styles = StyleSheet.create({
  selectionContainer: {
    backgroundColor: '#E5E5E5',
    width: width - 40,
    height: 44,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 8,
    justifyContent: 'center',
    paddingLeft: 16,
  },
});
