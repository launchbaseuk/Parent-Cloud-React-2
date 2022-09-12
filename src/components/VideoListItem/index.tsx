import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Images
import playiconyellow from "../../icons/PlayIconYellow.png";

const {width, height} = Dimensions.get('window');
export default function VideoListItem({text, description, image}: any) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("VideoDetails")}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imageContainer}>
          <Image source={playiconyellow} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              color: '#11535C',
              fontSize: 14,
            }}>
            Lorem ipsum
          </Text>
          <Text
            style={{
              width: 200,
              fontFamily: 'Montserrat-Regular',
              color: '#150E00',
              lineHeight: 19,
              fontSize: 11,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: 100,
    borderRadius: 5,
    backgroundColor: '#F2F2F280',
    alignSelf: 'center',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginLeft: 8,
    height: 100,
    justifyContent: 'center',
    marginTop: -10,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#11535C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
