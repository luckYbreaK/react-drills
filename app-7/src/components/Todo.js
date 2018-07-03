import React from 'react';

function Todo(props) {
    let mappedArr = props.array.map( (task, i) => {
        return(
            <div key={i}>
                <p>{task}</p>
            </div>
        );
    });

    return(
        <div>
            {mappedArr}
        </div>
    );
}

export default Todo;