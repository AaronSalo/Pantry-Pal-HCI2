import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Modal} from './Modal.js';

class AddItemModal extends Component {
  constructor() {
    super();
    this.state = { show: false };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Modal show={this.state.show} handleClose={this.hideModal}>
        <p>mOdAl</p>
      </Modal>
    );
  }
}

export default AddItemModal

/* export default function AddItemModal() {
    return <Modal open={this.state.showModal}>
      <P>Bunger</P>
    </Modal>
}*/

