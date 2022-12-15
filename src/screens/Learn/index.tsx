import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import BackButton from '../../components/BackButton';
import LearnCard from '../../components/LearnCard';

// Images
import AutomaticThoughts from '../../icons/svg/AutomaticThoughts';
import ChallengingThoughts from '../../icons/svg/ChallengingThoughts';
import CognitiveDistortions from '../../icons/svg/CognitiveDistortions';
import MoodTracking from '../../icons/svg/MoodTracking';
import PractisingGratitude from '../../icons/svg/PractisingGratitude';
import WhatIsCBT from '../../icons/svg/WhatIsCBT';

const {width, height} = Dimensions.get('window');
export default function Learn({navigation, route}: any) {
  const learnOptions = [
    {title: "What is CBT?", excerpt: "Learn more about CBT and how it can benefit you.", image: <WhatIsCBT />, content: "Cognitive Behavioural Therapy or CBT is type of talking therapy that can help you to change the way you think and behave in your everyday life. Whilst CBT therapy can be administered by a practitioner, many of the techniques can be practiced on a daily basis by yourself, enabling you to become your own expert in making practical changes to improve your state of mind. \n\nCBT has been proven to work by over a 1,000 studies and can be effective in helping individuals with a number of issues, including anxiety, depression, panic disorder and sleep problems. It's based on the idea that our thoughts, feelings and actions are connected. CBT aims to help you manage overwhelming and negative feelings by offering ways to reflect and challenge them, breaking down negative patterns that keep us feeling low. \n\nCBT focuses on the present here-and-now, helping you to find coping mechanisms for challenging situations, whilst relieving negative symptoms. Through regularly utilising the tools offered in our Pocket CBT, you will be able to better recognise your own unhealthy thinking patterns, create new coping mechanisms for stressful situations and feel a stronger sense of mental wellbeing. "},
    {title: "Practicing gratitude", excerpt: "Acknowledging positive thoughts and feelings.", image: <PractisingGratitude />, content: "A big part of CBT involves acknowledging positive thoughts and feelings, as well as challenging the negative ones. Practicing gratitude can have a signficant on our mental health and positivity. \n\nTry using the 'Practicing Gratitude' section of Pocket CBT to record anything that you notice about your day that you're grateful for. This might be something big, like being grateful for your children, or something small, like your morning coffee. \n\nNoticing these moments of being grateful or happy can help us to rewire our brains to develop a more optimistic mindset, naturally placing a stronger focus on the positive parts of our life, and less on the negative. "},
    {title: "Mood tracking", excerpt: "Gain insight into negative patterns that affect your mood and wellbeing.", image: <MoodTracking />, content: "Tracking our moods can give us a great insight into negative patterns that affect our mental wellbeing. Tracking can also provide a useful tool for reflecting on any triggers that instigate negative emotions. For example, you might look back on your moods and spot that you feel particularly low right before seeing family members or before work meetings. \n\nThis insight can be used to think about why these activities lower your mood and give you an opportunity to create a strategy for coping with these stressful situations. Alternatively, you might see that you feel really positive on days where you've been for a long walk or gotten a good night sleep. These positive logs can help you to identify what you can change to improve your moods on other days. The important thing is to track, along with your activities, to get a sense of how your mood changes depending on what you've been doing. \n\nTry to track your moods everyday to build up a comprehensive picture of how you've been feeling over a longer period. Tracking is most useful when we're making regular entries. Alternatively, you may want to track several times a day, to get a sense of how the time, or certain activities, affect your mood. Each time you make an entry in CBT Diary, it will be logged and tracked in 'Tracking' section of the app. "},
    {title: "Automatic Thoughts", excerpt: "Instinctive thoughts that influence your experience of the world.", image: <AutomaticThoughts />, content: "Our thoughts can influence our experience of the world and our moods. Automatic thoughts are instinctive and immediate thoughts that we have about ourselves, others or situations that are often outside our conscious awareness.  \n\nSome automatic thoughts we have might be positive or accurate. The issue comes when these thoughts are irrational and untrue, but we think and behave as though they are the truth. For example, if you were to make a mistake at work and your immediate thought is: \"I\'m useless\" or \"I can't ever do anything right\". \n\nOur thoughts affect our mood and wellbeing, so it's important to challenge these negative automatic thoughts. When you Check-in on the app, if your log in negative, we give you an opportunity to challenge this though and think about how you might reframe it in a more positive way. So, in the example just given, you might think: \"I sometimes make mistakes, like everyone else\". This can give you a better sense of perspective and help develop a positive outlook. "},
    {title: "Cognitive Distortions", excerpt: "Understanding irrational and negative patterns of thinking.", image: <CognitiveDistortions />, content: "Cognitive distortions represent irrational and negative patterns of thinking that can affect the way we relate in the present. These thought patterns can play a big role in influencing the way we view ourselves, others and events, impacting negatively on our mood by not allowing us to experience things objectively.  \n\nThe most common cognitive distortions include: \n\nAll or nothing thinking \nAlso known as black and white thinking. This involves viewing situations in absolute terms, like good or bad, success or failure, rather than recognising the in-between. \n\nOvergeneralisation\nThis can involve making sweeping conclusions about situations, assuming all events will work out in the same way as an experience that you've had. \n\nCatastrophising\nAssuming the worst in every situation and exagerrating the likelihood of negative outcomes. \n\nJumping to conclusions\nJudging others or a situation very quickly, often without reason. \n\nEmotional reasoning\nJudging yourself or others based on your emotions, assuming your emotions are the truth. \n\nShould or must statements\nThinking or feeling that you have be or do something in a certain way, or you've failed. \n\nLabelling\nMaking judgements about yourself or others based on one event and labelling them entirely based on this. \n\nBlaming\nBlaming yourself or others for being responsible over situations out of yours or their control. "},
    {title: "Challenging negative thoughts", excerpt: "Learn how to question negative and bias thoughts.", image: <ChallengingThoughts />, content: "Negative thoughts, similar to automatic thoughts, can affect our emotions and outlook on the world. Often our negative thoughts are not based on reality, but are influenced by the biases we have about ourselves and others. We can just assume our negative thoughts are accurate, so it's important to challenge them and question whether they are true? Challenging negative thoughts can help us to feel more grounded and rationalise our thinking. "},
  ];

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <BackButton text="Learn" />

        {learnOptions.map((learn: any) => {
          return (
            <LearnCard title={learn.title} excerpt={learn.excerpt} image={learn.image} content={learn.content} />
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
