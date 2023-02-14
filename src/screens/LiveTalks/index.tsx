import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { decode } from 'html-entities';
import BackButton from '../../components/BackButton';
import ListItem from '../../components/ListItem';
import TagFilter from '../../components/TagFilter';
import VideoListItem from '../../components/VideoListItem';
import { useNavigation } from '@react-navigation/native';
// Image
import listitemimage from '../../images/ListItemImage.png';

import Loader from '../../components/Loader';
import ComingSoon from '../../images/svg/ComingSoon';
import PrimaryButton from '../../components/shared/PrimaryButton';
import LiveTalkItem from '../../components/LiveTalkItem';
import moment from 'moment';

const { width, height } = Dimensions.get("window");
export default function LiveTalks() {
  const [liveTalks, setLiveTalks] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        setLoading(true);
        let response = await fetch(
          'https://hub.parent-cloud.com/wp-json/wp/v2/livelearning',
        );
        response = await response.json();

        setLiveTalks(response);
        setLoading(false);
      })();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text={'Live Talks'} />

        <View style={{height: 12}} />

        {loading ? (
          <Loader />
        ) : (
          liveTalks?.map((talk: any, index: number) => {
            const details = moment(talk.acf.ll_call_date).format('DD/MM/YYYY') + " - " + talk.acf.ll_call_time;

            return (
              <LiveTalkItem
                title={decode(talk.title.rendered)}
                description={decode(talk.acf.ll_description).replace(/(<([^>]+)>)/gi, '').trim()}
                key={talk.id}
                externalLink={talk.acf.ll_external_sign_up_url}
                imageLink={talk._links["wp:featuredmedia"][0].href}
                details={details}
              />
            );
          })
        )}
        {/* <View style={{ width: width, height: height - 200, justifyContent: "center", alignItems: "center" }}>
          <ComingSoon />
          <Text style={{ fontFamily: "SofiaProBlack", color: "#11535C", fontSize: 25, marginTop: 32, marginBottom: 8 }}>Coming soon...</Text>
          <Text style={{ fontFamily: "Montserrat-Regular", color: "#150E00", fontSize: 16, marginBottom: 64, width: width - 140, textAlign: "center" }}>This page is coming soon, please stay tuned!</Text>

          <PrimaryButton text="Go back" onPress={() => navigation.goBack()} />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
