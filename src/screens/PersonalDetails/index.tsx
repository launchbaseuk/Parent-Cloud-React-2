import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';
import DetailsEditInput from '../../components/DetailsEditInput';

// Images
import placeholderImage from '../../images/PlaceholderImage.png';

const {width, height} = Dimensions.get('window');
export default function PersonalDetails() {
  const [details, setDetails] = useState<any>([]);
  
  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        let response = await fetch(`http://parentcloud.borne.io/wp-json/mp/v1/members?search=${await AsyncStorage.getItem("user_email")}`, {
          headers: {
            // "Authorization": "Bearer " + await AsyncStorage.getItem("token"),
            "MEMBERPRESS-API-KEY": "8T5AkgBptM"
          }
        });
        response = await response.json();

        setDetails(response[0]);
      })();
    }, [])
  );

  // details.first_name
  // details.last_name
  // details.email
  // details.address.mepr-address-one
  // details.address.mepr-address-city
  // details.address.mepr-address-state
  // details.address.mepr-address-country
  // details.address.mepr-address-zip

  return (
    <SafeAreaView>
      <BackButton text="Personal Details" />

      {details.length == 0 ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <View
          style={{
            width: width - 40,
            height: 140,
            backgroundColor: '#F2F2F280',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 5,
            paddingLeft: 16,
            marginTop: 40,
            marginBottom: 16,
          }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 350,
              backgroundColor: '#11535C',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 16,
            }}>
            <Image source={placeholderImage} style={{height: 50, width: 50}} />
          </View>
          <Text
            style={{fontFamily: 'SofiaProBlack', color: '#150E00', fontSize: 22}}>
            {details.first_name + " " + details.last_name}
          </Text>
        </View>

        <DetailsEditInput text={details.first_name} />
        <DetailsEditInput text={details.last_name} />
        <DetailsEditInput text={details.email} />
        <DetailsEditInput text={details.address["mepr-address-city"] || "City"} />
        <DetailsEditInput text={details.address["mepr-address-state"] || "State"} />
        <DetailsEditInput text={details.address["mepr-address-country"] || "Country"} />
        <DetailsEditInput text={details.address["mepr-address-zip"] || "Post Code"} />
      </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
