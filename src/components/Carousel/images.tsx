import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

// Images
import LiveTalksImage from "../../images/svg/LiveTalksImage";
import MindHubImage from "../../images/svg/MindHubImage";
import OneToOneImage from "../../images/svg/OneToOneImage";

export default function Images({ imageNumber }: any) {
    return imageNumber === 0 ?
        <LiveTalksImage width={185} height={185} />
    : imageNumber === 1 ?
        <MindHubImage />
    :
        <OneToOneImage width={210} height={210} />
};
