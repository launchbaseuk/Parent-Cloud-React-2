import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, ScrollView, StyleSheet} from 'react-native';
import RenderHtml from 'react-native-render-html';
import Pdf from 'react-native-pdf';

// Components
import BackButton from '../../components/BackButton';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
export default function PDFViewer({navigation, route}: any) {
  const title = route?.params?.title;
  const text = {
    html: route?.params?.text,
  };
  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    // cache: true,
  };
  console.log(route.params)

  return (
    <SafeAreaView>
      <BackButton text={title || "PDF Title"} />

      <View style={styles.container}>
      {text.html ? (
          <ScrollView style={{ width: width - 50, alignSelf: "center", backgroundColor: "#F2F2F250", borderRadius: 5, paddingLeft: 16, paddingRight: 16, paddingTop: 16, paddingBottom: 16 }}>
            <Text style={{ fontFamily: "Montserrat-Regular", color: "#150E00", fontSize: 16 }}>{text.html}</Text>
          </ScrollView>
        ) : (
          <Pdf
            trustAllCerts={false}
            source={{uri: encodeURI(route?.params?.pdf)}}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    // flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
