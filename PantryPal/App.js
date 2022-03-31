import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Button} from 'react-native';
import ListItem from './ListItem.js';
import './ListItem.css';
import AddItemModal from './AddItemModal.js';
import {Modal} from './Modal.js';

//const inventoryList = [
const initList = [
  {
    product: 'Item #1',
    quantity: 1,
    tags: ['fruit', 'vegetable'],
    forShopping: true,
  },
  {
    product: 'Item #2',
    quantity: 2,
    tags: ['meat'],
    forShopping: false,
  },
]

export default function App() {
  const [inventoryList, setInventoryList] = useState(initList); //Later on maybe init as empty list


  function filterByCategory(category) {
    console.log("Filtering by " + category);

    var filteredResults = inventoryList.filter( item => item.tags.includes(category) );
    var otherItems = inventoryList.filter( item => !item.tags.includes(category) );

    var sortedList = filteredResults.concat(otherItems);

    setInventoryList(sortedList);
    console.log("Filtered List: ");
    console.log(inventoryList);
  }  

  function filterByShoppingList() {
    console.log("Filtering by shopping list items");

    var filteredResults = inventoryList.filter( item => item.forShopping);
    var otherItems = inventoryList.filter( item => !item.forShopping);

    var sortedList = filteredResults.concat(otherItems);

    setInventoryList(sortedList);
    console.log("Filtered List: ");
    console.log(inventoryList);
  }

  return (
    <View style={styles.container}>
      <TextInput
        // Search bar
        style={styles.input}
        onFocus={() => onPressInSearch()}
        onChangeText={(text) => onTextChange(text)}
        placeholder="Search"
      />

      <div id="filterContainer">
        <button onClick={() => filterByCategory("Fruit") }> Fruit</button>
        <button onClick={() => filterByCategory("Veggie") }> Veggies</button>
        <button onClick={() => filterByShoppingList() }> Shopping</button>
      </div>

      <ListItem product="Steak" tags={["meat"]} quantity="7" />
      <FlatList
        style={{width: "100%"}}
        data={inventoryList}
        renderItem={({ item }) => <ListItem product={item.product} tags={item.tags} quantity={item.quantity} />}
      />

      <AddItemModal />

      <StatusBar style="auto" />
    </View>
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

