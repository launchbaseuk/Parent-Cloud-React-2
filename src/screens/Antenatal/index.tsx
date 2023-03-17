import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';
import BackButton from '../../components/BackButton';
import ListItem from '../../components/ListItem';
import TagFilter from '../../components/TagFilter';
import moment from 'moment';
import LiveTalkItem from '../../components/LiveTalkItem';
import { decode } from "html-entities";
import Loader from "../../components/Loader";

// Image
// import listitemimage from '../../images/ListItemImage.png';

const { width, height } = Dimensions.get("window");
export default function Antenatal() {
  // const [talks, setTalks] = useState<any>([]);
  // const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   (async() => {
  //     setLoading(true);
  //     const request = await fetch("https://hub.parent-cloud.com/wp-json/wp/v2/livelearning");
  //     const response = await request.json();

  //     const requestCategories = await fetch("https://hub.parent-cloud.com/wp-json/wp/v2/categories");
  //     const responseCategories = await requestCategories.json();

  //     const category = responseCategories.filter((category: any) => category.name == "Antenatal")[0].id;
      
  //     setTalks(response.filter((item: any) => item.categories.includes(category)));
  //     setLoading(false);
  //   })();
  // }, []);

  return (
    <SafeAreaView style={{flex: 1, paddingBottom: 20}}>
      <BackButton text={'Parent Cloud Classes'} />

      <View style={{ height: 30 }}></View>

      {/* {loading ? <Loader /> : (
        talks.length > 0 ? (
          talks?.map((talk: any, index: number) => {
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
        ) : (
          <Text style={styles.text}>No Antenatal Classes available at the moment. Please check back later</Text>
        )
      )} */}
      <WebView
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        style={{width: width, flex: 1, marginTop: -80}}
        source={{uri: 'https://parentcloudandwellnesscloud.as.me/schedule.php?appointmentType=category%3AParent+Cloud+Classes'}}
        automaticallyAdjustContentInsets={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    width: width - 80,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
    marginTop: 15
  }
});
