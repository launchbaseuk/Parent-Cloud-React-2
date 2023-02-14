import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import FeelingsCard from '../../components/FeelingsCard';
import PrimaryButton from '../../components/shared/PrimaryButton';
import SecondaryButton from '../../components/shared/SecondaryButton';

// Images
import Depressed from '../../icons/svg/Depressed';
import DepressedSelected from '../../icons/svg/DepressedSelected';
import Anxious from '../../icons/svg/Anxious';
import AnxiousSelected from '../../icons/svg/AnxiousSelected';
import Confused from '../../icons/svg/Confused';
import ConfusedSelected from '../../icons/svg/ConfusedSelected';
import Sick from '../../icons/svg/Sick';
import SickSelected from '../../icons/svg/SickSelected';
import Envious from '../../icons/svg/Envious';
import EnviousSelected from '../../icons/svg/EnviousSelected';
import Tired from '../../icons/svg/Tired';
import TiredSelected from '../../icons/svg/TiredSelected';
import Guilty from '../../icons/svg/Guilty';
import GuiltySelected from '../../icons/svg/GuiltySelected';
import Sad from '../../icons/svg/Sad';
import SadSelected from '../../icons/svg/SadSelected';
import Overwhelmed from '../../icons/svg/Overwhelmed';
import OverwhelmedSelected from '../../icons/svg/OverwhelmedSelected';
import Frustrated from '../../icons/svg/Frustrated';
import FrustratedSelected from '../../icons/svg/FrustratedSelected';
import Angry from '../../icons/svg/Angry';
import AngrySelected from '../../icons/svg/AngrySelected';
import Ashamed from '../../icons/svg/Ashamed';
import AshamedSelected from '../../icons/svg/AshamedSelected';
import Relieved from '../../icons/svg/Relieved';
import RelievedSelected from '../../icons/svg/RelievedSelected';
import Happy from '../../icons/svg/Happy';
import HappySelected from '../../icons/svg/HappySelected';
import Productive from '../../icons/svg/Productive';
import ProductiveSelected from '../../icons/svg/ProductiveSelected';
import Confident from '../../icons/svg/Confident';
import ConfidentSelected from '../../icons/svg/ConfidentSelected';
import Loved from '../../icons/svg/Loved';
import LovedSelected from '../../icons/svg/LovedSelected';
import Grateful from '../../icons/svg/Grateful';
import GratefulSelected from '../../icons/svg/GratefulSelected';
import Playful from '../../icons/svg/Playful';
import PlayfulSelected from '../../icons/svg/PlayfulSelected';
import StarsHappy from '../../icons/svg/StarsHappy';
import StarsHappySelected from '../../icons/svg/StarsHappySelected';
import Relaxed from '../../icons/svg/Relaxed';
import RelaxedSelected from '../../icons/svg/RelaxedSelected';
import Optimistic from '../../icons/svg/Optimistic';
import OptimisticSelected from '../../icons/svg/OptimisticSelected';
import Excited from '../../icons/svg/Excited';
import ExcitedSelected from '../../icons/svg/ExcitedSelected';
import Calm from '../../icons/svg/Calm';
import CalmSelected from '../../icons/svg/CalmSelected';
import {SafeAreaView} from 'react-native-safe-area-context';
import Inspired from '../../icons/svg/Inspired';
import InspiredSelected from '../../icons/svg/InspiredSelected';

