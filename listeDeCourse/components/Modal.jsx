import { Button, Modal, StyleSheet, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function TestModal(props) {
    const [text, setText] = useState('')
    const handleSubmit = () => {
        props.addTask(text)
        setText('')
    }
    return (

        <Modal visible={props.visible}>
            <View>
                <View style={styles.input} >
                    <TextInput
                        onChangeText={setText}
                        style={styles.input}
                        placeholder='Ajouter ce que vous devez acheter..'
                        value={text}
                    />

                </View>
                <View styles= {styles.buttons}>
                    <Button color={"green"} title='Ajouter à ma liste' onPress={handleSubmit}></Button>
                    <Button title='Annuler' onPress={props.closeModal}></Button>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 5,
        borderColor: "black"
    }, 
    buttons: {
        width:"40%",
        height: 150
    }
})
