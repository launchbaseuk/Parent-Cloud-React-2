import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';

import BackButton from '../../components/BackButton';
import {DropDown} from '../../components/DropDown';
import Selection from '../../components/shared/Selection';

import {LineChart} from 'react-native-chart-kit';
import StaticSelection from '../../components/shared/StaticSelection';

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
const ReviewSection = () => {
  const [dropdown, setDropdown] = useState({
    june: false,
    july: false,
    aug: false,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/feelings/1')
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(data);

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
      <View style={{}}>
        <LineChart
          data={{
            labels: ['Awful', 'Bad', 'Good', 'Great'],
            datasets: [
              {
                data: [100, 75, 50, 0, 25],
              },
            ],
          }}
          width={Dimensions.get('window').width - 32} // from react-native
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
      </View>
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
      <StaticSelection text="Monday" route="ReviewDetails" />
      <StaticSelection text="Tuesday" route="ReviewDetails" />
      <StaticSelection text="Wednesday" route="ReviewDetails" />
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
