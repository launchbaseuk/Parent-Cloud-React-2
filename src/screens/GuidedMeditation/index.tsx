import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";

// Components
import BackButton from "../../components/BackButton";
import MediaListItem from "../../components/MediaListItem";
import TagFilter from "../../components/TagFilter";

const { width, height } = Dimensions.get("window");
export default function GuidedMeditation({ navigation }: any) {
    return (
        <ScrollView>
            <BackButton text="Guided Meditation" />
            <View style={{ height: 40 }} />

            <TagFilter />
            <View style={{ height: 16 }} />

            <View>
                <MediaListItem />
                <MediaListItem />
                <MediaListItem />
                <MediaListItem />
                <MediaListItem />
                <MediaListItem />
                <MediaListItem />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

});
