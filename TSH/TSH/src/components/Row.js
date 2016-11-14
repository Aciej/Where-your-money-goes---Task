import React from 'react';
import Rating from './Rating';

export default class Row extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props.data);
        this.props.showModal({ showModal: true, data: this.props.data });
    }

    render() {
  
        return (
            <tr onClick={this.handleClick} >
                <td className="row-name"  data-th="Supplier">{this.props.data.payment_supplier}</td>
                <td className="row-rating"   data-th="Pound Rating"><Rating value={this.props.data.payment_cost_rating} /></td>
                <td className="row-reference"   data-th="Reference">{this.props.data.payment_ref}</td>
                <td className="row-value"   data-th="Value"><span> {"£"+this.props.data.payment_amount}</span></td>

            </tr>
        )
    }

}