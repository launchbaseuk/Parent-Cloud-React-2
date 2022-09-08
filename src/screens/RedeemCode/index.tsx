import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import BackButton from '../../components/BackButton';
import PrimaryButton from '../../components/shared/PrimaryButton';
import SecondaryButton from '../../components/shared/SecondaryButton';

const {width, height} = Dimensions.get('window');

export default function RedeemCode() {
  return (
    <View>
      <SafeAreaView>
        <BackButton text={'1-2-1 Sessions'} />

        <Text style={[styles.sectionTitle, {marginBottom: 16}]}>
          Service purchased name...
        </Text>

        <View style={styles.content}>
          <View>
            <Text style={{paddingBottom: 32}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </Text>
            <Text style={{paddingBottom: 80}}>
              You will be redirected to our website to complete this payment.
            </Text>
          </View>
          <SecondaryButton size="small" text="Pay £ 49.00" />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: 'SofiaProBlack',
    fontSize: 20,
    color: '#11535C',
    width: width - 40,
    alignSelf: 'center',
    textAlign: 'left',
    marginTop: 41,
  },
  actionsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 40,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingBottom: 73,
    paddingTop: 32,
  },
  content: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    maxWidth: 350,
    alignItems: 'center',
    paddingLeft: 20,
  },
});
