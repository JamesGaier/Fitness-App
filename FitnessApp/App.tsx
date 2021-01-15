import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import COLORS from './colors';
import BottomNavigator from './components/BottomNavigator';
import HomeScreen from './screens/HomeScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                        headerShown: false}}>
        <Stack.Screen
          name="Navigator"
          component={BottomNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
