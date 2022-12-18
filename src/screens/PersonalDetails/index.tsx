import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';
import DetailsEditInput from '../../components/DetailsEditInput';
import CountryPicker from 'react-native-country-picker-modal'

// Images
import placeholderImage from '../../images/PlaceholderImage.png';
import getCountryName from '../../functions/getCountryName';

const {width, height} = Dimensions.get('window');
export default function PersonalDetails() {
  const [details, setDetails] = useState<any>([]);
  const [id, setId] = useState<number>();
  const [name, setName] = useState<string>("");
  const [last, setLast] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [changed, setChanged] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);
  
  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        setChanged(false);
        let response = await fetch(`https://parentcloud.borne.io/wp-json/mp/v1/members?search=${await AsyncStorage.getItem("user_email")}`, {
          headers: {
            // "Authorization": "Bearer " + await AsyncStorage.getItem("token"),
            "MEMBERPRESS-API-KEY": "8T5AkgBptM"
          }
        });
        response = await response.json();
        console.log(response)

        setDetails(response[0]);
        setName(response[0].first_name)
        setLast(response[0].last_name)
        setEmail(response[0].email)
        setAddress(response[0].address["mepr-address-one"] || "Address")
        setCity(response[0].address["mepr-address-city"] || "City")
        setState(response[0].address["mepr-address-state"] || "State")
        setCountry(response[0].address["mepr-address-country"] || "Country")
        setPostCode(response[0].address["mepr-address-zip"] || "Post Code")

        setId(response[0].id);
      })();
    }, [refetch])
  );

  const onSelect = (country) => {
    setCountry(country.cca2);
    // setCountryName(country)
  }

  const handlePress = async () => {
    let response: any = await fetch(`https://parentcloud.borne.io/wp-json/wp/v2/users/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + await AsyncStorage.getItem("token"),
      },
      body: JSON.stringify({
        first_name: name,
        last_name: last,
        email: email,
        meta: {
          city: city,
          state: state,
          zip: postCode,
          country: country
        }
      })
    });
    response = await response.json();
    await AsyncStorage.setItem("user_email", email);

    let responseAddress: any = await fetch(`https://parentcloud.borne.io/wp-json/mp/v1/members/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "MEMBERPRESS-API-KEY": "8T5AkgBptM"
      },
      body: JSON.stringify({
        "email": email,
        "address1": address,
        "city": city,
        "state": state,
        "zip": postCode,
        "country": country
      })
    });
    responseAddress = await responseAddress.json();

    if(response.id && responseAddress.id) {
      setChanged(false);
      setRefetch(!refetch);
    }
  }

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
            {name + " " + last}
          </Text>
        </View>

        <DetailsEditInput setChanged={setChanged} setText={setName} text={name} />
        <DetailsEditInput setChanged={setChanged} setText={setLast} text={last} />
        <DetailsEditInput setChanged={setChanged} setText={setEmail} text={email} />
        <DetailsEditInput setChanged={setChanged} setText={setAddress} text={address} />
        <DetailsEditInput setChanged={setChanged} setText={setCity} text={city} />
        <DetailsEditInput setChanged={setChanged} setText={setState} text={state} />
        {/* <DetailsEditInput setChanged={setChanged} setText={setCountry} text={country} /> */}
        <View style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", height: 44, marginTop: 8 }}>
          <CountryPicker
            {...{
              countryCode: country,
              onSelect,
            }}
            containerButtonStyle={{width: width - 40, height: "100%", alignSelf: 'center', borderRadius: 5, backgroundColor: '#F2F2F280', justifyContent: 'center', paddingLeft: 16}}
          />
          <Text style={{ position: "absolute", zIndex: -1, left: 60, fontSize: 14, fontFamily: "Montserrat-Medium", color: "black" }}>{getCountryName(country)}</Text>
        </View>
        <DetailsEditInput setChanged={setChanged} setText={setPostCode} text={postCode} />

        {changed && (
          <TouchableOpacity onPress={handlePress} style={{ marginTop: 40, width: width - 40, height: 44, borderRadius: 5, backgroundColor: "#11535C", alignSelf: "center", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontFamily: 'SofiaProBlack', color: '#fff', fontSize: 16 }}>Save</Text>
          </TouchableOpacity>
        )}
      </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
