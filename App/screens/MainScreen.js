import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ClassroomRegisterScreen from './ClassroomRegisterScreen';
import ClassesScreen from './ClassesScreen';
import RegisteredClassesScreen from './RegisteredClassesScreen';

const Tab = createMaterialBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Turmas"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Turmas"
        component={ClassesScreen}
        options={{
          tabBarLabel: 'Turmas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="google-classroom" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Aulas registradas"
        component={RegisteredClassesScreen}
        options={{
          tabBarLabel: 'Aulas registradas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-check" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Registrar aula"
        component={ClassroomRegisterScreen}
        options={{
          tabBarLabel: 'Registrar aula',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-clock-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
