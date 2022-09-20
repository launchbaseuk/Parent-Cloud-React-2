import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import FeelingsCard from "../../components/FeelingsCard";
import PrimaryButton from "../../components/shared/PrimaryButton";
import SecondaryButton from "../../components/shared/SecondaryButton";

// Images
import Family from "../../icons/svg/Family";
import FamilySelected from "../../icons/svg/FamilySelected";
import Chores from "../../icons/svg/Chores";
import ChoresSelected from "../../icons/svg/ChoresSelected";
import Working from "../../icons/svg/Working";
import WorkingSelected from "../../icons/svg/WorkingSelected";
import Studying from "../../icons/svg/Studying";
import StudyingSelected from "../../icons/svg/StudyingSelected";
import Relax from "../../icons/svg/Relax";
import RelaxSelected from "../../icons/svg/RelaxSelected";
import Sleep from "../../icons/svg/Sleep";
import SleepSelected from "../../icons/svg/SleepSelected";
import Traveling from "../../icons/svg/Traveling";
import TravelingSelected from "../../icons/svg/TravelingSelected";
import Eating from "../../icons/svg/Eating";
import EatingSelected from "../../icons/svg/EatingSelected";
import Love from "../../icons/svg/Love";
import LoveSelected from "../../icons/svg/LoveSelected";
import Shopping from "../../icons/svg/Shopping";
import ShoppingSelected from "../../icons/svg/ShoppingSelected";
import Reading from "../../icons/svg/Reading";
import ReadingSelected from "../../icons/svg/ReadingSelected";
import Friend from "../../icons/svg/Friend";
import FriendSelected from "../../icons/svg/FriendSelected";

const { width, height } = Dimensions.get("window");
export default function Activities({ navigation, route }: any) {
    const feeling = route.params.feelings;
    const otherFeeling = route.params.otherFeeling;
    const [selected, setSelected] = useState<string>("");

    const handlePress = () => {
        if(feeling == "ok" || feeling == "great") {
            navigation.navigate("SuccessApricity", { pageFrom: "mindhub" });
        } else {
            navigation.navigate("Thoughts", { feeling: feeling, otherFeeling: otherFeeling, activity: selected });
        }
    }

    return (
        <View>
            <Text style={{ fontFamily: "SofiaProBlack", fontSize: 25, color: "#11535C", marginTop: 70, alignSelf: "center", marginBottom: 32 }}>What have you been doing?</Text>
            <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center" }}>
                <FeelingsCard text="Family" icon={<Family />} iconSelected={<FamilySelected />} itemKey="family" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Chores" icon={<Chores />} iconSelected={<ChoresSelected />} itemKey="chores" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Working" icon={<Working />} iconSelected={<WorkingSelected />} itemKey="working" selected={selected} setSelected={setSelected} />
            </View>
            <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center" }}>
                <FeelingsCard text="Studying" icon={<Studying />} iconSelected={<StudyingSelected />} itemKey="studying" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Relax" icon={<Relax />} iconSelected={<RelaxSelected />} itemKey="relax" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Sleep" icon={<Sleep />} iconSelected={<SleepSelected />} itemKey="sleep" selected={selected} setSelected={setSelected} />
            </View>
            <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center" }}>
                <FeelingsCard text="Traveling" icon={<Traveling />} iconSelected={<TravelingSelected />} itemKey="traveling" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Food" icon={<Eating />} iconSelected={<EatingSelected />} itemKey="food" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Love" icon={<Love />} iconSelected={<LoveSelected />} itemKey="love" selected={selected} setSelected={setSelected} />
            </View>
            <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center" }}>
                <FeelingsCard text="Shopping" icon={<Shopping />} iconSelected={<ShoppingSelected />} itemKey="shopping" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Reading" icon={<Reading />} iconSelected={<ReadingSelected />} itemKey="reading" selected={selected} setSelected={setSelected} />
                <View style={{ width: 16 }} />
                <FeelingsCard text="Friends" icon={<Friend />} iconSelected={<FriendSelected />} itemKey="friends" selected={selected} setSelected={setSelected} />
            </View>

            <View style={{ flexDirection: "row", width: width - 40, justifyContent: "space-between", alignItems: "center", alignSelf: "center", marginTop: 45 }}>
                <SecondaryButton size="small" text="Back" onPress={() => navigation.goBack()} />
                <PrimaryButton size="small" text="Continue" onPress={handlePress} disabled={selected != "" ? false : true} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});
