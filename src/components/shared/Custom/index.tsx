import React, {useEffect} from 'react';
import {useState} from 'react';

import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Sound from 'react-native-sound';
const Custom = () => {
  const [music, setMusic] = useState(null);
  const [second, setSecond] = useState(0);
  const [duration, setDuration] = useState(0);
  const play = () => {
    let summer = new Sound('../AudioPlayer/advertising.mp3', null, err => {
      if (err) {
        console.log('hata', err);
        return;
      }
      summer.play(success => {
        console.log('end', success);
      });
      setDuration(summer.getDuration());
    });
    console.log('summer', summer);
    setMusic(summer);
  };
  useEffect(() => {
    if (music) {
      let id = setInterval(() => {
        music.getCurrentTime((second, play) => {
          setSecond(second);
        });
      }, 100);
    }
  }, [music]);
  const setVolume = type => {
    const volume = music?.getVolume();
    console.log(volume);
    if (type == '+') {
      const newVolume = volume + 0.1;
      music?.setVolume(newVolume);
    } else {
      const newVolume = volume - 0.1;
      music?.setVolume(newVolume);
    }
  };
  return (
    <SafeAreaView>
      <Button
        title="Play"
        onPress={() => {
          play();
        }}
      />
      <Button
        title="Pause"
        onPress={() => {
          music?.pause();
        }}
      />

      <Button
        title="Play"
        onPress={() => {
          music?.play();
        }}
      />

      <Button
        title="Stop"
        onPress={() => {
          music?.stop();
        }}
      />

      <Button
        title="Vol"
        onPress={() => {
          setVolume('+');
        }}
      />

      <Button
        title="Vol Min"
        onPress={() => {
          setVolume('-');
        }}
      />

      <Button
        title="İleri Sar"
        onPress={() => {
          music?.setCurrentTime(100);
        }}
      />

      <Button
        title="Kontrol"
        onPress={() => {
          console.log(music?.isPlaying());
        }}
      />

      <Text>
        {second} / Total Second {duration}
      </Text>
    </SafeAreaView>
  );
};
export default Custom;
