import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions } from "react-native";

// Components
import Media from "../../components/shared/ScreenHeaders/Media";
import ContentCard from "../../components/shared/ContentCard";
import GuidesImage from "../../images/svg/GuidesImage";
import VideosImage from "../../images/svg/VideosImage";
import PodcastsImage from "../../images/svg/PodcastsImage";

const { width, height } = Dimensions.get("window");
export default function MediaScreen({ navigation, route }: any) {
    return (
        <View>
            <Media />
            <View style={{height: 16}} />

            <ContentCard
                image={<GuidesImage />}
                text="Guides"
                route="GuidesMedia"
            />
            <ContentCard
                image={<VideosImage />}
                text="Videos"
                route="Videos"
            />
            <ContentCard
                image={<PodcastsImage />}
                text="Podcasts"
                route="Podcasts"
            />
        </View>
    );
};

const styles = StyleSheet.create({

});
