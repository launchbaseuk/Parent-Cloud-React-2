import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import RenderHtml from 'react-native-render-html';

// Components
import BackButton from "../../components/BackButton";

const { width, height } = Dimensions.get("window");
export default function PDFViewer({ navigation, route }: any) {
    const text = {
        html: route.params.text
    };

    return (
        <View>
            <BackButton text="PDF Title" />

            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, }}>
                {text.html != null && text.html != undefined && text.html != "" ? 
                    <RenderHtml source={text} contentWidth={width} /> : (
                    <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16, alignSelf: "center", width: width - 70, marginTop: 57 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ornare aliquet a porttitor volutpat nunc eget iaculis auctor. Ipsum sed lacus, consectetur eget eget morbi turpis. Luctus mi dui, at justo, libero. Amet ultrices egestas quis euismod quis urna sollicitudin fringilla. Lorem cras risus, nunc, nunc, hac erat.</Text>
                )}
            </ScrollView>
        </View>
    )
}