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

const StaticSelection = ({text, route}: any) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.selectionContainer}
      onPress={() => navigation.navigate(route)}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default StaticSelection;

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
});
