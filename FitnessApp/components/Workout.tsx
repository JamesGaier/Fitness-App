import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../colors';
// import '../assets/exercise.jpg';
import NativeImage from './NativeImage';

const Workout = ({ data, setData }: any) => {


    const [liked, setLiked] = useState(data.liked);
    const [toggle, setToggle] = useState(false);

    const WorkoutListItem = ({ exercise }: any) => {
        const [subToggle, setSubToggle] = useState(false);

        return (
            <View style={{marginBottom: 40}}>
                <View style={styles.subItemContainer}>
                    <View style={styles.workoutSub}>
                        <Text style={styles.levelTitle}>{exercise.workoutTitle}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{...styles.levelTitle, marginRight: 15}}>{exercise.duration}</Text>
                        <TouchableOpacity style={{marginRight: 35}} onPress={() => setSubToggle(!subToggle)}>
                            {
                                subToggle ?
                                (<Ionicons
                                    name="chevron-up"
                                    size={36}
                                    color={COLORS.lightGrey}/>) :
                                <Ionicons
                                    name="chevron-down"
                                    size={36}
                                    color={COLORS.lightGrey}/>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    subToggle &&
                    (
                        <View>
                            <View style={{paddingLeft: 35, paddingRight: 35, paddingTop: 20, flexDirection: 'row', width: 300}}>
                                <Text style={styles.description}>{data.exercises[0].description}</Text>
                                <Image source={exercise.img_url} style={{width: 80, height: 80}}/>
                            </View>
                            <View style={{alignItems: 'flex-end', marginRight: 40, marginTop: 20}}>
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={{...styles.description, marginRight: 5}}>Add</Text>
                                    <MaterialCommunityIcons
                                    name="plus"
                                    size={20}
                                    color={COLORS.lightGrey}
                                    style={{marginRight: 5}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
            </View>
        );
    }

    const handlePress = () => {
        setLiked(!liked);
    };

    return (
        <View>
            <View style={styles.workout}>
                <Text style={styles.levelTitle}>{data.levelTitle}</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.icon} onPress={handlePress}>
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
                    <TouchableOpacity style={styles.icon} onPress={() => setToggle(!toggle)}>
                        {
                            toggle ?
                            (<Ionicons
                                name="chevron-up"
                                size={36}
                                color={COLORS.lightGrey}/>) :
                            <Ionicons
                                name="chevron-down"
                                size={36}
                                color={COLORS.lightGrey}/>
                        }
                    </TouchableOpacity>
                </View>
            </View>
            {
                toggle &&
                <FlatList
                    data={data.exercises}
                    renderItem={({item}) => (
                        <WorkoutListItem exercise={item}/>
                    )}
                    keyExtractor={(item, index) => index.toString()}/>
            }
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
        marginRight: 15
    },
    levelTitle: {
        fontSize: 24,
        color: COLORS.lightGrey,
        paddingTop: 15,
        fontWeight: 'bold',
        marginLeft: 15
    },
    workoutSub: {
    },
    subItemContainer: {
        paddingLeft: 20,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    description: {
        fontSize: 16,
        marginRight: 20,
        color: COLORS.lightGrey,
        fontWeight: '600'
    },
    btn: {
        borderRadius: 30,
        width: 80,
        justifyContent: 'center',
        padding: 9,
        backgroundColor: COLORS.darkPurple,
        flexDirection: 'row'
    }
})

export default Workout;
