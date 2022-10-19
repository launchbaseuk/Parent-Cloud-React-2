import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import FeelingsCard from '../../components/FeelingsCard';
import PrimaryButton from '../../components/shared/PrimaryButton';
import SecondaryButton from '../../components/shared/SecondaryButton';

// Images
import Playful from '../../icons/svg/Playful';
import PlayfulSelected from '../../icons/svg/PlayfulSelected';
import Anxious from '../../icons/svg/Anxious';
import AnxiousSelected from '../../icons/svg/AnxiousSelected';
import Happy from '../../icons/svg/Happy';
import HappySelected from '../../icons/svg/HappySelected';
import Depressed from '../../icons/svg/Depressed';
import DepressedSelected from '../../icons/svg/DepressedSelected';

const {width, height} = Dimensions.get('window');
export default function FeelingsCBT() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState<string>('');

  return (
    <View>
      <Text
        style={{
          marginTop: 130,
          alignSelf: 'center',
          color: '#11535C',
          fontFamily: 'SofiaProBlack',
          fontSize: 31,
        }}>
        Hi user_name
      </Text>

      <Text
        style={{
          color: '#150E00',
          fontFamily: 'SofiaProBlack',
          fontSize: 25,
          width: width - 120,
          alignSelf: 'center',
          textAlign: 'center',
          marginTop: 64,
        }}>
        What are your feelings in this moment?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: width - 40,
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginBottom: 142,
          marginTop: 32,
        }}>
        <FeelingsCard
          text="Awful"
          icon={<Depressed />}
          iconSelected={<DepressedSelected />}
          itemKey="awful"
          selected={selected}
          setSelected={setSelected}
        />
        <FeelingsCard
          text="Not good"
          icon={<Anxious />}
          iconSelected={<AnxiousSelected />}
          itemKey="notgood"
          selected={selected}
          setSelected={setSelected}
        />
        <FeelingsCard
          text="Ok"
          icon={<Happy />}
          iconSelected={<HappySelected />}
          itemKey="ok"
          selected={selected}
          setSelected={setSelected}
        />
        <FeelingsCard
          text="Great"
          icon={<Playful />}
          iconSelected={<PlayfulSelected />}
          itemKey="great"
          selected={selected}
          setSelected={setSelected}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: width - 40,
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <SecondaryButton
          size="small"
          text="Back"
          onPress={() => navigation.goBack()}
        />
        <PrimaryButton
          size="small"
          text="Continue"
          onPress={() => navigation.navigate('Feelings', {feeling: selected})}
          disabled={selected != '' ? false : true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
