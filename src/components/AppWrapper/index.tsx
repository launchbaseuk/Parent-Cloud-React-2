import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import BackgroundImage from '../BackgroundImage';

const AppWrapper = ({children}) => {
  return (
    <BackgroundImage>
        {children}
    </BackgroundImage>
  );
};

export default AppWrapper;