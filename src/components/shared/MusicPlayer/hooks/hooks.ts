import {useCallback, useEffect, useState} from 'react';
import TrackPlayer, {usePlaybackState, State} from 'react-native-track-player';

export const useDebouncedValue = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useOnTogglePlayback = () => {
  const state = usePlaybackState();
  const isPlaying = state === State.Playing;

  return useCallback(() => {
    if (isPlaying) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  }, [isPlaying]);
};
