import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import dataRecette from '../data'

export default function homeRecette() {
  return (
    <View>
      <Flatlist>
        data={dataRecette} renderItem={(itemData) => {
          return(
            <TouchableOpacity style={styles.recette} onPress={() => 
              navigation.navigate("MealsOverview" , 
              {nom: itemData.item.nom, prenom: itemData.item.prenom, numeroTel: itemData.item.numeroTel, adresse: itemData.item.adresse})}>
 
             <View >
               <Text style={styles.text}>{itemData.item.nom}   {itemData.item.prenom}</Text>
             </View>
              </TouchableOpacity>
      </Flatlist>
    </View>
  )
}

const styles = StyleSheet.create({})