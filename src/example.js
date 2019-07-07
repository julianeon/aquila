import React, { Component } from 'react';
import { Modal, Button } from 'reactstrap';

class Example extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button color="success" onClick={this.handleShow}>
          Talk to us
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Aquila</Modal.Title>
          </Modal.Header>
          <Modal.Body>We are sending someone over to speak with you.</Modal.Body>
          <Modal.Footer>
            <Button color="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button color="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Example;
