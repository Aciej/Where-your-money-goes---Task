import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Table from './Table';
import Pagination from './Pagination';
import urlAPI from './urlAPI';
require('../css/main.scss');
import ModalPayments from './ModalPayments';



export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableDate: [],
            pagination: { links: [], current: false },
            modal: { status: false, data: {}},

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePape = this.handlePape.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(_data) {
        console.log(_data);
        this.setState({
            modal:
            { showModal: true, data: _data.data }
        });
    }

    closeModal() {
        this.setState({
            modal:
            { showModal: false, data: {} }
        });
    }

    setPayments(_data) {
            this.setState({
                tableDate: _data.payments,
                pagination: _data.pagination

            });
        }

     handleSubmit(evt) {

         var self = this;

         // Start of Parametrs's Obj
         let Para = {}
         if (evt.target['Name'].value != "") Para.query = evt.target['Name'].value;
         if (evt.target['rating'].value != "No Rating") Para.rating = evt.target['rating'].value;
         if (this.state.page) Para.query = this.state.page;

         // End PO

         var _url = urlAPI.getList(urlAPI.getParameters(Para));;
         $.getJSON(_url, function (data) {
             self.setPayments(data);
         })

         evt.target.reset();
    }

     handlePape(_page) {

         var self = this;
         var _url = urlAPI.getList("?" + this.state.pagination.links[_page]);;
         console.log(_url);
         $.getJSON(_url, function (data) {
             self.setPayments(data);
         })

     }

     selectLoop() {
         let rows = [];
         for (let i = 1; i < 6; i++) {

             rows.push(< option key={i} value= {i} > Rating {i}</option>)
         }
         return rows;
     }

    render() {
        console.log(this.state.modal);
       
        return (
            <div className="Container">
                <div className="Header">
                <h1>Where your money goes</h1>
                <p>Payments made by Chichester District Council to individual suppliers with a value over £500 made within October.</p>
                <hr />
                </div>

                <form className="Searcher" action="javascript:;" onSubmit={this.handleSubmit}>
                    <div className="col-xs-12 col-sm-5 outerWithBorder divInput">
                        <input id="Name" className="innerWithBorder form-contror SearchInput" type="text" placeholder="Search suppliers" />                           
                    </div>
                    <div className="col-xs-5 col-sm-3 outerWithBorder divRating">
                        <select id="rating"  className="form-contror innerWithBorder selectRating" id="rating" placeholder="Select pound rating"  >
                            <option  value="No Rating" hidden defaultValue>Select pound rating</option>
                        <option value="No Rating">No Rating</option>
                        {this.selectLoop() }
                    </select>  
                    </div>   
                    <div className="col-xs-3 col-sm-2 outerWithBorder"> 
                        <input className=" innerWithBorder btn btn-reset form-contror" type="reset" value="Reset" id="Reset" /> 
                    </div>   
                    <div className="col-xs-3 col-sm-2 outerWithBorder"> 
                        <input className="btn btn-search innerWithBorder form-contror" type="submit" value="Search" id="Search" />                               
               </div>
                         </form>

            <Table rows={this.state.tableDate} showModal={this.openModal} />      
            <Pagination data={this.state.pagination} handlePage={this.handlePape} />

            <ModalPayments show={this.state.modal.showModal} data={this.state.modal.data} onHide={this.closeModal} />

            </div>
            )
    }
}