const {width, height} = Dimensions.get('window');
export default function Feelings({navigation, route}: any) {
  const feeling = route.params.feeling;
  const [selected, setSelected] = useState<any>([]);

  const handleSelected = (item: string) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i: string) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <SafeAreaView>
      <Text
        style={{
          fontFamily: 'SofiaProBlack',
          fontSize: 25,
          color: '#11535C',
          marginTop: 70,
          alignSelf: 'center',
          marginBottom: 32,
        }}>
        How do you feel?
      </Text>

      {feeling == 'awful' || feeling == 'notgood' ? (
        <>
          <View
            style={{
              width: width - 40,
              alignSelf: 'center',
              flexDirection: 'row',
              marginBottom: 16,
              justifyContent: 'center',
            }}>
            <FeelingsCard
              text="Depressed"
              icon={<Depressed />}
              iconSelected={<DepressedSelected />}
              itemKey="depressed"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Anxious"
              icon={<Anxious />}
              iconSelected={<AnxiousSelected />}
              itemKey="anxious"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Confused"
              icon={<Confused />}
              iconSelected={<ConfusedSelected />}
              itemKey="confused"
              selected={selected}
              setSelected={handleSelected}
            />
          </View>
          <View
            style={{
              width: width - 40,
              alignSelf: 'center',
              flexDirection: 'row',
              marginBottom: 16,
              justifyContent: 'center',
            }}>
            <FeelingsCard
              text="Sick"
              icon={<Sick />}
              iconSelected={<SickSelected />}
              itemKey="sick"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Envious"
              icon={<Envious />}
              iconSelected={<EnviousSelected />}
              itemKey="envious"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Tired"
              icon={<Tired />}
              iconSelected={<TiredSelected />}
              itemKey="tired"
              selected={selected}
              setSelected={handleSelected}
            />
          </View>
          <View
            style={{
              width: width - 40,
              alignSelf: 'center',
              flexDirection: 'row',
              marginBottom: 16,
              justifyContent: 'center',
            }}>
            <FeelingsCard
              text="Guilty"
              icon={<Guilty />}
              iconSelected={<GuiltySelected />}
              itemKey="guilty"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Sad"
              icon={<Sad />}
              iconSelected={<SadSelected />}
              itemKey="sad"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Overwhelmed"
              icon={<Overwhelmed />}
              iconSelected={<OverwhelmedSelected />}
              itemKey="overwhelmed"
              selected={selected}
              setSelected={handleSelected}
            />
          </View>
          <View
            style={{
              width: width - 40,
              alignSelf: 'center',
              flexDirection: 'row',
              marginBottom: 16,
              justifyContent: 'center',
            }}>
            <FeelingsCard
              text="Frustrated"
              icon={<Frustrated />}
              iconSelected={<FrustratedSelected />}
              itemKey="frustrated"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Angry"
              icon={<Angry />}
              iconSelected={<AngrySelected />}
              itemKey="angry"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Furious"
              icon={<Ashamed />}
              iconSelected={<AshamedSelected />}
              itemKey="furious"
              selected={selected}
              setSelected={handleSelected}
            />
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              width: width - 40,
              alignSelf: 'center',
              flexDirection: 'row',
              marginBottom: 16,
              justifyContent: 'center',
            }}>
            <FeelingsCard
              text="Relieved"
              icon={<Relieved />}
              iconSelected={<RelievedSelected />}
              itemKey="relieved"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Happy"
              icon={<Happy />}
              iconSelected={<HappySelected />}
              itemKey="happy"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Productive"
              icon={<Productive />}
              iconSelected={<ProductiveSelected />}
              itemKey="productive"
              selected={selected}
              setSelected={handleSelected}
            />
          </View>
          <View
            style={{
              width: width - 40,
              alignSelf: 'center',
              flexDirection: 'row',
              marginBottom: 16,
              justifyContent: 'center',
            }}>
            <FeelingsCard
              text="Confident"
              icon={<Confident />}
              iconSelected={<ConfidentSelected />}
              itemKey="confident"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Loved"
              icon={<Loved />}
              iconSelected={<LovedSelected />}
              itemKey="loved"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Grateful"
              icon={<Grateful />}
              iconSelected={<GratefulSelected />}
              itemKey="grateful"
              selected={selected}
              setSelected={handleSelected}
            />
          </View>
          <View
            style={{
              width: width - 40,
              alignSelf: 'center',
              flexDirection: 'row',
              marginBottom: 16,
              justifyContent: 'center',
            }}>
            <FeelingsCard
              text="Playful"
              icon={<Playful />}
              iconSelected={<PlayfulSelected />}
              itemKey="playful"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Inspired"
              icon={<Inspired />}
              iconSelected={<InspiredSelected />}
              itemKey="inspired"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Relaxed"
              icon={<Relaxed />}
              iconSelected={<RelaxedSelected />}
              itemKey="relaxed"
              selected={selected}
              setSelected={handleSelected}
            />
          </View>
          <View
            style={{
              width: width - 40,
              alignSelf: 'center',
              flexDirection: 'row',
              marginBottom: 16,
              justifyContent: 'center',
            }}>
            <FeelingsCard
              text="Optimistic"
              icon={<Optimistic />}
              iconSelected={<OptimisticSelected />}
              itemKey="optimistic"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Excited"
              icon={<Excited />}
              iconSelected={<ExcitedSelected />}
              itemKey="excited"
              selected={selected}
              setSelected={handleSelected}
            />
            <View style={{width: 16}} />
            <FeelingsCard
              text="Calm"
              icon={<Calm />}
              iconSelected={<CalmSelected />}
              itemKey="calm"
              selected={selected}
              setSelected={handleSelected}
            />
          </View>
        </>
      )}

      <View
        style={{
          marginTop: 64,
          marginBottom: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 344,
          alignSelf: 'center',
        }}>
        <SecondaryButton
          size="small"
          text="Back"
          onPress={() => {
            navigation.goBack();
            setSelected([]);
          }}
        />
        <PrimaryButton
          size="small"
          text="Continue"
          onPress={() =>
            navigation.navigate('Activities', {
              feelings: feeling,
              otherFeeling: selected,
            })
          }
          disabled={selected != '' ? false : true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
