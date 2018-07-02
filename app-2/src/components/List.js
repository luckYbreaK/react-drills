import React, { Component } from 'react';

class List extends Component {
    constructor() {
        super();

        this.state = {
            foods : ["ice cream", "pizza","soda", "chips"]
        };
    }

    render() {
        let foodArr = this.state.foods.map(food => <h2>{food}</h2>);
        return(
            <div>
                {foodArr}
            </div>
        );
    }
}

export default List;