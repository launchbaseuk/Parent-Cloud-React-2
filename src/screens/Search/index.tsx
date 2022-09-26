import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton';

import ListItem from '../../components/ListItem';

import SearchBg from '../../components/SearchBg';
import TagFilter from '../../components/TagFilter';
import listitemimage from '../../images/ListItemImage.png';

const {width, height} = Dimensions.get('window');
const SearchScreen = () => {
  const [clicked, setClicked] = useState(0);

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text={'Search'} style={styles.backBtn} />

        <SearchBg />

        <Text style={[styles.sectionTitle, {marginBottom: 16, marginTop: 41}]}>
          Suggested
        </Text>
        <TagFilter />

        <View style={styles.results}>
          <Text
            style={[styles.sectionTitle, {marginBottom: 16, marginTop: 16}]}>
            Most searched
          </Text>
          {Array.from({length: 10}).map((_, index) => {
            return (
              <ListItem
                key={index}
                text="Lorem ipsum dolor sit amet..."
                description="Lorem ipsum dolor sit amet..."
                image={listitemimage}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  results: {
    background: 'rgba(242, 242, 242, 0.5)',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 36,
  },
  backBtn: {},
  bubbleWrapper: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  bubble: {
    marginRight: 8,
    // border: 2px solid $violet,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 2,
    borderColor: '#11535C',
    borderRadius: 30,
  },
  bubbleClicked: {
    color: '#FFFAC5',
    backgroundColor: '#11535C',
  },
  sectionTitle: {
    fontFamily: 'SofiaProBlack',
    fontSize: 20,
    color: '#11535C',
    width: width - 40,
    alignSelf: 'center',
    textAlign: 'left',
  },
  actionsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 40,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingBottom: 73,
    paddingTop: 32,
  },
});

export default SearchScreen;

/*
<View style={styles.bubbleWrapper}>
        <TouchableOpacity onPress={() => setClicked(1)}>
          <View style={[styles.bubble, clicked === 1 && styles.bubbleClicked]}>
            <Text style={clicked === 1 && styles.bubbleClicked}>tag #1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setClicked(2)}>
          <View style={[styles.bubble, clicked === 2 && styles.bubbleClicked]}>
            <Text style={clicked === 2 && styles.bubbleClicked}>tag #2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setClicked(3)}>
          <View style={[styles.bubble, clicked === 3 && styles.bubbleClicked]}>
            <Text style={clicked === 3 && styles.bubbleClicked}>tag #3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setClicked(4)}>
          <View style={[styles.bubble, clicked === 4 && styles.bubbleClicked]}>
            <Text style={clicked === 4 && styles.bubbleClicked}>tag #4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setClicked(5)}>
          <View style={[styles.bubble, clicked === 5 && styles.bubbleClicked]}>
            <Text style={clicked === 5 && styles.bubbleClicked}>tag #5</Text>
          </View>
        </TouchableOpacity>
      </View>
*/
