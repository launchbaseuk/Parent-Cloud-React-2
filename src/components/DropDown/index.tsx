import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';

import downArrow from '../../images/dropdownArrow.png';

const {width} = Dimensions.get('window');

type IDropdown = React.FC<{
  title: string;
  children: any;
}>;


export const DropDown: IDropdown = ({title, children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onPress = () => {
    setIsOpen(!isOpen);
  }
  return (
    <View style={[styles.self, isOpen && styles.selfOpen]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <View>
            <Image source={downArrow} style={{width: 24, height: 12}} />
          </View>
        </View>
      </TouchableOpacity>
      {/* {isOpen && <View style={styles.contentContainer}>{children}</View>} */}
      <View style={styles.contentContainer}>{isOpen && children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    backgroundColor: '#E5E5E5',
    width: width - 40,
    // height: 65,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 8,
    justifyContent: 'center',
    // paddingLeft: 16,

    // zIndex: 9999,
    // elevation: 9999,
    // marginHorizontal: 16,
    // backgroundColor: '#F2F2F2',
    // opacity: 0.5,
    // marginVertical: 5,
    // borderRadius: 8,
  },
  selfOpen: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  chevronIcon: {
    color: '#3AC3EE',
  },
  title: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  icon: {
    maxWidth: 24,
    maxHeight: 24,
    marginRight: 15,
  },
});
