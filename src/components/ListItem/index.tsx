import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
export default function ListItem({text, image, description, id}: any) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => navigation.navigate('ClassDetails')}>
      <Image
        source={image}
        style={{
          width: 100,
          height: 100,
          borderRadius: 5,
          resizeMode: 'contain',
          backgroundColor: "red",
          marginLeft: 10,
          marginRight: 10
        }}
      />
      <View style={styles.listItemTextContainer}>
        <Text style={styles.title}>{text}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    width: width - 40,
    height: 130,
    borderRadius: 5,
    backgroundColor: '#F2F2F280',
    paddingRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  title: {
    fontSize: 15,
    color: '#11535C',
    fontFamily: 'Montserrat-Bold',
    width: "90%"
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    width: "90%"
  },
});
