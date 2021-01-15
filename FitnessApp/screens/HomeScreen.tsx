import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image } from 'react-native';
import COLORS from '../colors';

const HomeScreen = () => {
    const Card = () => (
        <View style={styles.cardView}>
            <LinearGradient
                colors={[COLORS.peach, COLORS.lightBrown]}
                style={styles.card}>
                <View style={styles.card} >
                    <TouchableOpacity style={styles.cardContainer}>
                        <Text style={styles.cardFont}>Core{'\n'}Workout</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </View>
    );
    return (
        <SafeAreaView style={styles.screenStyle}>
            <View style={styles.header}>
                <Text style={styles.headerFont}>
                    Workouts
                </Text>
            </View>
            <Card />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        backgroundColor: COLORS.lightPurple
    },
    header: {
        alignItems: 'center',
        paddingTop: 20
    },
    headerFont: {
        fontSize: 32,
        color: COLORS.lightGrey,
        fontWeight: 'bold'
    },
    cardView: {
        flex: 1,
        marginTop: 20
    },
    card: {
        height: 170,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 20,
    },
    cardContainer: {
        flex: 1,
        margin: 10,
        flexDirection: 'row'
    },
    cardFont: {
        fontSize: 32,
        color: COLORS.lightGrey,
        marginRight: 15,
        fontWeight: 'bold'
    }
})

export default HomeScreen;
