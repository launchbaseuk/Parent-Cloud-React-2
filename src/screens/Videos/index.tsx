import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import {getVideos} from '../../functions/requests';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';
import TagFilter from '../../components/TagFilter';
import VideoListItem from '../../components/VideoListItem';

const {width, height} = Dimensions.get('window');
export default function Videos({navigation, route}: any) {
  const [videos, setVideos] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const response = await getVideos();
        setVideos(response);
      })();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text="Videos" />
        <View style={{height: 16}} />

        {/* <TagFilter /> */}
        <View style={{height: 16}} />

        {videos.map((video: any) => {
          // remove html from excerpt
          console.log(video._links["wp:featuredmedia"][0].href);
          const excerpt = video.excerpt.rendered.replace(/(<([^>]+)>)/gi, '');
          const details = video.content.rendered.replace(/(<([^>]+)>)/gi, '');

          // Get link inside src="" of iframe
          let vimeoLink = video.content.rendered.match(/src="([^"]+)"/);
          vimeoLink = vimeoLink[0].replace('src=', '').replace(/"/g, '');

          return (
            <VideoListItem
              text={video.title.rendered}
              description={excerpt}
              image={video._links['wp:featuredmedia']}
              vimeoLink={vimeoLink}
              details={details}
              video={video}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
