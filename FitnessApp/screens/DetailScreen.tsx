import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-get-random-values';
import {WebView} from 'react-native-webview';
import { v4 as uuidv4 } from 'uuid';
import Workout from '../components/Workout';
import COLORS from '../colors';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const DetailScreen = ({ navigation }: DetailsProps) => {

    const [levels, setLevel] = useState([
        {id: uuidv4(), levelTitle: 'Beginner', liked: false, exercises: [
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
        {id: uuidv4(), levelTitle: 'Intermediate', liked: false, exercises: [
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
        {id: uuidv4(), levelTitle: 'Advanced', liked: false, exercises: [
            {
                workoutTitle: 'Plank',
                duration: '2 min',
                img_url: require('../assets/exercise.jpg'),
                description: 'Tempor adipisicing nisi consectetur consequat ea ad voluptate consequat dolor.'
            }
        ]}
    ]);
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.header} >
                <Ionicons
                    name="chevron-back"
                    size={36}
                    color={COLORS.lightGrey}
                    style={styles.chevron}
                    onPress={() => navigation.goBack()}/>
                <Text style={styles.headerFont}>Core Workout</Text>
            </View>
            <View style={styles.workoutContainer}>
                <FlatList
                    data={levels}
                    renderItem={({item}) => (
                        <Workout data={item} />
                    )}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.purple
    },
    header: {
        height: 60,
        flexDirection: 'row'
    },
    headerFont: {
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 50,
        color: COLORS.lightGrey
    },
    chevron: {
        marginLeft: 10
    },
    workoutContainer: {
        marginTop: 30,
        flex: 1
    }
});

export default DetailScreen;
