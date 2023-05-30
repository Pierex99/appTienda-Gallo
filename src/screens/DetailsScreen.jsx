import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux';

const DetailsScreen = () => {
  const product = useSelector(state => state.products.selected)
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