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
          <div className="topPart">
            <div className="left">
              <label htmlFor="productName">Name:</label>
              <input type="text" id="productName" name="productName"/>
              <br/>
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity"/>
            </div>

            <div className="right">
              <div className="buyTag">Need To Buy</div>
            </div>
          </div>

          <div className="tagContainer">
            <div className="tag">Fruit</div>
            <div className="tag">Veggies</div>
            <div className="tag">Meat</div>
            <div className="tag">Dairy</div>
            <div className="tag">Organic</div>
            <div className="tag">+</div>
          </div>
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


