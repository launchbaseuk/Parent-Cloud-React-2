import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';
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
          'https://hub.parent-cloud.com/wp-json/wp/v2/livelearning?per_page=100',
        );
        response = await response.json();
        
        response = response.filter((talk: any) => {
          const date = talk.acf.ll_call_date.split('-');
          const year = date[0];
          const month = date[1];
          const day = date[2];

          const monthNow = moment().format('MM');
          const dayNow = moment().format('DD');
          const yearNow = moment().format('YYYY');

          const time = talk.acf.ll_call_time.split(':');
          const hour = time[0];
          const minute = time[1];

          const hourNow = moment().format('HH');
          const minuteNow = moment().format('mm');

          if(year >= yearNow) {
            if(month > monthNow) {
              return true;
            }
            if(month == monthNow) {
              if(day >= dayNow) {
                if(day == dayNow && month == monthNow && year == yearNow) {
                  if(hour >= hourNow) {
                    return true;
                  }
                } else {
                  return true;
                }
              }
            }
          }
        });

        let sortedResponses = response.sort((a, b) => {
          if (a.acf.ll_call_date < b.acf.ll_call_date) {
            return -1;
          }
          if (a.acf.ll_call_date > b.acf.ll_call_date) {
            return 1;
          }
          if (a.acf.ll_call_time < b.acf.ll_call_time) {
            return -1;
          }
          if (a.acf.ll_call_time > b.acf.ll_call_time) {
            return 1;
          }
          return 0;
        });

        setLiveTalks(sortedResponses);
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
      {/* <Image source={require("../../images/Clouds.png")} style={{ position: "absolute", zIndex: -1, width: width, backgroundColor: "transparent" }} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
