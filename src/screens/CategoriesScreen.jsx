import { FlatList, StyleSheet, Text, View } from "react-native";

import CategoriesItem from "../components/CategoriesItem";
import React from "react";
import { selectedCategory } from "../store/actions/category.action"

import { useSelector, useDispatch } from "react-redux";

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("Products", {
      name: item.title,
    });
  };

  const renderCategoriesItem = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoriesItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  },
});
