import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// https://github.com/tableflip/react-native-select-multiple (This ListView has checkboxes built in?)

const inventoryList = [
  {
    product: 'Item',
    quantity: 0,
    forShopping: true,
  },
  {
    product: 'Item',
    quantity: 2,
    forShopping: false,
  },
  {
    product: 'Item',
    quantity: 3,
    forShopping: false,
  },
  {
    product: 'Item',
    quantity: 0,
    forShopping: true,
  },
  {
    product: 'Item',
    quantity: 5,
    forShopping: false,
  },
  {
    product: 'Item',
    quantity: 21,
    forShopping: false,
  },
]

export default function App() {
  return (
    <View style={styles.container}>

      <TextInput
        // Search bar
        style={styles.input}
        onFocus={() => onPressInSearch()}
        onChangeText={(text) => onTextChange(text)}
        placeholder="Search.."
      />

      <View style={styles.list}>
        <FlatList
          // ListView (does not currently use ListItem)
          data={inventoryList}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>

      <TouchableOpacity
        // Add button
        style={{
          borderWidth: 2,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          position: 'absolute',
          bottom: 10,
          right: 10,
          height: 70,
          backgroundColor: '#fff',
          borderRadius: 100,
        }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>+</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View >
  );
}

function onPressInSearch() {
  // What happens when you press the search bar
  console.log("Pressed search button");
}

function onTextChange(text) {
  // What happens as you type in the search bar
  console.log(text);
}

function renderItem(item) {
  if (item.forShopping) {
    return <Text style={styles.shoppingItem}>{item.product} x{item.quantity}</Text>;
  }
  else {
    return <Text style={styles.item}>{item.product} x{item.quantity}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    marginBottom: 10,
    fontSize: 26,
    height: 44,
    width: '100%',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 26,
    borderRadius: 20,
  },
  shoppingItem: {
    padding: 10,
    marginBottom: 10,
    fontSize: 26,
    height: 44,
    width: '100%',
    color: '#ff0000',
  },
});
