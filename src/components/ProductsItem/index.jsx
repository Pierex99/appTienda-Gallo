import { Image, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const ProductsItem = ({item, onSelected}) => {
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => onSelected(item)}
        >
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={{ uri: "https://assets.adidas.com/images/w_600,f_auto,q_auto/11d2efc805e24af6be2baf8701727749_9366/Camiseta_Oficial_de_Local_de_la_Seleccion_Peruana_2023_Blanco_GC4230_01_laydown.jpg"
                    }}
                />
            </View>
            <View style={styles.textContainer}>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>${item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductsItem