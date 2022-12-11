import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import UserScreen from './screens/UserScreen';
import LoginScreenTeacher from './screens/teacherScreens/LoginScreenTeacher';
import LoginScreenStudent from './screens/studentScreens/LoginScreenStudent'

import MainScreen from './screens/MainScreen';
import RegisterScreen from './screens/RegisterScreen';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Usuário" component={UserScreen} />
      <Stack.Screen name="Professor" component={LoginScreenTeacher} />
      <Stack.Screen name="Aluno" component={LoginScreenStudent} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
