import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

      <Modal><p>MoDaL</p></Modal>

      <TouchableOpacity
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
