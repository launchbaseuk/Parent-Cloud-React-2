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
    alignItems: 'center',
    marginTop: 8,
    paddingRight: 10,
    flexDirection: "row"
  },
  title: {
    fontSize: 15,
    color: '#11535C',
    fontFamily: 'Montserrat-Bold',
    marginTop: 20,
    width: "90%"
  },
  description: {
    width: "90%",
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
});
