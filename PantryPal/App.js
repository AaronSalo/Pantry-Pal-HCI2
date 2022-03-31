import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from './ListItem.js';
import './ListItem.css';
import AddItemModal from './AddItemModal.js';
import {Modal} from './Modal.js';

const inventoryList = [
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
  return (
    <View style={styles.container}>
      <ListItem product="Steak" tags={["meat"]} quantity="7" />
      <FlatList
        style={{width: "100%"}}
        data={inventoryList}
        renderItem={({ item }) => <ListItem product={item.product} tags={item.tags} quantity={item.quantity} />}
      />

      <AddItemModal />

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    //padding: 10,
    fontSize: 26,
    height: 44,
    width: '100%',
  },
});
