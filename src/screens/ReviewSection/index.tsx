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

import {LineChart} from 'react-native-chart-kit';
import StaticSelection from '../../components/shared/StaticSelection';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import getCheckIns from '../../functions/getCheckIns';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
const {width, height} = Dimensions.get('window');
const ReviewSection = ({navigation, route}: any) => {
  const [data, setData] = useState([]);
  const [graph, setGraph] = useState<Array<number>>([]);
  const [latestData, setLatestData] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async() => {
        setGraph([]);
        const email = await AsyncStorage.getItem('user_email');
        const request = await fetch(`https://parentcloud.borne.io/wp-json/swgraph/v1/user/?mail=${email}`);
        const response = await request.json();

        Object.values(response).forEach((value: number) => {
          setGraph(prev => [...prev, value]);
        });
      })();
    }, [])
  )

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const email = await AsyncStorage.getItem('user_email');
        const token = await AsyncStorage.getItem('token');

        let checkIns: any = await getCheckIns(email, token);

        let groupedCheckIns: any = {};
        for (let i = 0; i < checkIns.length; i++) {
          let date = checkIns[i].date_gmt;
          date = new Date(date);
          
          // push dates into array if the array length is less than 3, otherwise compare dates and push the latest date
          if (latestData.length < 3) {
            latestData.push(checkIns[i]);
          } else {
            let latestDate = new Date(latestData[0].date_gmt);
            if (date > latestDate) {
              latestData.shift();
              latestData.push(checkIns[i]);
            }
          }

          const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
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
    }, []),
  );

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
          {graph.length > 0 && (
            <LineChart
              data={{
                labels: ['🙁 Awful', '😔 Bad', '🙂 Good', '😃 Great'],
                datasets: [
                  {
                    data: graph,
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
          )}
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
        {latestData.map((data: any) => {
          const date = new Date(data.date_gmt);
          const day = date.getDay();
          const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const dayName = dayNames[day];
          const formattedDate = `${(date.getDate() + 1 < 10 ? "0" + date.getDate() : date.getDate())}/${(date.getMonth() + 1 < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1)}/${date.getFullYear()}`;

          return (
            <StaticSelection text={`${dayName} - ${formattedDate}`} route="ReviewDetails" checkIn={data} />
          )
        })}
        <View style={{paddingBottom: 100}}>
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
              <DropDown title={key}>
                {Object.values(data[key]).map((checkIn: any) => {
                  let date = checkIn.modified;
                  date = new Date(date);
                  date =
                    (date.getDate() < 10
                      ? '0' + date.getDate()
                      : date.getDate()) +
                    '/' +
                    (date.getMonth + 1 < 10
                      ? '0' + date.getMonth() + 1
                      : date.getMonth() + 1) +
                    '/' +
                    date.getFullYear();

                  const handleNavigation = () => {
                    navigation.navigate('ReviewDetails', {checkIn: checkIn});
                  };

                  return (
                    <TouchableOpacity
                      style={styles.buttonPrevious}
                      onPress={handleNavigation}>
                      <Text>{date}</Text>
                    </TouchableOpacity>
                  );
                })}
              </DropDown>
            );
          })}
        </View>
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
    backgroundColor: '#e1e2e3',
    justifyContent: 'center',
    marginTop: 5,
  },
});
