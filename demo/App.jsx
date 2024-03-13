import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container} >
      <View style= {styles.containerImage}>
              <Image style={styles.logo} source={{ uri: 'https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png', }} />
      </View>
      <View style={styles.textContainer}>
        <Text  >
        <Text> Nom :  </Text><Text >François</Text>
        <Text>Prenom : </Text><Text >Sandra</Text>
        <Text > Téléphone : </Text><Text >0601020304</Text>
        <Text >Adresse : </Text><Text>200 rue du jean </Text>
      </Text>
      </View>

    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
    justifyContent:"center",
   


  },
  containerImage: {
    alignItems:"center"

  },

  logo: {
    height: 200,
    width: 200,   
    alignItems: "center",
    
  },
  textContainer : {
    alignItems: "flex-start",
    margin: 50,
    marginTop: 0,
  
  },
})