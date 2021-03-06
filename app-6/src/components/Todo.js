import React from 'react';

function Todo(props) {
    let mappedArray = props.array.map( (task, i) => {
        return(
            <div key={ i }>
                <p>{task}</p>
            </div>
        ); 
    });
    
    return(
        <div>
            {mappedArray}
        </div> 
    );  
}

export default Todo;