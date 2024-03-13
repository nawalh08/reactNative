import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './components/Button'

export default function App() {
  return (
    <View >
      <View styles= {styles.container}>
        <Text style= {styles.text} >Calculatrice </Text>
      </View>
      <View>
          <Button/>
      </View>
    </View>
  
  )
}

const styles = StyleSheet.create({
  text : {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    
    backgroundColor: "black"
  },

  
  
})