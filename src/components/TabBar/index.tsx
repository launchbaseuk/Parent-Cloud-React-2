import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Image
} from 'react-native';

// Icons
import Home from "../../icons/Home.png";
import HomeSelected from "../../icons/HomeSelected.png";
import Media from "../../icons/Media.png";
import MediaSelected from "../../icons/MediaSelected.png";
import Mind from "../../icons/Mind.png";
import MindSelected from "../../icons/MindSelected.png";
import More from "../../icons/More.png";
import MoreSelected from "../../icons/MoreSelected.png";
import Support from "../../icons/Support.png";
import SupportSelected from "../../icons/SupportSelected.png";

const {width, height} = Dimensions.get('window');
export default function TabBar() {
  const routes = [{name: 'Home', key: 'home', icon: Home, iconSelected: HomeSelected},
                  {name: 'Media', key: 'media', icon: Media, iconSelected: MediaSelected},
                  {name: 'Mind', key: 'mind', icon: Mind, iconSelected: MindSelected},
                  {name: 'Support', key: 'support', icon: Support, iconSelected: SupportSelected},
                  {name: 'More', key: 'more', icon: More, iconSelected: MoreSelected}
                ];
  const [selected, setSelected] = useState<string>("home");

  return (
    <View style={styles.tabBarContainer}>
        {routes.map((route: any, index: number) => {
            return (
                <TouchableOpacity key={index} style={styles.tabBarItem} onPress={() => setSelected(route.key)}>
                    {selected == route.key ? (
                        <Image source={route.iconSelected} style={styles.tabBarIcon} />
                    ) : (
                        <Image source={route.icon} style={styles.tabBarIcon} />
                    )}
                </TouchableOpacity>
            )
        })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabBarContainer: {
        width: width,
        height: 60,
        backgroundColor: '#fff',
        borderTopWidth: 2,
        borderColor: '#00084B',
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical: 18
    },
    tabBarIcon: {
        width: 25,
        height: 25,
    }
})