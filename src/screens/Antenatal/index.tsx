import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import BackButton from "../../components/BackButton";
import ListItem from "../../components/ListItem";
import TagFilter from "../../components/TagFilter";

// Image
import listitemimage from "../../images/ListItemImage.png";

export default function Antenatal() {
    return (
        <View>
            <ScrollView>
                <BackButton text={"Antenatal Classes"} />
                <TagFilter />

                <View style={{ height: 12 }} />

                {Array.from({ length: 10}).map((_, index) => {
                    return (
                        <ListItem key={index} text="Lorem ipsum + DATE/TIME" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci turpis et tortor diam mi mollis hendrerit lobortis ullamcorper." image={listitemimage} />
                    )
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});
