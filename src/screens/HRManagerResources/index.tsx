import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

// Components
import BackButton from '../../components/BackButton';
import {GuideCardSmall} from '../../components/GuideCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import getHRContent from '../../functions/getHRContent';

const {width, height} = Dimensions.get('window');
export default function HRManagerResources() {
  const navigation = useNavigation();
  const [items, setItems] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        let items = await getHRContent();

        setItems(items);
      })();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="HR & Manager Resources" />
        <View style={{height: 42}} />

        {items.map((item: any, index: number) => {
          return (
            <>
              <View style={styles.guidesHeader}>
                <Text
                  style={{
                    fontFamily: 'SofiaProBlack',
                    color: '#11535C',
                    fontSize: 20,
                  }}>
                  {item.type[0].toUpperCase() + item.type.slice(1)}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(
                      `${item.type[0].toUpperCase()}${item.type.slice(1)}`,
                      {items: item.items},
                    )
                  }>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      color: '#150E00',
                      fontSize: 14,
                    }}>
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginLeft: 8, paddingRight: 15}}>
                {item.items.map((it: any) => {
                  console.log(
                    item.type == 'guides'
                      ? it.title + ' ' + it.content
                      : it.title,
                  );

                  console.log('aaa', it);
                  return (
                    <GuideCardSmall
                      title={it.title}
                      excerpt={it.excerpt}
                      redirect={it.content}
                      vimeoLink={it.vimeoLink}
                      fileLink={it.content}
                    />
                  );
                })}
              </ScrollView>
            </>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  guidesHeader: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width - 40,
    marginTop: 41,
    marginBottom: 16,
  },
});
