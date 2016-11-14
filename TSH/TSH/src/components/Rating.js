import React from 'react';
import Pound from './Pound';

export default class Rating extends React.Component {

    showFive() {
        let Rating=[];
        for (let i = 0; i < 5; i++) {
            if(this.props.value>i)
                Rating.push(<Pound key={i} value="full" />);
            else
                Rating.push(<Pound key={i} value="empty" />);
        }
        return Rating;
    }

    render() {
        return (
            <div className="ratingContainer">
                {this.showFive()}
                </div>
        )

    }
}