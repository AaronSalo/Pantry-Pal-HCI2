import React, {useState, useRef} from 'react';
import { TouchableOpacity, TextInput, Text, Pressable, StyleSheet, View} from 'react-native';
import {Modal} from './Modal.js';

function AddItemModal({onComplete }) {
    const nameFieldRef = useRef();
    const [show, setShow] = useState(false);
    const [disable, setDisable] = React.useState(false);

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
      
      if(itemName.trim().length > 0) {
        var newItem = {
          product: itemName,
          quantity: quantity,
          tags: tags,
          forShopping: needToBuy,
        }
        
        onComplete(newItem); //pass to the parent function
    }
      closeModal();
    }

    function clearFields() {
      // clear fields
      nameFieldRef.current.setNativeProps({ text: '' });

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
      document.getElementById("quantity").textContent = quantity;
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
    


    function increment() {
      quantity++;
      document.getElementById("quantity").textContent  = quantity;
      if(quantity > 1)
      {
        setDisable(false);
      }
    }

    function decrement() {
      if(quantity > 1){
      quantity--;
      document.getElementById("quantity").textContent  = quantity;
      }
      if(quantity == 1)
      {
        setDisable(true);
      }
 
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
                <Text style={styles.text}>Item Name </Text>
                <TextInput
                  // Search bar
                  onChangeText={(text) => onNameChange(text)}
                  placeholder="Item Name"
                  style={styles.input}
                  ref={nameFieldRef}
                />
              </div>
              <div>
                
                <View style={{ flexDirection: 'row', }}>
                <Text style={styles.text} > Quantity </Text>
                <Pressable
                  onPress={decrement}
                  style={{    
                    height: 10,
                    width: 5,
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginRight: 10,
                    marginLeft: 10,
                    paddingVertical: '7%',
                    paddingHorizontal: '7%',
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 'bold',
                    backgroundColor: '#90A0FF',
                    color: 'white' , 
                    opacity: disable ? 0.5 : 1.0,
                    }}>
                  <div>-</div>
                </Pressable>
                <div id="quantity" > 1  </div>
                <Pressable 
                  onPress={increment}
                  style={styles.button} >
                  <div>+</div>
                </Pressable>
                </View>
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
  button: {
    height: 10,
    width: 5,
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 10,
    marginLeft: 10,
    paddingVertical: '7%',
    paddingHorizontal: '7%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#90A0FF',
    color: 'white',
  },
  input: {

    height: 20,
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

export default AddItemModal
