import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllRecette from './screens/AllRecette'
import RecetteComplete from './screens/RecetteComplete'
import DetailsRecette from './screens/DetailsRecette'

// package necessaire navigation :
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm i @react-navigation/native-stack

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='EcranC'>
        <Stack.Screen name='All Categories' component={AllRecette} />
        <Stack.Screen name='MealsOverview' component={DetailsRecette} />
        <Stack.Screen name='About the Meal' component={RecetteComplete}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})