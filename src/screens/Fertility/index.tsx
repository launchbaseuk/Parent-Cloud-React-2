import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {getPageDocs} from '../../functions/requests';

// Components
import BackButton from '../../components/BackButton';
import {GuideCardSmall} from '../../components/GuideCard';
import PrimaryButton from '../../components/shared/PrimaryButton';

// Images
import placeholderImage from '../../images/PlaceholderImage.png';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
export default function Fertility() {
  const navigation = useNavigation();
  const [guides, setGuides] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        // Fetch data
        let docs = await getPageDocs('fertility');
        setGuides(docs);
        console.log('fertility docs', docs);
      })();
    }, []),
  );

  return (
    <SafeAreaView>
      <BackButton text={'Fertility'} />

      <View style={styles.guidesContainer}>
        <View style={styles.guidesHeader}>
          <Text
            style={{
              fontFamily: 'SofiaProBlack',
              color: '#11535C',
              fontSize: 20,
            }}>
            Guides
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
          {guides.map((guide: any) => {
            let excerpt = guide.excerpt.rendered.replace(/(<([^>]+)>)/gi, '');

            return (
              <GuideCardSmall
                key={guide.id}
                text={excerpt}
                title={guide.title.rendered}
                redirect={guide.content.rendered}
              />
            );
          })}
        </ScrollView>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingTop: 16,
              paddingLeft: 16,
              marginBottom: 70,
            }}>
            <Image source={placeholderImage} />
            <View style={{marginLeft: 8}}>
              <Text
                style={{
                  fontFamily: 'SofiaProBlack',
                  fontSize: 17,
                  color: '#11535C',
                }}>
                Apricity Consultation
              </Text>
              <Text
                style={{
                  width: '40%',
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 13,
                  color: '#150E00',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>

          <PrimaryButton
            text="Book consultation"
            onPress={() => navigation.navigate('ApricityConsultation')}
          />
        </View>
      </View>
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
  card: {
    backgroundColor: '#F2F2F280',
    width: width - 40,
    height: 246,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 32,
  },
});
