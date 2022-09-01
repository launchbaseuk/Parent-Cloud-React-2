import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

// Images
import livetalks from "../../images/livetalks.png";
import mindhub from "../../images/mindhub.png";
import onetoone from "../../images/onetoone.png";

export default function Images({ imageNumber }: any) {
    return imageNumber === 0 ?
        <Image source={livetalks} />
    : imageNumber === 1 ?
        <Image source={mindhub} />
    :
        <Image source={onetoone} />
};
