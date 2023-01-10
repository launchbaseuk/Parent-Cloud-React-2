import React, {useEffect, useState} from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../BackButton';
import Loader from '../../Loader';
import PlayIconBig from '../../../icons/svg/PlayIconBig';
import FastImage from 'react-native-fast-image'

const { width, height } = Dimensions.get("window");
const VideoPlayerShared = ({route}: any) => {
  const [video, setVideo] = useState({
    thumbnailUrl: '',
    videoUrl: '',
    video: '',
  });
  const navigation = useNavigation();
  const [paused, setPaused] = useState<boolean>(true);
  const [image, setImage] = useState<string>("");

  console.log('aaa', route.params.videoId);
  const handlePause = () => {
    setPaused(!paused);
  }

  useEffect(() => {
    const VIMEO_ID = '775794041';
    fetch(`https://player.vimeo.com/video/${route.params.videoId}/config`)
      .then(res => res.json())
      .then(res =>
        setVideo({
          thumbnailUrl: res.video.thumbs['640'],
          videoUrl:
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video,
        }),
      );
  }, []);

  useEffect(() => {
    setImage(route.params.poster);
    console.log(route.params.poster)
  }, [route.params.poster]);

  if(!paused) {
    return (
      <VideoPlayer
        // ref={ref => {
        //   this.player = ref;
        // }}
        source={{uri: video.videoUrl}}
        navigator={navigation}
        fullscreen={false}
        resizeMode={'contain'}
        paused={paused}
      />
    )
  } else {
    return (
      <SafeAreaView>
        <BackButton text="Video Details" />
        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", marginTop: 25 }} onPress={handlePause}>
          <View style={{ position: "absolute", zIndex: 1000 }}>
            <PlayIconBig />
          </View>
          <FastImage key={route.params.poster} source={{ uri: route.params.poster, priority: FastImage.priority.high }} style={{ width: width - 20, height: height / 1.4, alignSelf: "center", borderRadius: 20, backgroundColor: "#f3f3f3" }} />
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
};

export default VideoPlayerShared;
