import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import axios from 'axios';

import BackButton from '../../components/BackButton';
import {DropDown} from '../../components/DropDown';
import Selection from '../../components/shared/Selection';

import {LineChart} from 'react-native-chart-kit';
import StaticSelection from '../../components/shared/StaticSelection';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import getCheckIns from '../../functions/getCheckIns';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
const { width, height } = Dimensions.get("window");
const ReviewSection = ({ navigation, route }: any) => {
  const [dropdown, setDropdown] = useState({
    june: false,
    july: false,
    aug: false,
  });
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:1337/api/feelings/1')
  //     .then(res => {
  //       console.log(res);
  //       setData(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  // console.log(data);

  useFocusEffect(
    React.useCallback(() => {
      (async() => {
        const email = await AsyncStorage.getItem("user_email");
        const token = await AsyncStorage.getItem("token");

        let checkIns: any = await getCheckIns(email, token);

        let groupedCheckIns: any = {};
        for (let i = 0; i < checkIns.length; i++) {
            let date = checkIns[i].modified;
            date = new Date(date);
            const monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];
            let month = monthNames[date.getMonth()];
          
            let checkIn: any = checkIns[i];

            if (groupedCheckIns[month] === undefined) {
              groupedCheckIns[month] = [];
            }

            groupedCheckIns[month].push(checkIn);
        }

        setData(groupedCheckIns);
      })();
    }, [])
  )

  return (
    <SafeAreaView>
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
              labels: ['🙁 Awful', '😔 Bad', '🙂 Good', '😃 Great'],
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
        {Object.keys(data).map((key: any) => {
          return (
            <DropDown
              title={key}
              onPress={() => setDropdown({...dropdown, june: !dropdown.june})}
              isOpen={dropdown.june}>
                {Object.values(data[key]).map((checkIn: any) => {
                  let date = checkIn.modified;
                  date = new Date(date);
                  date = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate()) + "/" + (date.getMonth + 1 < 10 ? ("0" + date.getMonth() + 1) : date.getMonth() + 1) + "/" + date.getFullYear();

                  const handleNavigation = () => {
                    navigation.navigate("ReviewDetails", {checkIn: checkIn})
                  }

                  return (
                    <TouchableOpacity style={styles.buttonPrevious} onPress={handleNavigation}>
                      <Text>{date}</Text>
                    </TouchableOpacity>
                  )
                })}
            </DropDown>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewSection;

const styles = StyleSheet.create({
  buttonPrevious: {
    width: width * 0.9,
    height: 40,
    borderRadius: 8,
    paddingLeft: 20,
    backgroundColor: "#e1e2e3",
    justifyContent: "center",
    marginTop: 5,
  }
});
