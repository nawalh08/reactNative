import { Alert, StyleSheet, Text, View, TextInput, Button, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'
import TestModal from './Modal'

export default function List() {
    const [modalVisible, setModalVisible] = useState(false)
    const [textInput, setTextInput] = useState('')
    const [tab, setTab] = useState([])
   

    function addTask(text) {
        const newArticle = {
            text: text , id : Date.now()
        }
        setTab ([...tab, newArticle])
        console.log(newArticle)
        setModalVisible(false)
    }
    function ShowModal() {

        setModalVisible(true)
    }


    function closeModal() {
        setModalVisible(false)
    }
    return (
        <View>
            <TestModal visible={modalVisible} closeModal={closeModal} textInput= {textInput} RecupInput={setTextInput} addTask={addTask}></TestModal>
            <FlatList
                data={tab}
                renderItem={(itemData) => {
                    return (
                        <View>
                            <Text>{itemData.item.text} </Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => {
                    return index;
                }}
            />

            <View style={styles.button}>
                <Button title="Ajouter" onPress={ShowModal} />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
})