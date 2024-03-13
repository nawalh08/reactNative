import { StyleSheet, Text, View, But } from 'react-native'
import React from 'react'
import List from './components/List'

export default function App() {
    return (
        <View style={styles.container} >
            <View >
                <Text style={styles.sectionTitle}>Liste de courses </Text>
            </View>

            <List />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FDE9E0"
    },

    sectionTitle: {
        color: "black",
        textAlign: "center",
        marginTop: 25,
        fontWeight: "600",
    },

    text: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200,
        color: "black"
    },
    button: {
        marginTop: 200
    }
});