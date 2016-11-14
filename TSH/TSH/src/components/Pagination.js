import React from 'react';
import {Button} from 'react-bootstrap';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.createPage = this.createPage.bind(this);

    }

    handleClick(evt) {
        if(typeof evt == 'number')
        this.props.handlePage(evt);
        else
        this.props.handlePage(evt.target.value);
    }

    createPage() {
        let pages = [];
        if (this.props.data.leftEnd) {
            pages.push(<Button className="btn btn-pager" key={0} onClick={this.handleClick } value={0}> {1} </Button>);
        }
        for (let i = this.props.data.from; i < this.props.data.to; i++) {
            pages.push(<Button className="btn btn-pager" key={i} onClick={this.handleClick } disabled={this.props.data.current == i} value={i }> { (i) + 1} </Button>);
        }
        if (this.props.data.rightEnd) {
            pages.push(<Button className="btn btn-pager" key={this.props.data.total} onClick={this.handleClick } value={(this.props.data.total) - 1 }> {this.props.data.total} </Button>);
        }

        return pages
    }

    render() {
        if (this.props.data.current === false) { return false }
        return (
            <div className="Pagination">
                <Button key="back" className="btn btn-pager" onClick={function () { this.handleClick((parseInt(this.props.data.current) - 1))}.bind(this) } disabled={!this.props.data.left} ><span value={(parseInt(this.props.data.current) - 1) } className="glyphicon glyphicon-menu-left"></span></Button>
                {this.createPage()}
                <Button key="next" className="btn btn-pager" onClick={function () { this.handleClick((parseInt(this.props.data.current) + 1)) }.bind(this) } disabled={!this.props.data.right}><span  className="glyphicon glyphicon-menu-right"> </span> </Button> 
                </div>
        )

    }

}