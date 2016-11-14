import React from 'react';

export default class Pound extends React.Component {

    render() {
        return (
            <div className={'pound '+this.props.value}><b>£ </b> </div>
        )

    }

}