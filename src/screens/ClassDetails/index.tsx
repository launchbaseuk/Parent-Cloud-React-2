import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, Linking, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import WarnModal from '../../components/Modal';

// Components
import PrimaryButton from '../../components/shared/PrimaryButton';
import SecondaryButton from '../../components/shared/SecondaryButton';

// Images
import zoomicon from '../../images/ZoomIcon.png';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
export default function ClassDetails() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}>
        <View style={styles.img}>
          <Image source={{ uri: encodeURI(route.params.image) }} style={{ height: 200, width: '100%', alignSelf: 'center' }} />
        </View>

        <View style={styles.text}>
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={[styles.title, { fontSize: 16, marginTop: 4 }]}>{route.params.details}</Text>
          <Text style={styles.description}>
            {route.params.description != "" ? route.params.description : "No details for this class"}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <SecondaryButton
            size="small"
            text="Back"
            onPress={() => navigation.goBack()}
          />
          <PrimaryButton
            size="small"
            text="Register"
            onPress={() => {
              if (route.params.link && route.params.link != "" && typeof route.params.link != undefined) {
                Linking.openURL(route.params.link);
                navigation.navigate('SuccessApricity', { pageFrom: 'classDetails' })
              } else {
                setModalVisible(true);
              }
            }}
          />
        </View>
      </ScrollView>
      {/* <Image source={require("../../images/Clouds.png")} style={{ position: "absolute", zIndex: -1, width: width, backgroundColor: "transparent" }} /> */}
      <WarnModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    width: width - 40,
    backgroundColor: '#F2F2F280',
    padding: 16,
    marginBottom: 32,
  },
  title: {
    color: '#00084B',
    fontFamily: 'SofiaProBlack',
    fontSize: 20,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    color: '#150E00',
    fontSize: 16,
    marginTop: 8,
    paddingBottom: 14,
  },
  img: {
    width: width - 40,
    marginBottom: 16,
    backgroundColor: '#F2F2F280',
    paddingVertical: 32,
  },
  buttonContainer: {
    marginBottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 344,
    alignSelf: 'center',
  },
});
