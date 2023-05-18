import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import ItemListScreen from "./src/screens/ProductsScreen"
import CartScreen from "./src/screens/CartScreen"
import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {

  const [loaded] = useFonts({
    "FiraSansBold": require('./src/assets/fonts/FiraSans-Bold.ttf'),
    "FiraSansRegular": require('./src/assets/fonts/FiraSans-Regular.ttf')
  })

  //if (!loaded) return null

  const [cartScreenSelected, setCartScreenSelected] = useState(false)

  const handleItemListScreen = () => {
    setCartScreenSelected(true)
  }

  //este es el condicional del cambio de pantallas  => implementarlo en mi app
  let content = <ItemListScreen onItemListScreen={handleItemListScreen} />;

  if (cartScreenSelected) {
    content = <CartScreen />;
  }

  return (
    <View style={styles.container}>
      {/*{content}*/}
      <ShopNavigator/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EAF2"
  },
  

});