import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "./modal.js";

class ConsultModal extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.showModal.bind(this);
    }

    showModal = () => {
        this.setState({show: true});
    };

    hideModal = () => {
        this.setState({show: false});
    };
  

    render() {
        const buttonStyle = {
            justifyContent: "center",
            display: "flex",
          };
        return (
        <div style={buttonStyle}>
            <Modal show={this.state.show} handleClose={this.hideModal}>
                <p>Modal</p>
            </Modal>
            <Button type="button" className="btn btn-light" onClick={this.showModal}>SCHEDULE FREE CONSULTATION!</Button>
         </div>
        );
    }
}

export default ConsultModal;