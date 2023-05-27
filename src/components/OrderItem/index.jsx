import { Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import React from 'react'

const formatDay = date => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString()
}

const OrdenItem = () => {
    return (
        <View>
            <View>
                <Text>Date</Text>
                <Text>Total</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Ionicons name="md-trash" color={"red"} size={22} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrdenItem