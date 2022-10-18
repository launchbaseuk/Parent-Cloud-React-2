import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

import downArrow from '../../images/dropdownArrow.png';

type IDropdown = React.FC<{
  onPress: () => void;
  isOpen: boolean;
  title: string;
  children: any;
}>;

export const DropDown: IDropdown = ({title, onPress, isOpen, children}) => {
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
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingBottom: 16,
    paddingHorizontal: 20,
    // position: 'absolute',
    // backgroundColor: '#2A2C2E',
    // color: 'black',
    // left: 0,
    // right: 0,
    // top: '100%',
    // zIndex: 9999,
    // elevation: 9999,
    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
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
