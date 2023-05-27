import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = ({ route }) => {
  const product = route.params.product;
  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})