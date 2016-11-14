import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Rating from './Rating';

export default class ModalPayments extends React.Component {

    
    render() {
        console.log(this.props);
        return (
            <Modal  {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title>Payments Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="ModalBody">
                        <h1>Supplier Name: </h1>
                        <h2>{this.props.data.payment_supplier}</h2>
                     </div>
                              <div>
                        <h1>Payment Rating": </h1>
                        <Rating value={this.props.data.payment_cost_rating} />
                    </div>
                         <div>
                        <h1>Reference number: </h1>
                        <h2>{this.props.data.payment_ref}</h2>
                    </div>
                         <div>
                        <h1>Payment Value: </h1>
                       <h2>{this.props.data.payment_amount}</h2>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )

    }
}