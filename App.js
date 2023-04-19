import { Button, StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='elemento de la lista'
          style={styles.input}
        />
        <Button 
          title="Presiona aqui"
          onPress={() => console.log("presiona aqui")}
        />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 200,
  },
});

/*import { StyleSheet, Text, View } from "react-native";

import React from "react";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, backgroundColor: "green" }}></View>
      <View style={{ flex: 1, backgroundColor: "blue" }}></View>
      <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
*/