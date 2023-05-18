import { Text, TouchableOpacity, View, Image } from 'react-native'

import styles from './styles'
import React from 'react'

const CategoriesItem = ({item, onSelected}) => {
  return (
    <View style={styles.CategoriesItem}>
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => console.log("producto")}
        >
            <View style={styles.textContainer}>
                <Text>Category Item</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image}/>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default CategoriesItem