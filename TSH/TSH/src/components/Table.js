import React from 'react';
import Row from './Row';


export default class Table extends React.Component {
    
   
    render() {
        return (
            <table className="rwd-table">
                <thead>
                    <tr className="TableHeader">
                        <th >Supplier</th>
                        <th >Pound Rating</th>
                        <th  >Reference</th>
                        <th  >Value</th>
                    </tr>
                </thead>
                <tbody>              
                    {
                        this.props.rows.map(function (row) {
                            return (<Row key={row.payment_ref} data={row} showModal = {this.props.showModal} /> )
                        }.bind(this))
                    }
                </tbody>
              </table>
            )
    }

}