import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../colors';

const Workout = ({ data }: any) => {

    const [liked, setLiked] = useState(false);
    const [toggle, setToggle] = useState(false);
    return (
        <View style={styles.workout}>
            <Text style={styles.levelTitle}>{data.levelTitle}</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.icon} onPress={() => setLiked(!liked)}>
                    {
                        liked ?
                        <MaterialCommunityIcons
                            name="heart"
                            size={36}
                            color={COLORS.lightGrey}/> :
                        <MaterialCommunityIcons
                            name="heart-outline"
                            size={36}
                            color={COLORS.lightGrey}/>
                    }
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons
                        name="chevron-down"
                        size={36}
                        color={COLORS.lightGrey}
                        onPress={() => setToggle(!toggle)}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    workout: {
        height: 60,
        backgroundColor: '#1A2536',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconContainer: {
        flexDirection: 'row',
        paddingTop: 10
    },
    icon: {
        marginRight: 10
    },
    levelTitle: {
        fontSize: 24,
        color: COLORS.lightGrey
    }
})

export default Workout;
