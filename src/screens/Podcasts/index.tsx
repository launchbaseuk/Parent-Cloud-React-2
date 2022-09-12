import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions } from "react-native";

// Components
import BackButton from "../../components/BackButton";
import MediaListItem from "../../components/MediaListItem";
import TagFilter from "../../components/TagFilter";

const { width, height } = Dimensions.get("window");
export default function Podcasts({ navigation, route }: any) {
    return (
        <ScrollView>
            <BackButton text="Podcasts" />
            <View style={{ height: 16 }} />

            <TagFilter />
            <View style={{ height: 16 }} />

            <MediaListItem onPress={() => navigation.navigate("PodcastDetails")} />
            <MediaListItem onPress={() => navigation.navigate("PodcastDetails")} />
            <MediaListItem onPress={() => navigation.navigate("PodcastDetails")} />
            <MediaListItem onPress={() => navigation.navigate("PodcastDetails")} />
            <MediaListItem onPress={() => navigation.navigate("PodcastDetails")} />
            <MediaListItem onPress={() => navigation.navigate("PodcastDetails")} />
            <MediaListItem onPress={() => navigation.navigate("PodcastDetails")} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({

});
