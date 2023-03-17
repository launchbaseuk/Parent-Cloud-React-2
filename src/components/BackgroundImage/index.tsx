import React from "react";
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import imageSource from "../../images/Clouds.png";
import AppBackground from "../../images/svg/AppBackground";

const { width, height } = Dimensions.get("window");
const BackgroundImage = ({ children }) => {
    console.log('image', imageSource)
  return (
    <View style={styles.background}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
//   background: {    
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//   },
//   content: {
//     flex: 1,
//     backgroundColor: "transparent",
//     zIndex: 1000
//   }
});

export default BackgroundImage;