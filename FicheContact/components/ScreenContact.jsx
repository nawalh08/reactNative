import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import dataContact from '../data'

export default function ScreenContact(navigation) {



    return (
        <View >

            <Text>Liste de contacts </Text>
{
            <FlatList
                data={dataContact}
                renderItem={({ itemData }) => <Item title={itemData.item.nom} />}
                keyExtractor={itemData => itemData.item.id}
            /> }



        </View>
    )
}

const styles = StyleSheet.create({})