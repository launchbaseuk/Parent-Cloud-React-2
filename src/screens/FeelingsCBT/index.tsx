import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

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
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
export default function FeelingsCBT() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState<any>([]);
  const [username, setUsername] = useState<string>('');

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const username = await AsyncStorage.getItem('user_nameDisplay');

        if (username) setUsername(username);
      })();
    }, []),
  );

  const handleSelected = (item: string) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i: string) => i !== item));
    } else {
      setSelected([item]);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 130,
          alignSelf: 'center',
          color: '#11535C',
          fontFamily: 'SofiaProBlack',
          fontSize: 31,
        }}>
        Hi {username}
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
        How are you feeling right now?
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
          setSelected={handleSelected}
        />
        <FeelingsCard
          text="Not good"
          icon={<Anxious />}
          iconSelected={<AnxiousSelected />}
          itemKey="notgood"
          selected={selected}
          setSelected={handleSelected}
        />
        <FeelingsCard
          text="Ok"
          icon={<Happy />}
          iconSelected={<HappySelected />}
          itemKey="ok"
          selected={selected}
          setSelected={handleSelected}
        />
        <FeelingsCard
          text="Great"
          icon={<Playful />}
          iconSelected={<PlayfulSelected />}
          itemKey="great"
          selected={selected}
          setSelected={handleSelected}
        />
      </View>

      <View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  buttonContainer: {
    marginTop: 64,
    marginBottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 344,
    alignSelf: 'center',
  },
});
