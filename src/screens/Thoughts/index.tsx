import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

// Components
import Selection from "../../components/shared/Selection";
import PrimaryButton from "../../components/shared/PrimaryButton";
import SecondaryButton from "../../components/shared/SecondaryButton";

const { width, height } = Dimensions.get("window");
export default function Thoughts({ navigation, route }: any) {
    const [selected, setSelected] = useState<string>("");
    const options = [
        {text: "All or nothing thinking", key: "allOrNothing"},
        {text: "Overgeneralisation", key: "overgeneralisation"},
        {text: "Catastrophising", key: "catastrophising"},
        {text: "Jumping to conclusions", key: "jumpingToConclusions"},
        {text: "Emotional reasoning", key: "emotionalReasoning"},
        {text: "Should or must statements", key: "shouldOrMustStatements"},
        {text: "Labelling", key: "labelling"},
        {text: "Blaming", key: "blaming"}
    ];

    return (
        <View>
            <Text style={styles.headerText}>Which cognitive distortions does this thought have?</Text>

            {options.map((option: any, index: number) => {
                return (
                    <Selection key={index} text={option.text} itemKey={option.key} selected={selected} setSelected={setSelected} />
                )
            })}

            <View style={styles.buttonContainer}>
                <SecondaryButton size="small" text="Back" onPress={() => navigation.goBack()} />
                <PrimaryButton size="small" text="Confirm" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});
