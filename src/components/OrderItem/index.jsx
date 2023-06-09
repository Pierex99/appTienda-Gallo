import { Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from '../OrderItem/styles'

import React from 'react'

const formatDay = date => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString()
}

const OrdenItem = ({ item, onDelete }) => {
    return (
        <View style={styles.order}>
            <View>
                <Text style={styles.date}>{formatDay(item.date)}</Text>
                <Text style={styles.total}>Total: {item.total}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="md-trash" color={"red"} size={22} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrdenItem