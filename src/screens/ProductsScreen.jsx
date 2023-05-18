import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductsScreen = ({ navigation, route }) => {
  return (
    <View>
      {/*<Text>{route.params.name}</Text>*/}
      <Button
        title="Navegar a Detail"
        onPress={() => navigation.navigate("Detail")}
        />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({})