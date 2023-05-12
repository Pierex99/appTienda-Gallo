import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = ({ }) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.titleContainer}>Carrito</Text>
                    <View style={styles.buttonContainer}>
                        <Text>Funcionó switch SIUUUU</Text>
                        
                        <Text style={styles.texto}>Aplicando FONT</Text>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 40,
        paddingTop: 20,
        paddingBottom: 20,
    },
    inputContainer: {
        height: 200,
        paddingHorizontal: 30,
        paddingTop: 80,
    },
    titleContainer: {
        marginBottom: 30,
        fontSize: 40,
        fontWeight: "500",
        fontFamily: "FiraSansBold",
        color: "#1E283C"
    },
    texto: {
        fontFamily: "FiraSansBold"
    },
})