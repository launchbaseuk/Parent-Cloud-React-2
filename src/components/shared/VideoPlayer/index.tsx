import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import VideoPlayer from 'react-native-video-controls';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../BackButton';
import Loader from '../../Loader';
import PlayIconBig from '../../../icons/svg/PlayIconBig';
import FastImage from 'react-native-fast-image';
import Orientation from 'react-native-orientation-locker';

const { width, height } = Dimensions.get("window");
const VideoPlayerShared = ({ route }: any) => {
  const [video, setVideo] = useState({
    thumbnailUrl: '',
    videoUrl: '',
    video: '',
  });
  const navigation = useNavigation();
  const [image, setImage] = useState<string>("");
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  console.log('videoId', route.params.videoId);

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

  const handleChangeOrientation = (e: string) => {
    if(e.includes("LANDSCAPE")) {
      setFullScreen(true);
    } else {
      setFullScreen(false);
    }
  }

  useEffect(() => {
    Orientation.addDeviceOrientationListener(handleChangeOrientation);
  }, []);

  return (
    <VideoPlayer
      // ref={ref => {
      //   this.player = ref;
      // }}
      source={{ uri: video.videoUrl }}
      navigator={navigation}
      fullscreen={fullScreen}
      resizeMode={fullScreen ? 'cover' : 'contain'}
    />
  )
};

const styles = StyleSheet.create({
  fullscreenVideo: {
    backgroundColor: 'black',
    elevation: 1,
  },
});

export default VideoPlayerShared;
