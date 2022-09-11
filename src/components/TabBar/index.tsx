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

// Icons SVG
import Home from '../../icons/svg/Home';
import HomeSelected from '../../icons/svg/HomeSelected';
import Media from '../../icons/svg/Media';
import MediaSelected from '../../icons/svg/MediaSelected'
import Mind from '../../icons/svg/Mind';
import MindSelected from '../../icons/svg/MindSelected';
import Support from '../../icons/svg/Support';
import SupportSelected from '../../icons/svg/SupportSelected';
import More from '../../icons/svg/More';
import MoreSelected from '../../icons/svg/MoreSelected';

const {width, height} = Dimensions.get('window');
export default function TabBar(props: any) {
  const routes = [{name: 'Home', key: 'home', icon: <Home />, iconSelected: <HomeSelected />},
        {name: 'Media', key: 'media', icon: <Media />, iconSelected: <MediaSelected />},
        {name: 'Mind', key: 'mind', icon: <Mind />, iconSelected: <MindSelected />},
        {name: 'Support', key: 'support', icon: <Support />, iconSelected: <SupportSelected />},
        {name: 'More', key: 'more', icon: <More />, iconSelected: <MoreSelected />}
    ];
  const [selected, setSelected] = useState<string>("Home");
  
  return (
    <View style={styles.tabBarContainer}>
        {props.state.routes.map((route: any, index: number) => {
            const isFocused = props.state.index == index;
            
            const onPress = () => {
                const event = props.navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                });

        
                if (!isFocused && !event.defaultPrevented) {
                    props.navigation.navigate(route.name);
                }
                setSelected(route.name)
            }

            return (
                <TouchableOpacity key={index} style={styles.tabBarItem} onPress={onPress}>
                    {selected == route.name ? 
                        routes.map((r: any) => {
                            if(r.name == route.name) {
                                return r.iconSelected
                            }
                        })
                     : (
                        routes.map((r: any) => {
                            if(r.name == route.name) {
                                return r.icon
                            }
                        })
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