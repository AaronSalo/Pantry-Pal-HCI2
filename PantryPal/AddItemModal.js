import React, {useState, Component} from 'react';
import { TouchableOpacity, TextInput, Text, Pressable, StyleSheet} from 'react-native';
import {Modal} from './Modal.js';

function AddItemModal() {

    const [show, setShow] = useState(true);
    const [count, setCount] = useState(0);
    const closeModal = () => {
      console.log("Close the modal");
      setShow(false);
    }    
    const showModal = () => {
      console.log("Open the modal");
      setShow(true);
    }
    const incrementCount = (count) => {
      // Update state with incremented value
      quantity++;
      console.log(quantity);
    }
    const decrementCount = (count) => {
          // Update state with decremented value
          quantity--;
          console.log(quantity);
    }
    const onFormComplete = () => {
      console.log("Form Completed");
      
      var newItem = {
        product: itemName,
        quantity: count,
        tags: tags,
        forShopping: needToBuy,
      }

      console.log(newItem); //pass this to the itemlist
      closeModal();
    }

    var itemName = "";
    var quantity = 1;
    var tags = [];
    var needToBuy = false;

    function onNameChange(text) {
      itemName = text;
    }    
    
    function onQuantityChange(text) {
      count = text;
    }

    function needToBuyToggle() {
      var child = document.getElementById("needToBuy");
      needToBuy = !needToBuy;
      if(needToBuy) {
        child.classList.remove("tag")
        child.classList.add("selectedTag")
      } else {
        child.classList.remove("selectedTag")
        child.classList.add("tag")
      }
    }

    function addTag(tag){
      var child = document.getElementById(tag);

      if(tags.includes(tag)){
        child.classList.remove("selectedTag")
        child.classList.add("tag")
        tags = tags.filter( item => item != tag)
      } else {
        child.classList.remove("tag")
        child.classList.add("selectedTag")
        tags.push(tag);
      }
      console.log(tags);
    }

    return (
      <div>
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
          }}
          onPress= {showModal}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
        <Modal handleShow={show} handleClose={ closeModal } onFormComplete={ onFormComplete }>
          <div className="topPart">
            <div className="left">
              <div>
                <Text>Item Name </Text>
                <TextInput
                  // Search bar
                  onChangeText={(text) => onNameChange(text)}
                  placeholder="Item Name"
                  style={styles.input}
                />
              </div>
              <div>
                <Text>Quantity </Text>
                <button onClick={()=>incrementCount(count)}> + </button>
                <TextInput
                  // Search bar
                 onChangeText={() => onQuantityChange(count)}
                  placeholder="0"
                  style={styles.input}
                />
                 <button onClick={()=>decrementCount(count)}> - </button>


              </div>
            </div>

            
            <div className="right">
              <Pressable
                onPress={() => needToBuyToggle()}
                style={() => [ { float: "left", }]}>
                  <div className="buyTag" id="needToBuy">Need To Buy</div>
              </Pressable>
            </div>
          </div>

          <div className="tagContainer">
            <Pressable
              onPress={() => addTag("Fruit")}
              style={() => [ { float: "left", }]}>
              <div className="tag" id="Fruit">Fruit</div>
            </Pressable>
            <Pressable
              onPress={() => addTag("Veggies")}
              style={() => [ { float: "left", }]}>
            <div className="tag" id="Veggies">Veggies</div>
            </Pressable>
            <Pressable
              onPress={() => addTag("Meat")}
              style={() => [ { float: "left", }]}>
            <div className="tag" id="Meat">Meat</div>
            </Pressable>
            <Pressable
              onPress={() => addTag("Dairy")}
              style={() => [ { float: "left", }]}>
            <div className="tag" id="Dairy">Dairy</div>
            </Pressable>
            <Pressable
              onPress={() => addTag("Organic")}
              style={() => [ { float: "left", }]}>
            <div className="tag" id="Organic">Organic</div>
            </Pressable>
          </div>
        </Modal>
      </div>
    );
  
}

const styles = StyleSheet.create({
  input: {
    height: 20,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 20,
  },
});

export default AddItemModal

/* export default function AddItemModal() {
    return <Modal open={this.state.showModal}>
      <P>Bunger</P>
    </Modal>
}*/


