import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton';
import {GuideCardSmall} from '../../components/GuideCard';
import {getGuides} from '../../functions/requests';

import Loader from '../../components/Loader';
import axios from 'axios';
import { decode } from 'html-entities';

const {width, height} = Dimensions.get('window');
export default function GuidesMedia({navigation, route}: any) {
  const [guides, setGuides] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        setLoading(true);
        let response = await getGuides();
        setGuides(response);
        setLoading(false);
      })();
    }, []),
  );

  console.log('guidd', guides);

  // [{"filter": "Bereavement", "guides": []}, {"filter": "Coaching &amp; Career", "guides": []}, {"filter": "Expectant Parent", "guides": []}, {"filter": "Family Activity", "guides": []}, {"filter": "Fertility", "guides": []}, {"filter": "Financial Wellbeing", "guides": []}, {"filter": "HR", "guides": []}, {"filter": "Infant Sleep", "guides": [[Object], [Object]]}, {"filter": "Men's Health", "guides": []}, {"filter": "Menopause", "guides": [[Object]]}]

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 10,
          backgroundColor: '#ffffff',
        }}>
        <BackButton text="Guides" />

        {loading ? (
          <Loader />
        ) : (
          guides.map(guide => (
            <>
              <View style={styles.guidesHeader}>
                <Text
                  style={{
                    fontFamily: 'SofiaProBlack',
                    color: '#11535C',
                    fontSize: 20,
                  }}>
                  {decode(guide.filter)}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Guides', {items: guide.guides})
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
                {guide.guides.length > 0 ? (
                  guide.guides.map((gui) => {
                    // Remove all html tags from gui.excerpt.rendered
                      let excerpt = gui.excerpt.rendered.replace(
                        /(<([^>]+)>)/gi,
                        '',
                      );
                        
                        return (
                          <GuideCardSmall
                            text={decode(excerpt)}
                            title={decode(gui.title.rendered)}
                            redirect={decode(gui.content.rendered)}
                            fileLink={gui.fileLink}
                          />
                        );
                  })
                ) : (
                  <Text style={styles.noContentStyling}>No content</Text>
                )}
              </ScrollView>
            </>
          ))
        )}
      </ScrollView>
      {/* <Image source={require("../../images/Clouds.png")} style={{ position: "absolute", zIndex: -1, width: width, backgroundColor: "transparent" }} /> */}
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
