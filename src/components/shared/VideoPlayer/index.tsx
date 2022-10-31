import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const VideoPlayerShared = ({ route }: any) => {
  const [video, setVideo] = useState({
    thumbnailUrl: '',
    videoUrl: '',
    video: '',
  });
  const navigation = useNavigation();
  console.log(route.params.filepath.videoId)

  useEffect(() => {
    (async() => {
      const VIMEO_ID = await route.params.filepath.videoIdTrimmed;
      fetch(`${route.params.filepath.videoId}`)
        .then(res => res.json())
        .then(res =>
          setVideo({
            thumbnailUrl: "res.video.thumbs['640']",
            videoUrl:
              res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
            video: "res.video",
          }),
        );
    })();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <VideoPlayer
        // ref={ref => {
        //   this.player = ref;
        // }}
        source={{uri: video.videoUrl}}
        navigator={navigation}
        fullscreen={false}
        resizeMode={'contain'}
      />
    </SafeAreaView>
  );
};

export default VideoPlayerShared;
