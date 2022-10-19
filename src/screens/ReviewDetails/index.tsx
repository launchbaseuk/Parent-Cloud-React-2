import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Text, ScrollView} from 'react-native';
import FeelingsCard from '../../components/FeelingsCard';

// Components
import PrimaryButton from '../../components/shared/PrimaryButton';
import SecondaryButton from '../../components/shared/SecondaryButton';
import Selection from '../../components/shared/Selection';
import Depressed from '../../icons/svg/Depressed';
import DepressedSelected from '../../icons/svg/DepressedSelected';
import Happy from '../../icons/svg/Happy';
import HappySelected from '../../icons/svg/HappySelected';
import Playful from '../../icons/svg/Playful';
import PlayfulSelected from '../../icons/svg/PlayfulSelected';

const {width, height} = Dimensions.get('window');
export default function ReviewDetails({navigation}) {
  const [selected, setSelected] = useState<string>('');

  return (
    <ScrollView>
      <Text
        style={{
          fontFamily: 'SofiaProBlack',
          color: '#11535C',
          fontSize: 20,
          paddingLeft: 16,
          marginTop: 50,
        }}>
        01/01/2023
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
        <FeelingsCard
          text="Happy"
          icon={<Happy />}
          iconSelected={<HappySelected />}
          itemKey="happy"
          selected={''}
          setSelected={() => console.log('')}
        />
        <FeelingsCard
          text="Playful"
          icon={<Playful />}
          iconSelected={<PlayfulSelected />}
          itemKey="playful"
          selected={''}
          setSelected={() => console.log('')}
        />
        <FeelingsCard
          text="Depressed"
          icon={<Depressed />}
          iconSelected={<DepressedSelected />}
          itemKey="depressed"
          selected={''}
          setSelected={() => console.log('')}
        />
      </View>

      <View>
        <Text
          style={{
            fontFamily: 'SofiaProBlack',
            color: '#11535C',
            fontSize: 20,
            paddingLeft: 16,
            marginBottom: 16,
          }}>
          Which cognitive distortions does this thought have?
        </Text>
        <Selection
          selected={'Should or must statements'}
          setSelected={setSelected}
          text="Should or must statements"
          itemKey="Should or must statements"
        />
      </View>

      <View style={{marginTop: 64}}>
        <Text
          style={{
            fontFamily: 'SofiaProBlack',
            color: '#11535C',
            fontSize: 20,
            paddingLeft: 16,
            marginBottom: 16,
          }}>
          How could you challenge this thought?
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
          Convallis vestibulum tellus ultrices mus feugiat ornare. Phasellus
          magna augue felis, ultricies dignissim penatibus interdum. Vestibulum
          quisque et auctor sed metus. Varius nisl, at nisl risus, aliquet
          ipsum.
        </Text>
      </View>
      <View style={{marginTop: 64}}>
        <Text
          style={{
            fontFamily: 'SofiaProBlack',
            color: '#11535C',
            fontSize: 20,
            paddingLeft: 16,
            marginBottom: 16,
          }}>
          How could you challenge this thought?
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
          Convallis vestibulum tellus ultrices mus feugiat ornare. Phasellus
          magna augue felis, ultricies dignissim penatibus interdum. Vestibulum
          quisque et auctor sed metus. Varius nisl, at nisl risus, aliquet
          ipsum.
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
        <Selection
          selected={'Should or must statements'}
          setSelected={setSelected}
          text="Should or must statements"
          itemKey="Should or must statements"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
