import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

// Components
import Selection from '../../components/shared/Selection';
import PrimaryButton from '../../components/shared/PrimaryButton';
import SecondaryButton from '../../components/shared/SecondaryButton';
import Questions from './Questions';

const {width, height} = Dimensions.get('window');
export default function Thoughts({navigation, route}: any) {
  const [selected, setSelected] = useState<string>('');
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const options = [
    {text: 'All or nothing thinking', key: 'allOrNothing'},
    {text: 'Overgeneralisation', key: 'overgeneralisation'},
    {text: 'Catastrophising', key: 'catastrophising'},
    {text: 'Jumping to conclusions', key: 'jumpingToConclusions'},
    {text: 'Emotional reasoning', key: 'emotionalReasoning'},
    {text: 'Should or must statements', key: 'shouldOrMustStatements'},
    {text: 'Labelling', key: 'labelling'},
    {text: 'Blaming', key: 'blaming'},
  ];

  return (
    <View>
      {confirmed ? (
        <Questions
          optionPrevious={selected}
          feeling={route.params.feeling}
          otherFeeling={route.params.otherFeeling}
          activity={route.params.activity}
        />
      ) : (
        <>
          <Text style={styles.headerText}>
            Which cognitive distortions does this thought have?
          </Text>

          <View style={{width: width, justifyContent: 'center', marginTop: 32}}>
            {options.map((option: any, index: number) => {
              return (
                <Selection
                  key={index}
                  text={option.text}
                  itemKey={option.key}
                  selected={selected}
                  setSelected={setSelected}
                />
              );
            })}
          </View>

          <View style={styles.buttonContainer}>
            <SecondaryButton
              size="small"
              text="Back"
              onPress={() => {
                setConfirmed(false);
                navigation.goBack();
              }}
            />
            <PrimaryButton
              size="small"
              text="Confirm"
              onPress={() => setConfirmed(true)}
              disabled={selected != '' ? false : true}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'SofiaProBlack',
    color: '#11535C',
    fontSize: 20,
    paddingLeft: 16,
    marginTop: 70,
  },
  buttonContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 344,
    alignSelf: 'center',
  },
});
