import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { CART } from "../data/cart"
import CartItem from "../components/CartItem"

const CartScreen = () => {
    const handleDeleteItem = id => {
        console.log(id)
    }

    const renderCartItem = ({ item }) => (
        <CartItem item={item} onDelete={handleDeleteItem} />
    )

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={CART}
                    keyExtractor={item => item.id}
                    renderItem={renderCartItem}
                />
                <View style={styles.footer}>
                    <TouchableOpacity 
                        style={styles.confirm} 
                        onPress={() => console.log("first")}
                    >
                        <Text style={styles.texto}>Confirmar</Text>
                        <View>
                            <Text style={styles.priceText}>Total: $100</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: "#fff",

    },
    list: {
        flex: 2
    },
    footer: {
        flex: 1,
        padding: 12,
        borderTopColor: "#ccc",
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    priceText: {
        fontSize: 18,
    },
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