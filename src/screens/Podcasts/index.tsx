import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions } from "react-native";
import { getPodcasts } from "../../functions/requests";

// Components
import BackButton from "../../components/BackButton";
import MediaListItem from "../../components/MediaListItem";
import TagFilter from "../../components/TagFilter";

const { width, height } = Dimensions.get("window");
export default function Podcasts({ navigation, route }: any) {
    useFocusEffect(
        React.useCallback(() => {
            (async() => {
                const response = await getPodcasts();
            })();
        }, [])
    );

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
