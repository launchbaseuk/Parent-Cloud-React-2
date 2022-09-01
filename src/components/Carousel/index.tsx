import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image, Text } from "react-native";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import Dots from "./dots";
import Images from "./images";

const { width, height } = Dimensions.get("window");
function Carousel(props: any) {
    const [current, setCurrent] = useState<number>(0);

    const handleSwipeLeft = () => {
        if(current === 2) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    }

    return (
      <View style={{ width: width, height: height, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <ScrollView onScroll={handleSwipeLeft} contentContainerStyle={{ flexDirection: "column" }}>
            {current === 0 ?
                <View style={{ alignItems: "center", marginTop: 64 }}>
                    <Images imageNumber={0} />
                    <Text style={{ fontWeight: "bold", color: "#11535C", fontSize: 27 }}>One-to-one Sessions</Text>
                    <Text style={{ width: 298, textAlign: "center", fontSize: 15, lineHeight: 24 }}>Book an online consultation with our experienced specialists for help with lots of issues, from counselling to nutrition</Text>
                </View>
            : current === 1 ?
                <View style={{ alignItems: "center", marginTop: 64 }}>
                    <Images imageNumber={1} />
                    <Text style={{ fontWeight: "bold", color: "#11535C", fontSize: 27 }}>Mind Hub</Text>
                    <Text style={{ width: 298, textAlign: "center", fontSize: 15, lineHeight: 24 }}>Manage your mental wellbeing with Pocket CBT, guided meditations, sleep stories and mental health content</Text>
                </View>
            : <View style={{ alignItems: "center", marginTop: 64 }}>
                <Images imageNumber={2} />
                <Text style={{ fontWeight: "bold", color: "#11535C", fontSize: 27 }}>Live Talks & Podcasts</Text>
                <Text style={{ width: 298, textAlign: "center", fontSize: 15, lineHeight: 24 }}>Tune into our upcoming health and wellbeing Live Talks and listen to all our latest expert podcasts</Text>
            </View>}
            <Dots number={current} setCurrent={setCurrent} />
        </ScrollView>

        <View style={{ flex: 1 }}>
            <PrimaryButton text="Signup" />
            <View style={{ height: 8 }} />
            <SecondaryButton text="Login" />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({

});

export default Carousel;