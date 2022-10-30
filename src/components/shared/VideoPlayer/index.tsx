import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import Video from "react-native-video";
import { WebView } from 'react-native-webview';

import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const { width, height } = Dimensions.get("window");
const VideoPlayerShared = ({route}: any) => {
  const [video, setVideo] = useState({
    thumbnailUrl: '',
    videoUrl: '',
    video: '',
  });
  const navigation = useNavigation();

  // useEffect(() => {
  //   fetch(`${route.params.filepath}`)
  //     .then(res => res.json())
  //     .then(res =>
  //       setVideo({
  //         thumbnailUrl: res.video.thumbs['640'],
  //         videoUrl:
  //           res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
  //         video: res.video,
  //       }),
  //     );
  // }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <VideoPlayer
        // ref={ref => {
        //   this.player = ref;
        // }}
        source={{ uri: route.params.filepath.toString() }}
        navigator={navigation}
        fullscreen={false}
        resizeMode={'contain'}
      /> */}
      <WebView
        source={{ uri: route.params.filepath.toString() }}
        style={{ width: width, height: height }}
        javaScriptEnabled
        scalesPageToFit
      />
    </SafeAreaView>
  );
};

export default VideoPlayerShared;
