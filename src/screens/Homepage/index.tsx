import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useRoute } from '@react-navigation/native';

// Components
import Home from "../../components/shared/ScreenHeaders/Home";

// Images

export default function Homepage() {
    const route = useRoute();

    return (
        <View>
            <Home />
            <Text>{route.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});