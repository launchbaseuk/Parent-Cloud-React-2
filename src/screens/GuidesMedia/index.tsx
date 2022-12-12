import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton';
import {GuideCardSmall} from '../../components/GuideCard';
import {getGuides} from '../../functions/requests';

const {width, height} = Dimensions.get('window');
export default function GuidesMedia({navigation, route}: any) {
  const [guides, setGuides] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        let response = await getGuides();
        setGuides(response);
      })();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{paddingBottom: 10, backgroundColor: '#ffffff'}}>
        <BackButton text="Guides" />

        {guides.map(guide => (
          <>
            <View style={styles.guidesHeader}>
              <Text
                style={{
                  fontFamily: 'SofiaProBlack',
                  color: '#11535C',
                  fontSize: 20,
                }}>
                {guide.filter}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Guides')}>
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
              {guide.guides.length > 0 ? (
                guide.guides.map(gui => {
                  // Remove all html tags from gui.excerpt.rendered
                  let excerpt = gui.excerpt.rendered.replace(
                    /(<([^>]+)>)/gi,
                    '',
                  );

                  return (
                    <GuideCardSmall
                      text={excerpt}
                      title={gui.title.rendered}
                      redirect={gui.content.rendered}
                    />
                  );
                })
              ) : (
                <Text style={styles.noContentStyling}>No content</Text>
              )}
            </ScrollView>
          </>
        ))}
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
  noContentStyling: {
    marginLeft: 12,
    fontFamily: 'SofiaProBlack',
    color: '#333',
    fontSize: 20,
  },
});
