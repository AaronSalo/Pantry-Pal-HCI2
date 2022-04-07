import React, {useState} from 'react';
import { Pressable, StyleSheet} from 'react-native';
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

    return (
        <div>
            <Pressable
                onPress={showQuantityModal }>
            <div className="quantity"> {props.quantity}</div>
            </Pressable>
            <CenterFloatModal handleShow={show} handleClose={ closeQuantityModal } onFormComplete={ closeQuantityModal }>
                <div>{props.product}</div>
                <div>Quantity: {props.quantity}</div>
            </CenterFloatModal>
        </div>
    );
  
}


export default QuantityChangeModal
