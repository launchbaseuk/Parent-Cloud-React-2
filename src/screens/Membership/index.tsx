import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';

const {width, height} = Dimensions.get('window');
export default function Membership() {
  const [status, setStatus] = useState<any>(undefined);
  const [subscription, setSubscription] = useState<any>(undefined);
  
  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        let response = await fetch(`https://parentcloud.borne.io/wp-json/mp/v1/members?search=${await AsyncStorage.getItem("user_email")}`, {
          headers: {
            // "Authorization": "Bearer " + await AsyncStorage.getItem("token"),
            "MEMBERPRESS-API-KEY": "8T5AkgBptM"
          }
        });
        response = await response.json();
        const subId = response[0]?.recent_subscriptions[0]?.id;
        let responseSub = await fetch(`https://parentcloud.borne.io/wp-json/mp/v1/subscriptions/${subId}`, {
          headers: {
            "MEMBERPRESS-API-KEY": "8T5AkgBptM"
          }
        });
        responseSub = await responseSub.json();

        setSubscription(responseSub);
        setStatus(responseSub?.status[0].toUpperCase() + responseSub?.status.slice(1).toLowerCase())
      })();
    }, [])
  );
  
  return (
    <SafeAreaView>
      {subscription && status ? (
        <View style={styles.wrapper}>
          <BackButton text="Membership" />
          <View style={{height: 32}} />

          <View style={styles.itemWrapper}>
            <View style={styles.insideContainer}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  color: '#150E00',
                  fontSize: 16,
                  width: '50%',
                }}>
                Membership
              </Text>
              <Text
                style={{
                  fontFamily: 'SofiaProBlack',
                  color: '#11535C',
                  fontSize: 16,
                  marginLeft: 26,
                }}>
                {subscription?.membership?.title}
              </Text>
            </View>
          </View>
          <View style={styles.itemWrapper}>
            <View style={styles.insideContainer}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  color: '#150E00',
                  fontSize: 16,
                  width: '50%',
                }}>
                Subscription
              </Text>
              <Text
                style={{
                  fontFamily: 'SofiaProBlack',
                  color: '#11535C',
                  fontSize: 16,
                  marginLeft: 26,
                }}>
                Sub Account
              </Text>
            </View>
          </View>
          <View style={styles.itemWrapper}>
            <View style={styles.insideContainer}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  color: '#150E00',
                  fontSize: 16,
                  width: '50%',
                }}>
                Status
              </Text>
              <Text
                style={{
                  fontFamily: 'SofiaProBlack',
                  color: '#11535C',
                  fontSize: 16,
                  marginLeft: 26,
                }}>
                {status}
              </Text>
            </View>
          </View>
          <View style={styles.itemWrapper}>
            <View style={styles.insideContainer}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  color: '#150E00',
                  fontSize: 16,
                  width: '50%',
                }}>
                Created
              </Text>
              <Text
                style={{
                  fontFamily: 'SofiaProBlack',
                  color: '#11535C',
                  fontSize: 16,
                  marginLeft: 26,
                }}>
                {subscription?.membership?.date.split("-")[1] + "/" + subscription?.membership?.date.split("-")[0]}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    width: width - 40,
    paddingVertical: 10,
    backgroundColor: '#F2F2F280',
    // flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 4,
  },
  wrapper: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  insideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
});
