import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, ScrollView, StyleSheet} from 'react-native';
import RenderHtml from 'react-native-render-html';
import Pdf from 'react-native-pdf';

// Components
import BackButton from '../../components/BackButton';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
export default function PDFViewer({navigation, route}: any) {
  const text: any = {
    html: route?.params?.text,
  };
  const pdfFile = {uri: route?.params?.pdf, cache: true};
  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    // cache: true,
  };
  console.log(text);

  return (
    <SafeAreaView>
      <BackButton text="PDF Title" />

      <ScrollView contentContainerStyle={styles.container}>
        {text ? 
        <ScrollView style={{ width: width - 50, alignSelf: "center", backgroundColor: "#F2F2F250", borderRadius: 5, paddingLeft: 16, paddingRight: 16, paddingTop: 16, paddingBottom: 16 }}>
          <Text style={{ fontFamily: "Montserrat-Regular", color: "#150E00", fontSize: 16 }}>{text.html}</Text>
        </ScrollView>
         : (
          <Pdf
            trustAllCerts={false}
            source={pdfFile}
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
      </ScrollView>
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
