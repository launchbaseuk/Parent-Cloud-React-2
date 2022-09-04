import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Chip from "../shared/Chip";

export default function TagFilter() {
    const options = [
        {text: "All", key: "all"},
        {text: "Tag #1", key: "tag1"},
        {text: "Tag #2", key: "tag2"},
        {text: "Tag #3", key: "tag3"},
        {text: "Tag #4", key: "tag4"},
        {text: "Tag #5", key: "tag5"},
        {text: "Tag #6", key: "tag6"},
        {text: "Tag #7", key: "tag7"},
        {text: "Tag #8", key: "tag8"},
        {text: "Tag #9", key: "tag9"},
    ];
    const [selected, setSelected] = useState<string>(options[0].key);

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 16, marginTop: 16, paddingRight: 15 }}>
                {options.map((option: any, index: any) => {
                    return (
                        <Chip selected={selected} setSelected={setSelected} text={option.text} itemKey={option.key} key={index} />
                    )
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});
