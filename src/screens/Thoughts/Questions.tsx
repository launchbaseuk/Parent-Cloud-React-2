import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import Selection from "../../components/shared/Selection";
import PrimaryButton from "../../components/shared/PrimaryButton";
import SecondaryButton from "../../components/shared/SecondaryButton";

const { width, height } = Dimensions.get("window");
export default function Questions() {
    const navigation = useNavigation();
    const [selected, setSelected] = useState<string>("");

    return (
        <ScrollView>
            <View style={{ width: width, justifyContent: "center" }}>
                <Text style={styles.headerText}>How could you challenge this thought?</Text>
                <TextInput multiline style={{ marginTop: 16, width: width - 40, height: 130, borderRadius: 5, backgroundColor: "#F2F2F280", textAlignVertical: "top", alignSelf: "center", fontFamily: "Montserrat-Regular", fontSize: 13, color: "#150E00", padding: 16 }} placeholder="Start typing here..." placeholderTextColor="#150E00" />
            </View>
            <View style={{ width: width, justifyContent: "center", marginTop: 32 }}>
                <Text style={styles.headerText}>How can this thought be interpreted differently?</Text>
                <TextInput multiline style={{ marginTop: 16, width: width - 40, height: 130, borderRadius: 5, backgroundColor: "#F2F2F280", textAlignVertical: "top", alignSelf: "center", fontFamily: "Montserrat-Regular", fontSize: 13, color: "#150E00", padding: 16 }} placeholder="Start typing here..." placeholderTextColor="#150E00" />
            </View>
            <View style={{ width: width, justifyContent: "center", marginTop: 32 }}>
                <Text style={styles.headerText}>How are you feeling now?</Text>
                <Selection setSelected={setSelected} selected={selected} text="Better" itemKey="better" />
                <Selection setSelected={setSelected} selected={selected} text="Worse" itemKey="worse" />
                <Selection setSelected={setSelected} selected={selected} text="The same" itemKey="same" />
            </View>

            <View style={styles.buttonContainer}>
                <SecondaryButton size="small" text="Back" onPress={() => navigation.goBack()} />
                <PrimaryButton size="small" text="Confirm" onPress={() => navigation.navigate("SuccessApricity", { pageFrom: "mindhub" })} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "SofiaProBlack",
        color: "#11535C",
        fontSize: 20,
        paddingLeft: 16,
        marginTop: 70,
        width: width - 40
    },
    buttonContainer: {
        marginTop: 32,
        flexDirection: "row",
        justifyContent: "space-between",
        width: width - 40,
        alignSelf: "center"
    }
});
