import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Images
import guidespicture from '../../images/GuidesPicture.png';

// Components
import PrimaryButton from '../shared/PrimaryButton';

const {width, height} = Dimensions.get('window');
function GuideCardSmall({text, redirect, title, fileLink, vimeoLink }: any) {
  const navigation = useNavigation();

  // const handlePress = () => {
  //   if (fileLink) {
  //     RNFetchBlob.config({
  //       fileCache: true,
  //       addAndroidDownloads: {
  //         useDownloadManager: true,
  //         notification: true,
  //         path: RNFetchBlob.fs.dirs.DownloadDir + '/' + title + '.pdf',
  //         description: 'Downloading file.',
  //       },
  //     })
  //       .fetch('GET', link)
  //       .then(res => {
  //         console.log('The file saved to ', res.path());
  //       });
  //   } else {
  //     navigation.navigate('PDFViewer', {text: redirect});
  //   }
  // };

  return (
    <View style={styles.guidecardsmallContainer}>
      <Text
        style={{
          fontFamily: 'SofiaProBlack',
          fontSize: 16,
          color: '#11535C',
          marginBottom: 4,
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: 'Montserrat-Regular',
          fontSize: 13,
          color: '#150E00',
          width: 130,
        }}
        numberOfLines={4}>
        {text}
      </Text>

      <View
        style={{
          marginLeft: -8,
          justifyContent: 'center',
          alignItems: 'center',
          width: 150,
          marginTop: 30,
          bottom: 10,
          position: 'absolute',
        }}>
        <PrimaryButton
          size="mini"
          text="Download"
          onPress={() =>
            navigation.navigate('PDFViewer', {text: redirect, pdf: fileLink})
          }
        />
      </View>
    </View>
  );
}

function GuideCardBig({title, excerpt, content}: any) {
  const navigation = useNavigation();
  console.log(content);
  return (
    <View style={styles.guidecardbigContainer}>
      <Image source={guidespicture} style={{marginTop: 16, marginBottom: 16}} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: width - 40,
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'SofiaProBlack',
              fontSize: 14,
              width: 180,
              color: '#11535C',
              marginBottom: 4,
            }}>
            {title}
          </Text>
          <Text
            style={{
              width: 180,
              color: '#11535C',
              fontFamily: 'Montserrat-Regular',
              fontSize: 13,
            }}
            numberOfLines={2}>
            {excerpt}
          </Text>
        </View>

        <View style={{alignSelf: 'flex-end', marginBottom: 6}}>
          <PrimaryButton
            size="mini"
            text="Download"
            onPress={() => navigation.navigate('PDFViewer', {text: content})}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  guidecardsmallContainer: {
    backgroundColor: '#F2F2F280',
    width: 150,
    height: 220,
    borderRadius: 5,
    paddingLeft: 8,
    paddingTop: 8,
    marginLeft: 8,
  },
  guidecardbigContainer: {
    width: width - 40,
    height: 245,
    borderRadius: 5,
    backgroundColor: '#F2F2F280',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export {GuideCardSmall, GuideCardBig};
