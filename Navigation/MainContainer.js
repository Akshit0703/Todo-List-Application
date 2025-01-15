import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'


//Screens
import TodolistScreen from './Screens/Todo-List';
import CompletedTaskScreen from './Screens/completedTasks';

//Screen Names

const todoListName = 'To-Do List';
const completeListName = 'Completed Task';

const Tab = createBottomTabNavigator();


export default function MainContainer() {
    return (
        <NavigationContainer style={StyleSheet.container}>
            <Tab.Navigator 
                style = {StyleSheet.tabContainer}
                initialRouteName = {todoListName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if(rn === todoListName){
                            iconName = focused ? 'home' : 'home-outline';
                        }
                        else if(rn === completeListName){
                            iconName = focused ? 'list' : 'list-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                    },
                })

                }>
                <Tab.Screen name={todoListName} component={TodolistScreen}></Tab.Screen>
                <Tab.Screen name={completeListName} component={CompletedTaskScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 25,

    },
    tabContainer:{
        backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 25,
    }
})