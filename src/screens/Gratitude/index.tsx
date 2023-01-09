import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import PrimaryButton from '../../components/shared/PrimaryButton';
import SecondaryButton from '../../components/shared/SecondaryButton';
import Selection from '../../components/shared/Selection';

const {width, height} = Dimensions.get('window');
export default function Gratitude({navigation}) {
  const [selected, setSelected] = useState<string>('');

  return (
    <SafeAreaView style={{height: '100%', justifyContent: 'center'}}>
      <Text
        style={{
          fontFamily: 'SofiaProBlack',
          color: '#11535C',
          fontSize: 20,
          paddingLeft: 16,
          marginTop: 50,
        }}>
        What are you grateful for today?
      </Text>
      <TextInput
        placeholder="Start typing here..."
        style={{
          alignSelf: 'center',
          marginBottom: 32,
          marginTop: 16,
          width: width - 40,
          height: 180,
          backgroundColor: '#F2F2F280',
          color: '#150E00',
          padding: 16,
          textAlignVertical: 'top',
          borderRadius: 5,
          fontFamily: 'Montserrat-Regular',
        }}
        multiline
      />

      <Text
        style={{
          fontFamily: 'SofiaProBlack',
          color: '#11535C',
          fontSize: 20,
          paddingLeft: 16,
          marginBottom: 16,
        }}>
        How are you feeling now?
      </Text>
      <Selection
        selected={selected}
        setSelected={setSelected}
        text="Better"
        itemKey="better"
      />
      <Selection
        selected={selected}
        setSelected={setSelected}
        text="Worse"
        itemKey="worse"
      />
      <Selection
        selected={selected}
        setSelected={setSelected}
        text="The same"
        itemKey="same"
      />

      <View style={styles.buttonContainer}>
        <SecondaryButton
          size="small"
          text="Back"
          onPress={() => navigation.goBack()}
        />
        <PrimaryButton
          size="small"
          text="Confirm"
          onPress={() =>
            navigation.navigate('SuccessApricity', {pageFrom: 'Gratitude'})
          }
          disabled={selected != '' ? false : true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 64,
    marginBottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 344,
    alignSelf: 'center',
  },
});
