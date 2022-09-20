import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

// Images
import LiveTalksPodcastsImage from "../../images/svg/LiveTalksPodcastsImage";
import MindHubImage from "../../images/svg/MindHubImage";
import OneToOneImage from "../../images/svg/OneToOneImage";

export default function Images({ imageNumber }: any) {
    return imageNumber === 0 ?
        <OneToOneImage width={210} height={210} />
    : imageNumber === 1 ?
        <MindHubImage />
    :
        <LiveTalksPodcastsImage width={185} height={185} />
};
