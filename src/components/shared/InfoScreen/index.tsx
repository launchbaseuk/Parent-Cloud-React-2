// import {useNavigation, useRoute} from '@react-navigation/native';
// import Button from '@shared/Button';
// import LinearGradient from '@shared/LinearGradient';
// import Text from '@shared/Text';
import React, {FC} from 'react';
// import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import PrimaryButton from '../PrimaryButton';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Email from '../../../images/email.png';

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 12,
    width: 279,
  },
  warningBox: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(239, 239, 239, 0.05)',
    padding: 16,
    borderRadius: 8,
    marginTop: 160,
  },
  safeArea: {flex: 1},
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  button: {
    marginVertical: 10,
  },
});

export interface IInfoScreen {
  //   title: string;
  //   subtitle: string;
  //   buttonText: string;
}

const InfoScreen: FC<IInfoScreen> = () => {
  //   const navigation = useNavigation();
  //   const route: any = useRoute();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.warningBox}>
          <Image source={Email} />
          {/* style={styles.tabBarIcon} */}

          <View style={styles.textContainer}>
            <Text style={styles.title}>aaa</Text>
            <Text style={styles.subtitle}>aaa</Text>
          </View>
        </View>
        <View>
          <PrimaryButton
            style={styles.button}
            mode={'contained'}
            // onPress={navigation.goBack}
          >
            {/* {t(route.params.buttonText)} */}
            aaa
          </PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InfoScreen;
