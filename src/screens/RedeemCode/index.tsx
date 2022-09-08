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
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 4}}>
        <BackButton text={'1-2-1 Sessions'} />

        <Text style={[styles.sectionTitle, {marginBottom: 16}]}>
          Redeem Coupon
        </Text>

        <View style={styles.content}>
          {/* <Text style={{paddingBottom: 32}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </Text> */}
          <Text style={{paddingBottom: 80}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Text>
        </View>
        <View style={styles.centerCodeText}>
          <Text style={styles.codeText}>Code 123</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <SecondaryButton size="small" text="Cancel" />
        <PrimaryButton size="small" text="Redeem" />
      </View>
    </SafeAreaView>
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
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 40,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  content: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    maxWidth: 350,
    paddingLeft: 20,
  },
  centerCodeText: {
    height: '50%',
    justifyContent: 'center',
  },
  codeText: {
    color: '#11535C',
    fontFamily: 'SofiaProBlack',
    fontSize: 39,
    alignSelf: 'center',
    opacity: 0.5,
  },
});
