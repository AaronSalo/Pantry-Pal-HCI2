import React, {useState, Component, useRef} from 'react';
import { TouchableOpacity, TextInput, Text, Pressable, StyleSheet} from 'react-native';
import {Modal} from './Modal.js';

function AddItemModal({onComplete }) {
    const nameFieldRef = useRef();
    const quantityFieldRef = useRef();
    const [show, setShow] = useState(false);

    const closeModal = () => {
      console.log("Close the modal");
      clearFields();
      setShow(false);
    }    
    const showModal = () => {
      console.log("Open the modal");
      setShow(true);
    }

    const onFormComplete = () => {
      console.log("Form Completed");   
      
      var newItem = {
        product: itemName,
        quantity: quantity,
        tags: tags,
        forShopping: needToBuy,
      }
      
      onComplete(newItem); //pass to the parent function

      closeModal();
    }

    function clearFields() {
      // clear fields
      nameFieldRef.current.setNativeProps({ text: '' });
      quantityFieldRef.current.setNativeProps({ text: ''});

      var needToBuyTag =  document.getElementById("needToBuy");
      needToBuyTag.classList.remove("selectedTag");
      needToBuyTag.classList.add("tag");

      //reset the selected tags
      tags.forEach( tag => {
        var tagElement = document.getElementById(tag);

        tagElement.classList.remove("selectedTag")
        tagElement.classList.add("tag")
      });

      itemName = "";
      quantity = 1;
      tags = [];
      needToBuy = false;
    }

    var itemName = "";
    var quantity = 1;
    var tags = [];
    var needToBuy = false;

    function onNameChange(text) {
      itemName = text;
    }    
    
    function onQuantityChange(text) {
      quantity = text;
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
    }

    return (
      <div>
        <TouchableOpacity
          style={{
            position: "fixed",
            borderWidth: 2,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            bottom: "2em",
            right: "2em",
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
                <Text>Item Name</Text>
                <TextInput
                  // Search bar
                  onChangeText={(text) => onNameChange(text)}
                  placeholder="Item Name"
                  style={styles.input}
                  ref={nameFieldRef}
                />
              </div>
              <div>
                <Text>Quantity </Text>
                <TextInput
                  // Search bar
                  onChangeText={(text) => onQuantityChange(text)}
                  placeholder="1"
                  style={styles.input}
                  ref={quantityFieldRef}
                />
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
              onPress={() => addTag("Veggie")}
              style={() => [ { float: "left", }]}>
            <div className="tag" id="Veggie">Veggie</div>
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
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 20,
  },
});

export default AddItemModal
