import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView, Image, Dimensions} from 'react-native';
import BackButton from '../../components/BackButton';
import latestItems from '../../functions/latestItems';

// Components
import DynamicContentContainer from '../../components/DynamicContentContainer';

const { width, height } = Dimensions.get("window");
export default function DynamicTwo() {
  const [guides, setGuides] = useState<any>([]);
  const [videos, setVideos] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async() => {
        const items = await latestItems();

        setGuides(items[0]);
        setVideos(items[1]);
      })();
    }, [])
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text={'Latest Releases'} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>Latest Guides</Text>
          {/* MAP GUIDES */}
          {guides.map((guide: any) => {
            const excerpt = guide?.excerpt?.rendered.replace(/(<([^>]+)>)/gi, '');
            const title = guide?.title.rendered;
            const mediaId = guide?.featured_media;

            return (
              <DynamicContentContainer
                key={mediaId}
                title={title}
                excerpt={excerpt}
                mediaId={mediaId}
              />
            )
          })}

          <Text style={styles.title}>Latest Videos</Text>
          {/* MAP VIDEOS */}
        </View>
      </ScrollView>
      {/* <Image source={require("../../images/Clouds.png")} style={{ position: "absolute", zIndex: -1, width: width, backgroundColor: "transparent" }} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    marginLeft: 32,
    marginRight: 32
  },
  title: {
    color: '#11535C',
    fontSize: 20,
    fontFamily: 'SofiaProBlack',
  },
  content: {
    fontSize: 16,
    marginTop: 8,
    fontFamily: 'Montserrat-Regular',
    color: '#150E00',
    width: 312,
  },
});
