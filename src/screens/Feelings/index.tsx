import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import FeelingsCard from "../../components/FeelingsCard";
import PrimaryButton from "../../components/shared/PrimaryButton";
import SecondaryButton from "../../components/shared/SecondaryButton";

// Images
import depressed from "../../icons/depressed.png";
import depressedSelected from "../../icons/depressed-1.png";
import anxious from "../../icons/anxious.png";
import anxiousSelected from "../../icons/anxious-1.png";
import confused from "../../icons/confused.png";
import confusedSelected from "../../icons/confused-1.png";
import sick from "../../icons/Sick.png";
import sickSelected from "../../icons/Sick-1.png";
import envious from "../../icons/envious.png";
import enviousSelected from "../../icons/envious-1.png";
import tired from "../../icons/tired.png";
import tiredSelected from "../../icons/tired-1.png";
import guilty from "../../icons/guilty.png";
import guiltySelected from "../../icons/guilty-1.png";
import sad from "../../icons/Sad.png";
import sadSelected from "../../icons/Sad-1.png";
import overwhelmed from "../../icons/overwhelmed.png";
import overwhelmedSelected from "../../icons/overwhelmed-1.png";
import frustrated from "../../icons/frustrated.png";
import frustratedSelected from "../../icons/frustrated-1.png";
import angry from "../../icons/Angry.png";
import angrySelected from "../../icons/Angry-1.png";
import ashamed from "../../icons/ashamed.png";
import ashamedSelected from "../../icons/ashamed-1.png";
import relieved from "../../icons/relieved.png";
import relievedSelected from "../../icons/relieved-1.png";
import happy from "../../icons/happy.png";
import happySelected from "../../icons/happy-1.png";
import productive from "../../icons/productive.png";
import productiveSelected from "../../icons/productive-1.png";
import confident from "../../icons/confident.png";
import confidentSelected from "../../icons/confident-1.png";
import loved from "../../icons/loved.png";
import lovedSelected from "../../icons/loved-1.png";
import grateful from "../../icons/grateful.png";
import gratefulSelected from "../../icons/grateful-1.png";
import playful from "../../icons/playful.png";
import playfulSelected from "../../icons/playful-1.png";
import starshappy from "../../icons/starshappy.png";
import starshappySelected from "../../icons/starshappy-1.png";
import relaxed from "../../icons/relaxed.png";
import relaxedSelected from "../../icons/relaxed-1.png";
import optimistic from "../../icons/optimistic.png";
import optimisticSelected from "../../icons/optimistic-1.png";
import excited from "../../icons/excited.png";
import excitedSelected from "../../icons/excited-1.png";
import calm from "../../icons/calm.png";
import calmSelected from "../../icons/calm-1.png";

const { width, height } = Dimensions.get("window");
export default function Feelings({ navigation, route }: any) {
    const feeling = route.params.feeling;
    const [selected, setSelected] = useState<string>("");

    return (
        <View>
            <Text style={{ fontFamily: "SofiaProBlack", fontSize: 25, color: "#11535C", marginTop: 70, alignSelf: "center", marginBottom: 32 }}>How do you feel?</Text>

            {feeling == "awful" || feeling == "notgood" ? (
                <>
                    <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center" }}>
                        <FeelingsCard text="Depressed" icon={depressed} iconSelected={depressedSelected} itemKey="depressed" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Anxious" icon={anxious} iconSelected={anxiousSelected} itemKey="anxious" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Confused" icon={confused} iconSelected={confusedSelected} itemKey="confused" selected={selected} setSelected={setSelected} />
                    </View>
                    <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center" }}>
                        <FeelingsCard text="Sick" icon={sick} iconSelected={sickSelected} itemKey="sick" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Envious" icon={envious} iconSelected={enviousSelected} itemKey="envious" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Tired" icon={tired} iconSelected={tiredSelected} itemKey="tired" selected={selected} setSelected={setSelected} />
                    </View>
                    <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center"}}>
                        <FeelingsCard text="Guilty" icon={guilty} iconSelected={guiltySelected} itemKey="guilty" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Sad" icon={sad} iconSelected={sadSelected} itemKey="sad" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Overwhelmed" icon={overwhelmed} iconSelected={overwhelmedSelected} itemKey="overwhelmed" selected={selected} setSelected={setSelected} />
                    </View>
                    <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center"}}>
                        <FeelingsCard text="Frustrated" icon={frustrated} iconSelected={frustratedSelected} itemKey="frustrated" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Angry" icon={angry} iconSelected={angrySelected} itemKey="angry" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Furious" icon={ashamed} iconSelected={ashamedSelected} itemKey="furious" selected={selected} setSelected={setSelected} />
                    </View>
                </>
            ) : (
                <>
                    <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center" }}>
                        <FeelingsCard text="Relieved" icon={relieved} iconSelected={relievedSelected} itemKey="relieved" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Happy" icon={happy} iconSelected={happySelected} itemKey="happy" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Productive" icon={productive} iconSelected={productiveSelected} itemKey="productive" selected={selected} setSelected={setSelected} />
                    </View>
                    <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center" }}>
                        <FeelingsCard text="Confident" icon={confident} iconSelected={confidentSelected} itemKey="confident" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Loved" icon={loved} iconSelected={lovedSelected} itemKey="loved" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Grateful" icon={grateful} iconSelected={gratefulSelected} itemKey="grateful" selected={selected} setSelected={setSelected} />
                    </View>
                    <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center"}}>
                        <FeelingsCard text="Playful" icon={playful} iconSelected={playfulSelected} itemKey="playful" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Inspired" icon={starshappy} iconSelected={starshappySelected} itemKey="inspired" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Relaxed" icon={relaxed} iconSelected={relaxedSelected} itemKey="relaxed" selected={selected} setSelected={setSelected} />
                    </View>
                    <View style={{ width: width - 40, alignSelf: "center", flexDirection: "row", marginBottom: 16, justifyContent: "center"}}>
                        <FeelingsCard text="Optimistic" icon={optimistic} iconSelected={optimisticSelected} itemKey="optimistic" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Excited" icon={excited} iconSelected={excitedSelected} itemKey="excited" selected={selected} setSelected={setSelected} />
                        <View style={{ width: 16 }} />
                        <FeelingsCard text="Calm" icon={calm} iconSelected={calmSelected} itemKey="calm" selected={selected} setSelected={setSelected} />
                    </View>
                </>
            )}

            <View style={{ flexDirection: "row", width: width - 40, justifyContent: "space-between", alignItems: "center", alignSelf: "center", marginTop: 45 }}>
                <SecondaryButton size="small" text="Back" onPress={() => navigation.goBack()} />
                <PrimaryButton size="small" text="Continue" onPress={() => navigation.navigate("Activities", { feelings: feeling, otherFeeling: selected })} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});
