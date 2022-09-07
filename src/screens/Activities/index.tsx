import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import FeelingsCard from "../../components/FeelingsCard";
import PrimaryButton from "../../components/shared/PrimaryButton";
import SecondaryButton from "../../components/shared/SecondaryButton";

// Images
import family from "../../icons/family.png";
import familySelected from "../../icons/family-1.png";
import chores from "../../icons/chores.png";
import choresSelected from "../../icons/chores-1.png";
import working from "../../icons/working.png";
import workingSelected from "../../icons/working-1.png";
import studying from "../../icons/studying.png";
import studyingSelected from "../../icons/studying-1.png";
import relax from "../../icons/relax.png";
import relaxSelected from "../../icons/relax-1.png";
import sleep from "../../icons/sleep.png";
import sleepSelected from "../../icons/sleep-1.png";
import traveling from "../../icons/traveling.png";
import travelingSelected from "../../icons/traveling-1.png";
import food from "../../icons/eating.png";
import foodSelected from "../../icons/eating-1.png";
import love from "../../icons/love.png";
import loveSelected from "../../icons/love-1.png";
import shopping from "../../icons/shopping.png";
import shoppingSelected from "../../icons/shopping-1.png";
import reading from "../../icons/reading.png";
import readingSelected from "../../icons/reading-1.png";
import friend from "../../icons/Friend.png";
import friendSelected from "../../icons/Friend-1.png";

const { width, height } = Dimensions.get("window");
export default function Activities({ navigation, route }: any) {
    const feeling = route.params.feeling;
    const [selected, setSelected] = useState<string>("");

    return (
        <View>
            <Text style={{ fontFamily: "SofiaProBlack", fontSize: 25, color: "#11535C", marginTop: 70, alignSelf: "center", marginBottom: 32 }}>How do you feel?</Text>
            <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center" }}>
                <FeelingsCard text="Family" icon={family} iconSelected={familySelected} itemKey="family" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Chores" icon={chores} iconSelected={choresSelected} itemKey="chores" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Working" icon={working} iconSelected={workingSelected} itemKey="working" selected={selected} setSelected={setSelected} />
            </View>
            <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center" }}>
                <FeelingsCard text="Studying" icon={studying} iconSelected={studyingSelected} itemKey="studying" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Relax" icon={relax} iconSelected={relaxSelected} itemKey="relax" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Sleep" icon={sleep} iconSelected={sleepSelected} itemKey="sleep" selected={selected} setSelected={setSelected} />
            </View>
            <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center" }}>
                <FeelingsCard text="Traveling" icon={traveling} iconSelected={travelingSelected} itemKey="traveling" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Food" icon={food} iconSelected={foodSelected} itemKey="food" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Love" icon={love} iconSelected={loveSelected} itemKey="love" selected={selected} setSelected={setSelected} />
            </View>
            <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center" }}>
                <FeelingsCard text="Shopping" icon={shopping} iconSelected={shoppingSelected} itemKey="shopping" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Reading" icon={reading} iconSelected={readingSelected} itemKey="reading" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Friends" icon={friend} iconSelected={friendSelected} itemKey="friends" selected={selected} setSelected={setSelected} />
            </View>

            <View style={{ flexDirection: "row", width: width - 40, justifyContent: "space-between", alignItems: "center", alignSelf: "center", marginTop: 45 }}>
                <SecondaryButton size="small" text="Back" onPress={() => navigation.goBack()} />
                <PrimaryButton size="small" text="Continue" onPress={() => navigation.navigate("Thoughts", { feeling: selected })} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});
