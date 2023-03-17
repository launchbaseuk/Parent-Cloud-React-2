import React from 'react';
import {View, Image, Dimensions, ActivityIndicator} from 'react-native';

const {width, height} = Dimensions.get('window');

const Loader = () => {
  const loader = require('../../icons/spinner.gif');

  return (
    <View
      style={{
        width: width,
        height: height,
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Image source={loader} style={{width: 100, height: 100}} /> */}
      <ActivityIndicator size="large" color="#336A75" style={{ width: 100, height: 100 }} />
    </View>
  );
};

export default Loader;
