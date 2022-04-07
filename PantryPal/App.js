import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import ListItem from './ListItem.js';
import './ListItem.css';
import './App.css';
import AddItemModal from './AddItemModal.js';

const initList = [
  {
    product: 'Item #1',
    quantity: 1,
    tags: ['Fruit', 'Veggie'],
    forShopping: false,
  },
  {
    product: 'Item #2',
    quantity: 2,
    tags: ['Meat'],
    forShopping: false,
  },
]

export default function App() {
  const [inventoryList, setInventoryList] = useState(initList); //Later on maybe init as empty list

  function onAddComplete(newItem) {
    console.log("Adding new item to list:");
    console.log(newItem);

    //copying the array and pushing before updating the list is required
    //view refuses to update if i do it any other way
    const copy = [...inventoryList];
    copy.push(newItem);

    setInventoryList(copy);
  }

  function onChangeQuantity(itemName, newQuantity) {
    console.log("Changing quantity of item " + itemName + " to " + newQuantity);

    const copy = [...inventoryList];
    copy.forEach(item => {
      if (item.product == itemName) {
        item.quantity = newQuantity;
      }
    });

    setInventoryList(copy);
    console.log(inventoryList);
  }

  function onUpdateShoppingList(itemName) {
    console.log("update for shopping");

    const copy = [...inventoryList];// required to update the page dynamically
    copy.forEach(item => {
      if (item.product == itemName) {
        item.forShopping = !item.forShopping;
      }
    });

    setInventoryList(copy);
    console.log(copy);
  }

  function searchByText(text) {
    console.log("Searching by " + text);
    console.log(inventoryList);

    text = text.toLowerCase();

    var filteredResults = inventoryList.filter(item => item.product.toLowerCase().includes(text) || item.tags.map(element => {
      return element.toLowerCase();
    }).includes(text));
    var otherItems = inventoryList.filter(item => !item.product.toLowerCase().includes(text) && !item.tags.map(element => {
      return element.toLowerCase();
    }).includes(text));

    var sortedList = filteredResults.concat(otherItems);

    setInventoryList(sortedList);
    console.log("Searched List: ");
    console.log(inventoryList);
  }

  function onTextChange(text) {
    // Search as text updates
    searchByText(text);
  }

  function setActiveButton(aFilter) {
    const filterOptions = [ "FruitFilter", "VeggieFilter", "MeatFilter", "DairyFilter", "OrganicFilter", "ShoppingFilter"]

    filterOptions.forEach( filterOption => {
      var filterElement = document.getElementById(filterOption);

      if(aFilter === filterOption) filterElement.classList.add("button--active");
      else filterElement.classList.remove("button--active");
    });
  }

  function filterByCategory(category) {
    setActiveButton(category+"Filter");

    console.log("Filtering by " + category);
    console.log(inventoryList);

    var filteredResults = inventoryList.filter(item => item.tags.includes(category));
    var otherItems = inventoryList.filter(item => !item.tags.includes(category));

    var sortedList = filteredResults.concat(otherItems);

    setInventoryList(sortedList);
    console.log("Filtered List: ");
    console.log(inventoryList);
  }

  function filterByShoppingList() {
    setActiveButton("ShoppingFilter");

    console.log("Filtering by shopping list items");

    var filteredResults = inventoryList.filter(item => item.forShopping);
    var otherItems = inventoryList.filter(item => !item.forShopping);

    var sortedList = filteredResults.concat(otherItems);
    console.log("Here is the sorted list");
    console.log(sortedList);

    setInventoryList(sortedList);
    console.log("Filtered List: ");
    console.log(inventoryList);
  }

  function removeItem(itemName) {
    console.log("Removing item " + itemName);

    const copy = [...inventoryList];
    copy.forEach(item => {
      if (item.product == itemName) {
        copy.splice(copy.indexOf(item), 1);
      }
    });

    setInventoryList(copy);
    console.log(inventoryList);
  }

  return (
    <View style={styles.container}>
      <div id="header">
        <TextInput
          // Search bar
          style={styles.input}
          onFocus={() => onPressInSearch()}
          onChangeText={(text) => onTextChange(text)}
          placeholder="Search"
        />

        <div id="filterContainer">
          <button id="FruitFilter" onClick={() => filterByCategory("Fruit")}> Fruit</button>
          <button id="VeggieFilter" onClick={() => filterByCategory("Veggie")}> Veggies</button>
          <button id="MeatFilter" onClick={() => filterByCategory("Meat")}> Meat</button>
          <button id="DairyFilter" onClick={() => filterByCategory("Dairy")}> Dairy</button>
          <button id="OrganicFilter" onClick={() => filterByCategory("Organic")}> Organic</button>
          <button id="ShoppingFilter" className="shopping" onClick={() => filterByShoppingList()}><div className="shoppingLabel">Shopping<br />List</div></button>
        </div>
      </div>


      <FlatList
        style={{ width: "100%", top: "8em", "z-index": "-69420" }}
        data={inventoryList}
        renderItem={({ item }) =>
          <ListItem product={item.product} tags={item.tags} quantity={item.quantity} 
          forShopping={item.forShopping} onUpdateForShopping={onUpdateShoppingList} 
          onRemove={removeItem} onChangeQuantity={onChangeQuantity}/>}
      />

      <AddItemModal onComplete={onAddComplete} />

      <StatusBar style="auto" />
    </View >
  );
}

function onPressInSearch() {
  // What happens when you press the search bar
  console.log("Pressed search button");
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

