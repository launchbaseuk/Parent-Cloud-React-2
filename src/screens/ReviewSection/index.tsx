import React, {useState} from 'react';
import {ScrollView, Text, Dimensions} from 'react-native';
import BackButton from '../../components/BackButton';
import {DropDown} from '../../components/DropDown';
import Selection from '../../components/shared/Selection';

import {LineChart} from 'react-native-chart-kit';

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
const ReviewSection = () => {
  const [dropdown, setDropdown] = useState({
    june: false,
    july: false,
    aug: false,
  });

  return (
    <ScrollView>
      <BackButton text="Mood Tracker" />

      <Text
        style={{
          fontFamily: 'SofiaProBlack',
          color: '#11535C',
          fontSize: 20,
          paddingLeft: 16,
          marginTop: 50,
          marginBottom: 16,
        }}>
        Review your mood
      </Text>

      <LineChart
        data={{
          labels: ['Awful', 'Bad', 'Good', 'Great'],
          datasets: [
            {
              data: [100, 75, 50, 0, 25],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: 'white',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `#27AE604D`,
          labelColor: (opacity = 1) => `black`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#27AE604D',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      <Text
        style={{
          fontFamily: 'SofiaProBlack',
          color: '#11535C',
          fontSize: 20,
          paddingLeft: 16,
          marginTop: 50,
          marginBottom: 16,
        }}>
        Last Week
      </Text>
      <Selection
        selected={''}
        setSelected={() => console.log('')}
        text="Monday"
        itemKey="a"
      />
      <Selection
        selected={''}
        setSelected={() => console.log('')}
        text="Tuesday"
        itemKey="b"
      />
      <Selection
        selected={''}
        setSelected={() => console.log('')}
        text="Wednesday"
        itemKey="c"
      />
      <Text
        style={{
          fontFamily: 'SofiaProBlack',
          color: '#11535C',
          fontSize: 20,
          paddingLeft: 16,
          marginTop: 50,
          marginBottom: 16,
        }}>
        Previous
      </Text>
      <DropDown
        title="June"
        onPress={() => setDropdown({...dropdown, june: !dropdown.june})}
        isOpen={dropdown.june}>
        <Text>Monday 1st</Text>
        <Text>Monday 1st</Text>
        <Text>Monday 1st</Text>
        <Text>Monday 1st</Text>
      </DropDown>
      <DropDown
        title="July"
        onPress={() => setDropdown({...dropdown, july: !dropdown.july})}
        isOpen={dropdown.july}>
        <Text>Monday 1st</Text>
        <Text>Monday 1st</Text>
        <Text>Monday 1st</Text>
        <Text>Monday 1st</Text>
      </DropDown>
      <DropDown
        title="August"
        onPress={() => setDropdown({...dropdown, aug: !dropdown.aug})}
        isOpen={dropdown.aug}>
        <Text>Monday 1st</Text>
        <Text>Monday 1st</Text>
        <Text>Monday 1st</Text>
        <Text>Monday 1st</Text>
      </DropDown>
    </ScrollView>
  );
};

export default ReviewSection;
