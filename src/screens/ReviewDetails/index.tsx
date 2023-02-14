import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton';
import FeelingsCard from '../../components/FeelingsCard';

// Components
import PrimaryButton from '../../components/shared/PrimaryButton';
import SecondaryButton from '../../components/shared/SecondaryButton';
import Selection from '../../components/shared/Selection';
import Anxious from '../../icons/svg/Anxious';
import AnxiousSelected from '../../icons/svg/AnxiousSelected';
import Depressed from '../../icons/svg/Depressed';
import DepressedSelected from '../../icons/svg/DepressedSelected';
import Happy from '../../icons/svg/Happy';
import HappySelected from '../../icons/svg/HappySelected';
import Playful from '../../icons/svg/Playful';
import PlayfulSelected from '../../icons/svg/PlayfulSelected';

const {width, height} = Dimensions.get('window');
export default function ReviewDetails({navigation, route}: any) {
  const [selected, setSelected] = useState<string>('');
  const {checkIn} = route.params;
  const [feelingCards, setFeelingCards] = useState([
    {
      key: 'ok',
      code: (
        <FeelingsCard
          text="Ok"
          icon={<Happy />}
          iconSelected={<HappySelected />}
          itemKey="ok"
          selected={''}
          setSelected={() => console.log('')}
        />
      ),
    },
    {
      key: 'notgood',
      code: (
        <FeelingsCard
          text="Not good"
          icon={<Anxious />}
          iconSelected={<AnxiousSelected />}
          itemKey="notgood"
          selected={selected}
          setSelected={() => console.log('')}
        />
      ),
    },
    {
      key: 'awful',
      code: (
        <FeelingsCard
          text="Awful"
          icon={<Depressed />}
          iconSelected={<DepressedSelected />}
          itemKey="awful"
          selected={selected}
          setSelected={() => console.log('')}
        />
      ),
    },
    {
      key: 'great',
      code: (
        <FeelingsCard
          text="Great"
          icon={<Playful />}
          iconSelected={<PlayfulSelected />}
          itemKey="great"
          selected={selected}
          setSelected={() => console.log('')}
        />
      ),
    },
  ]);

  const [distortions, setDistortions] = useState([
    {text: 'All or nothing thinking', key: 'allOrNothing'},
    {text: 'Overgeneralisation', key: 'overgeneralisation'},
    {text: 'Catastrophising', key: 'catastrophising'},
    {text: 'Jumping to conclusions', key: 'jumpingToConclusions'},
    {text: 'Emotional reasoning', key: 'emotionalReasoning'},
    {text: 'Should or must statements', key: 'shouldOrMustStatements'},
    {text: 'Labelling', key: 'labelling'},
    {text: 'Blaming', key: 'blaming'},
  ]);
  const [feeling_now, setFeelingNow] = useState([
    {key: 'better', text: 'Better'},
    {key: 'worse', text: 'Worse'},
    {key: 'same', text: 'The same'},
  ]);

  const date = new Date(checkIn.date_gmt);
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Details" />

        <Text
          style={{
            fontFamily: 'SofiaProBlack',
            color: '#11535C',
            fontSize: 20,
            paddingLeft: 16,
            marginTop: 50,
          }}>
          {formattedDate}
        </Text>
        <Text
          style={{
            fontFamily: 'SofiaProBlack',
            color: '#11535C',
            fontSize: 20,
            paddingLeft: 16,
            marginTop: 50,
            marginBottom: 16,
          }}>
          What are your feelings?
        </Text>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 64}}>
          {checkIn.acf.feeling ? (
            checkIn.acf.feeling.map((feel: any) => {
              const feelingCard = feelingCards.find(card => card.key === feel);
              if (feelingCard) {
                return feelingCard.code;
              } else {
                return <Text>No feeling selected.</Text>;
              }
            })
          ) : (
            <Text>No feeling selected.</Text>
          )}
        </View>

        <View>
          <Text
            style={{
              fontFamily: 'SofiaProBlack',
              color: '#11535C',
              fontSize: 20,
              paddingLeft: 16,
              marginTop: 50,
            }}>
            Which cognitive distortions does this thought have?
          </Text>
          {checkIn.acf.cognitive_distortions ? (
            checkIn.acf.cognitive_distortions.map((distortion: any) => {
              return (
                <View style={styles.cognitiveContainer}>
                  <Text style={styles.cognitiveText}>
                    {distortions.map((distort: any) => {
                      if (distort.key === distortion) {
                        return distort.text;
                      }
                    })}
                  </Text>
                </View>
              )
            })
          ) : (
            <View style={styles.cognitiveContainer}>
              <Text style={styles.cognitiveText}>
                No cognitive distortions selected.
              </Text>
            </View>
          )}
        </View>

        <View style={{marginTop: 64}}>
          <Text
            style={{
              fontFamily: 'SofiaProBlack',
              color: '#11535C',
              fontSize: 20,
              paddingLeft: 16,
              marginTop: 50,
              marginBottom: 16,
            }}>
            What are your feelings?
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              width: width - 40,
              backgroundColor: '#F2F2F280',
              color: '#150E00',
              padding: 16,
              // paddingTop: 0,
              textAlignVertical: 'top',
              borderRadius: 5,
              fontFamily: 'Montserrat-Regular',
              opacity: 0.5,
            }}>
            {checkIn.acf.challenge ? checkIn.acf.challenge : 'No challenge'}
          </Text>
        </View>
        <View style={{paddingBottom: 50}}>
          <Text
            style={{
              fontFamily: 'SofiaProBlack',
              color: '#11535C',
              fontSize: 20,
              paddingLeft: 16,
              marginTop: 64,
            }}>
            How are you feeling now?
          </Text>
          {checkIn.acf.feeling_now ? (
            checkIn.acf.feeling_now.map((feel: any) => {
              return (
                <View style={styles.cognitiveContainer}>
                  <Text style={styles.cognitiveText}>
                    {feeling_now.map((dist: any) => {
                      if (dist.key === feel) {
                        return dist.text;
                      }
                    })}
                  </Text>
                </View>
              )
            })
          ) : (
            <View style={styles.cognitiveContainer}>
              <Text style={styles.cognitiveText}>No feeling selected.</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cognitiveContainer: {
    backgroundColor: '#11535C',
    width: width - 40,
    height: 44,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 8,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  cognitiveText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    color: '#FFFAC5',
  },
});
