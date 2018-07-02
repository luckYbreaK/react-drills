import React from 'react';

function Todo(props) {
    let array = props.array.map( (task, i) => {
       return(
            <div key={ i }>
                <h2>{task}</h2>
            </div>
        );
    });
    console.log(array);
    
    return "list";
}

export default Todo;