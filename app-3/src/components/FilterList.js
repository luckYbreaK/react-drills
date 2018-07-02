import React, { Component } from 'react';

class FilterList extends Component {
    constructor() {
        super();

        this.state = {
            foods: ["ice cream", "pizza", "soda", "chips"],
            input: ""
        }
    }

    handleInput(val) {
        this.setState({
            input: val
        });
    }

    render() {
        let filteredArr = this.state.foods.filter( food => food.includes(this.state.input));
        let foodArr = filteredArr.map( (food, i) => {
            return(
                <div key={ i }>
                    <h2>{food}</h2>
                </div>
            );
        });
        return(
            <div>
                <input type="text" onChange={ (e) => this.handleInput(e.target.value)}/>
                {foodArr}
            </div>
        );
    }
}

export default FilterList;