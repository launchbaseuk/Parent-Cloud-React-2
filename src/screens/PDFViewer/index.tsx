import React, { useState, useEffect } from "react";
import { View, Text, Dimensions } from "react-native";

// Components
import BackButton from "../../components/BackButton";

const { width, height } = Dimensions.get("window");
export default function PDFViewer() {
    return (
        <View>
            <BackButton text="PDF Title" />

            <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16, alignSelf: "center", width: width - 70, marginTop: 57 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ornare aliquet a porttitor volutpat nunc eget iaculis auctor. Ipsum sed lacus, consectetur eget eget morbi turpis. Luctus mi dui, at justo, libero. Amet ultrices egestas quis euismod quis urna sollicitudin fringilla. Lorem cras risus, nunc, nunc, hac erat.
                {"\n\n"}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ornare aliquet a porttitor volutpat nunc eget iaculis auctor. Ipsum sed lacus, consectetur eget eget morbi turpis. Luctus mi dui, at justo, libero. Amet ultrices egestas quis euismod quis urna sollicitudin fringilla. Lorem cras risus, nunc, nunc, hac erat.
                {"\n\n"}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ornare aliquet a porttitor volutpat nunc eget iaculis auctor. Ipsum sed lacus, consectetur eget eget morbi turpis. Luctus mi dui, at justo, libero. Amet ultrices egestas quis euismod quis urna sollicitudin fringilla. Lorem cras risus, nunc, nunc, hac erat.
            </Text>
        </View>
    )
}