import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Linking, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/auth-context';

// Components
import NoSubscriptionImage from '../../images/svg/NoSubscriptionImage';
import PrimaryButton from '../../components/shared/PrimaryButton';
import SecondaryButton from '../../components/shared/SecondaryButton';

const {width, height} = Dimensions.get('window');
export default function NoSubscription() {
  const {sub, logout}: any = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (sub) {
      navigation.navigate('TabNav');
    }
  }, [sub]);

  return (
    <View style={styles.container}>
      <NoSubscriptionImage />
      <Text style={styles.primaryText}>
        You don’t have an active subscription...
      </Text>
      <Text style={styles.secondaryText}>
        Please either contact your HR team, or contact us for support!
      </Text>

      <PrimaryButton
        text="Contact Us"
        onPress={async () =>
          await Linking.openURL('mailto: info@parent-cloud.com')
        }
      />
      <View style={{height: 8}} />
      <SecondaryButton text="Cancel" onPress={logout} />

      {/* <Image source={require("../../images/Clouds.png")} style={{ position: "absolute", zIndex: -1, width: width, backgroundColor: "transparent" }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryText: {
    marginBottom: 8,
    marginTop: 32,
    width: 260,
    fontSize: 25,
    textAlign: 'center',
    color: '#11535C',
    fontFamily: 'SofiaProBlack',
  },
  secondaryText: {
    marginBottom: 63,
    color: '#150E00',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    width: width - 100,
  },
});
