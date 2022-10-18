import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import BackButton from '../../components/BackButton';
import {DropDown} from '../../components/DropDown';
import Selection from '../../components/shared/Selection';

import {LineChart, Line} from 'recharts';

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

      {/* <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart> */}

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
