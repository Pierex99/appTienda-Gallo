import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { PRODUCTS } from "../data/products"
import ProductsItem from "../components/ProductsItem"

const ProductsScreen = ({ navigation, route }) => {

  const jerseys = PRODUCTS.filter(
    jersey => jersey.category === route.params.categoryId
  );

  const handleSelectedProduct = item => {
    navigation.navigate('Details', {
      product: item,
      name: item.name
    })
  }

  const renderProductItem = ({item}) => (
    <View style={styles.productItem}>
      <ProductsItem item={item} onSelected={handleSelectedProduct}/>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={jerseys}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  productItem: {
    margin: 10,
    height: 300,
    width: 150,
  },
})