import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, ScrollView, StyleSheet} from 'react-native';
import RenderHtml from 'react-native-render-html';
import Pdf from 'react-native-pdf';

// Components
import BackButton from '../../components/BackButton';

const {width, height} = Dimensions.get('window');
export default function PDFViewer({navigation, route}: any) {
  const text = {
    html: route?.params?.text,
  };
  const pdfFile = {uri: route?.params?.pdf, cache: true};
  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    // cache: true,
  };

  return (
    <View>
      <BackButton text="PDF Title" />

      <View style={styles.container}>
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
      </View>
    </View>
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
