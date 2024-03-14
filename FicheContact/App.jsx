import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenContact from './screens/ScreenContact'


// package necessaire navigation :
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm i @react-navigation/native-stack

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Contacts'>
        <Stack.Screen name='Contacts' component={ScreenContact} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})