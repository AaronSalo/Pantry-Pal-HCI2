import React, {useState} from 'react';
import { Pressable, StyleSheet, Text} from 'react-native';
import {CenterFloatModal} from './CenterFloatModal.js';

function QuantityChangeModal(props) {
    const [show, setShow] = useState(false);    
    
    const closeQuantityModal = () => {
        console.log("Close the modal");
        setShow(false);
      }    
      const showQuantityModal = () => {
        console.log("Open the modal");
        setShow(true);
      }

    function increment() {
        quantity++;
        document.getElementById("changeQuantity").textContent  = quantity;
        console.log("new quantity " + quantity); 
    }

    function decrement() {
        if(quantity > 1){
            quantity--;
            document.getElementById("changeQuantity").textContent  = quantity;
            console.log("new quantity " + quantity); 
        }
    }

    var quantity = props.quantity;
    var id = "changeQuantity" + props.product;

    return (
        <div>
            <Pressable
                onPress={showQuantityModal }>
            <div className="quantity"> {props.quantity}</div>
            </Pressable>
            <CenterFloatModal handleShow={show} handleClose={ closeQuantityModal } onFormComplete={ closeQuantityModal }>
                <div>{props.product}</div>                
                <Text style={styles.text} > Quantity </Text>
                <Pressable
                  onPress={decrement}
                  style={styles.button}>
                  <div>-</div>
                </Pressable>
                <div>1</div>
                <Pressable 
                  onPress={increment}
                  style={styles.button} >
                  <div>+</div>
                </Pressable>
            </CenterFloatModal>
        </div>
    );
  
}
const styles = StyleSheet.create({
    button: {
      height: 5,
      width: 5,
      justifyContent: 'center',
      alignContent: 'center',
      marginRight: 10,
      marginLeft: 10,
      paddingVertical: '1em',
      paddingHorizontal: '1em',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      backgroundColor: '#90A0FF',
      color: 'white',
    },
    input: {
  
      height: 20,
      width: '60%',
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


export default QuantityChangeModal
