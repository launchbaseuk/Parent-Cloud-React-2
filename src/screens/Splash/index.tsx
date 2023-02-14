import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View, Dimensions } from "react-native";
import SplashImage from "../../images/svg/SplashImage";
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from "../../contexts/auth-context";
import Loader from "../../components/Loader";

const { width, height } = Dimensions.get("window");
export function WithSplashScreen({
  children,
  isAppReady,
}: {
  isAppReady: boolean;
  children: React.ReactNode;
}) {
  const { loadingUser } = useAuth();
  console.log('main', loadingUser);

  return (
    <>
      {(isAppReady && !loadingUser) && children}

      <Splash isAppReady={isAppReady} />
    </>
  );
}

const LOADING_IMAGE = "Loading image";
const FADE_IN_IMAGE = "Fade in image";
const WAIT_FOR_APP_TO_BE_READY = "Wait for app to be ready";
const FADE_OUT = "Fade out";
const HIDDEN = "Hidden";

export const Splash = ({ isAppReady }: { isAppReady: boolean }) => {
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const { loadingUser } = useAuth();

  console.log('splash', loadingUser)
  const [state, setState] = useState<
    | typeof LOADING_IMAGE
    | typeof FADE_IN_IMAGE
    | typeof WAIT_FOR_APP_TO_BE_READY
    | typeof FADE_OUT
    | typeof HIDDEN
  >(LOADING_IMAGE);

  useEffect(() => {
    if (state === FADE_IN_IMAGE) {
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 1000, // Fade in duration
        useNativeDriver: true,
      }).start(() => {
        setState(WAIT_FOR_APP_TO_BE_READY);
      });
    }
  }, [imageOpacity, state]);

  useEffect(() => {
    if (state === WAIT_FOR_APP_TO_BE_READY) {
      if (isAppReady) {
        setState(FADE_OUT);
      }
    }
  }, [isAppReady, state]);

  useEffect(() => {
    if (state === FADE_OUT) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 1000, // Fade out duration
        delay: 1000, // Minimum time the logo will stay visible
        useNativeDriver: true,
      }).start(() => {
        setState(HIDDEN);
      });
    }
  }, [containerOpacity, state]);

  if (state === HIDDEN) return null;

  return (
    <Animated.View
      collapsable={false}
      style={[style.container, { opacity: containerOpacity }]}
    >
      <LinearGradient start={{x: 0.0, y: 0}} end={{x: 1, y: 0}} locations={[0.145,0.913]} colors={['#336A75', '#668e90']} style={style.linearGradient}>
        <Animated.Image
          source={require("../../images/parentcloudlogo2.png")}
          fadeDuration={0}
          onLoad={() => {
            setState(FADE_IN_IMAGE);
          }}
          style={[style.image, { opacity: imageOpacity }]}
          resizeMode="contain"
        />
      </LinearGradient>
      {/* <SplashImage /> */}
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
  },
});