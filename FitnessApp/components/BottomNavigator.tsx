import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../colors';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import HomeStackScreen from '../screens/HomeStackScreen';
import LibraryScreen from '../screens/LibraryScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            style: {
                height: 60,
                borderTopWidth: 0,
                elevation: 0,
                backgroundColor: COLORS.darkPurple
            },
            showLabel: false,
            activeTintColor: COLORS.lightGrey
        }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeStackScreen}
                options={{tabBarIcon: ({color}) => <AntDesign name="barschart" size={24} color={color} />}}
                 />

            <Tab.Screen
                name="LibraryScreen"
                component={LibraryScreen}
                options={{tabBarIcon: ({color}) => <MaterialIcons name="edit" size={24} color={color} />}} />

        </Tab.Navigator>
    )
}

export default BottomNavigator;
