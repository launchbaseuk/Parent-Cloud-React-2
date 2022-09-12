import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions } from "react-native";

// Components
import BackButton from "../../components/BackButton";
import TagFilter from "../../components/TagFilter";
import VideoListItem from "../../components/VideoListItem";

const { width, height } = Dimensions.get("window");
export default function Videos({ navigation, route }: any) {
    return (
        <ScrollView>
            <BackButton text="Videos" />
            <View style={{ height: 16 }} />

            <TagFilter />
            <View style={{ height: 16 }} />

            <VideoListItem />
            <VideoListItem />
            <VideoListItem />
            <VideoListItem />
            <VideoListItem />
            <VideoListItem />
            <VideoListItem />
        </ScrollView>
    );
};

const styles = StyleSheet.create({

});
