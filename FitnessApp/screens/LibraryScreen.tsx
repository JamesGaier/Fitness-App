import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import 'react-native-get-random-values';
import {WebView} from 'react-native-webview';
import { v4 as uuidv4 } from 'uuid';
import { AntDesign } from '@expo/vector-icons';

import Workout from '../components/Workout';
import COLORS from '../colors';

const LibraryScreen = () => {
    const [data, setData] = useState([
        {id: uuidv4(), title: 'James\'s workout', liked: false, exercises: [
            {
                workoutTitle: 'Plank',
                duration: '2 min',
                img_url: require('../assets/exercise.jpg'),
                description: 'Tempor adipisicing nisi consectetur consequat ea ad voluptate consequat dolor.'
            },
            {
                workoutTitle: 'Pushup',
                duration: '2 min',
                img_url: require('../assets/exercise.jpg'),
                description: 'Tempor adipisicing nisi consectetur consequat ea ad voluptate consequat dolor.'
            }
        ]},
        {id: uuidv4(), title: 'Bob\'s workout', liked: false, exercises: [
            {
                workoutTitle: 'Plank',
                duration: '2 min',
                img_url: require('../assets/exercise.jpg'),
                description: 'Tempor adipisicing nisi consectetur consequat ea ad voluptate consequat dolor.'
            },
            {
                workoutTitle: 'Plank',
                duration: '2 min',
                img_url: require('../assets/exercise.jpg'),
                description: 'Tempor adipisicing nisi consectetur consequat ea ad voluptate consequat dolor.'
            }
        ]},
        {id: uuidv4(), title: 'Rick\'s workout', liked: false, exercises: [
            {
                workoutTitle: 'Plank',
                duration: '2 min',
                img_url: require('../assets/exercise.jpg'),
                description: 'Tempor adipisicing nisi consectetur consequat ea ad voluptate consequat dolor.'
            }
        ]}
    ]);
    const removeItem = (id: any) => {
        setData((prev: any) => {
            return prev.filter((item: any) => item.id !== id);
        });
    };
    const addItem = (item: any) => {
        setData((prev: any) => {
            return [item, ...prev];
        })
    };
    return (
        <SafeAreaView style={styles.libraryScreen}>
            <View style={{flex: 1}}>
                <View style={{height: 100, paddingTop: 20, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Text style={{fontSize: 32, fontWeight: 'bold', color: COLORS.lightGrey}}>
                        Workout Library
                    </Text>
                    <TouchableOpacity>
                        <AntDesign
                            name="plus"
                            size={32}
                            color={COLORS.lightGrey}
                            style={{marginRight: 20, marginLeft: 20, marginTop: 4}}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <Workout
                            data={item}
                            library={true}
                            removeItem={removeItem}
                            addItem={addItem}/>
                    )}/>
                {/* <TouchableOpacity style={styles.btn}>
                    <Text style={{color: COLORS.lightGrey, fontSize: 24, fontWeight: 'bold'}}>Add </Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    libraryScreen: {
        flex: 1,
        backgroundColor: COLORS.purple
    },
    btn: {
        padding: 20,
        backgroundColor: COLORS.darkPurple,
        alignItems: 'center'
    }
})

export default LibraryScreen;
