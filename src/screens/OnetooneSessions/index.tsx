import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import BackButton from "../../components/BackButton";
import PrimaryButton from "../../components/shared/PrimaryButton";
import SecondaryButton from "../../components/shared/SecondaryButton";
import Selection from "../../components/shared/Selection";

const { width, height } = Dimensions.get("window");
export default function OnetooneSessions() {
    const talkAboutOptions = [
        {key: "relationshipCounceling", text: "Relationship Counceling"},
        {key: "divorceCoaching", text: "Divorce Coaching"},
        {key: "childbehaviour", text: "Child Behaviour"},
        {key: "coaching", text: "Coaching...?"},
        {key: "couplescounseling", text: "Couples Counseling"},
        {key: "fertility", text: "Fertility"},
        {key: "infantsleep", text: "Infant Sleep"},
        {key: "lactation", text: "Lactation"},
        {key: "menopause", text: "Menopause"},
        {key: "nutrition", text: "Nutrition"},
        {key: "prepostnatal", text: "Pre & Post natal coaching"},
        {key: "therapy", text: "Therapy"}
    ];
    const scheduleOptions = [
        {key: "option1", text: "Option #1 - £ 9.00"},
        {key: "option2", text: "Option #2 - £ 49.00"},
        {key: "option3", text: "Option #3 - £ 99.00"}
    ];
    const specialistsOptions = [
        {key: "any", text: "Any available"},
        {key: "instructor1", text: "Instructor #1 - Name Surname - Info"},
        {key: "instructor2", text: "Instructor #2 - Name Surname - Info"},
        {key: "instructor3", text: "Instructor #3 - Name Surname - Info"},
        {key: "instructor4", text: "Instructor #4 - Name Surname - Info"},
        {key: "instructor5", text: "Instructor #5 - Name Surname - Info"},
        {key: "instructor6", text: "Instructor #6 - Name Surname - Info"},
        {key: "instructor7", text: "Instructor #7 - Name Surname - Info"},
        {key: "instructor8", text: "Instructor #8 - Name Surname - Info"}
    ];
    const [selected, setSelected] = useState<string>(talkAboutOptions[0].key);
    const [scheduled, setScheduled] = useState<string>(scheduleOptions[0].key);
    const [instructor, setInstructor] = useState<string>(specialistsOptions[0].key);

    return (
        <View style={styles.onetoonecontainer}>
            <ScrollView>
                <BackButton text={"1-2-1 Sessions"} />
                
                <Text style={[styles.sectionTitle, { marginBottom: 16 }]}>What would you like to talk about?</Text>
                {talkAboutOptions.map((option: any, index: any) => {
                    return (
                        <Selection itemKey={option.key} text={option.text} selected={selected} setSelected={setSelected} />
                    )
                })}

                <Text style={[styles.sectionTitle, { marginTop: 16, marginBottom: 16 }]}>I would like to schedule...</Text>
                {scheduleOptions.map((option: any, index: any) => {
                    return (
                        <Selection itemKey={option.key} text={option.text} selected={scheduled} setSelected={setScheduled} />
                    )
                })}

                <Text style={[styles.sectionTitle, { marginTop: 16, marginBottom: 16 }]}>Choose your specialist</Text>
                {specialistsOptions.map((option: any, index: any) => {
                    return (
                        <Selection itemKey={option.key} text={option.text} selected={instructor} setSelected={setInstructor} />
                    )
                })}

                <Text style={[styles.sectionTitle, { marginTop: 16, marginBottom: 16 }]}>Please select a time...</Text>
                
                <View style={styles.actionsContainer}>
                    <SecondaryButton size="small" text="Redeem coupon" />
                    <PrimaryButton size="small" text="Pay Now" />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontFamily: "SofiaProBlack",
        fontSize: 20,
        color: "#11535C",
        width: width - 40,
        alignSelf: "center",
        textAlign: "left",
        marginTop: 41
    },
    actionsContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        width: width - 40,
        alignSelf: "center",
        flexDirection: "row",
        paddingBottom: 73
    }
});
