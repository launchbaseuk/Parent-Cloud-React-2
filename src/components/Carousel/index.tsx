import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import Dots from "./dots";
import Images from "./images";

const { width, height } = Dimensions.get("window");
function Carousel({ navigation }: any) {
    const [current, setCurrent] = useState<number>(1);
    // const scrollRef = React.useRef<any>(null);
    
    const handleSwipe = (e: any) => {
        if(e.nativeEvent.contentOffset.x == 0) {
            setCurrent(0);
        } else {
            if(e.nativeEvent.contentOffset.x > 411 && e.nativeEvent.contentOffset.x < 822) {
                setCurrent(1);
            }
            else {
                setCurrent(2);
            }
        }
    }
    const handleLogin = async () => {
        await AsyncStorage.setItem('onboarded', "true");
        navigation.navigate("Login");
    }
    
    // Tried adding this for auto-scroll but didn't work
    // useEffect(() => {
    //     if(current == 0) {
    //         scrollRef.current.scrollTo({x: 411, y: 0, animated: true});
    //         setCurrent(1);
    //     } else if(current == 1) {
    //         scrollRef.current.scrollTo({x: 822, y: 0, animated: true});
    //         setCurrent(2);
    //     } else {
    //         scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
    //         setCurrent(0);
    //     }
    // }, []);

    return (
      <View style={{ width: width, height: height, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <View style={{ justifyContent: "center", alignItems: "center", height: "50%" }}>
            <ScrollView onScroll={handleSwipe} horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={200} decelerationRate="fast" snapToStart pagingEnabled contentContainerStyle={{ width: `${100 * 3}%` }}>
                <View style={{ alignItems: "center", marginTop: 64, width: width }}>
                    <Images imageNumber={0} />
                    <Text style={{ color: "#11535C", fontSize: 27, fontFamily: "SofiaProBlack" }}>One-to-one Sessions</Text>
                    <Text style={{ width: 298, textAlign: "center", fontSize: 15, lineHeight: 24, fontFamily: "Montserrat-Regular" }}>Book an online consultation with our experienced specialists for help with lots of issues, from counselling to nutrition</Text>
                </View>
                <View style={{ alignItems: "center", marginTop: 64, width: width }}>
                    <Images imageNumber={1} />
                    <Text style={{ fontFamily: "SofiaProBlack", color: "#11535C", fontSize: 27 }}>Mind Hub</Text>
                    <Text style={{ width: 298, textAlign: "center", fontSize: 15, lineHeight: 24, fontFamily: "Montserrat-Regular" }}>Manage your mental wellbeing with Pocket CBT, guided meditations, sleep stories and mental health content</Text>
                </View>
                <View style={{ alignItems: "center", marginTop: 64, width: width }}>
                    <Images imageNumber={2} />
                    <Text style={{ fontFamily: "SofiaProBlack", color: "#11535C", fontSize: 27 }}>Live Talks & Podcasts</Text>
                    <Text style={{ width: 298, textAlign: "center", fontSize: 15, lineHeight: 24, fontFamily: "Montserrat-Regular" }}>Tune into our upcoming health and wellbeing Live Talks and listen to all our latest expert podcasts</Text>
                </View>
            </ScrollView>
            <Dots number={current} setCurrent={setCurrent} />
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 70 }}>
            <PrimaryButton text="Signup" onPress={() => navigation.navigate("Signup")} />
            <View style={{ height: 8 }} />
            <SecondaryButton text="Login" onPress={handleLogin} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({

});

export default Carousel;