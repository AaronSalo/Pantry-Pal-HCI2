import React, {useState, Component} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import ReactDOM from 'react-dom';
import {Modal} from './Modal.js';

function AddItemModal() {

    const [show, setShow] = useState(true);

    const closeModal = () => {
      console.log("Close the modal");
      setShow(false);
    }    
    const showModal = () => {
      console.log("Open the modal");
      setShow(true);
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
        <Modal handleShow={show} handleClose={ closeModal } >
          <p>mOdAl</p>
        </Modal>
      </div>
    );
  
}

export default AddItemModal

/* export default function AddItemModal() {
    return <Modal open={this.state.showModal}>
      <P>Bunger</P>
    </Modal>
}*/

