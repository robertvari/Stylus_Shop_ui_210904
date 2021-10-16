import React, {useState} from 'react';
import "./Counter.css"


function Counter(props) {
    const [count, set_count] = useState(0)
    const [name, set_name] = useState("")

    const set_number = () => {
        if(count > 9){
            set_name("Robert Vari")
        }

        set_count(count + 1)
    }

    return (
        <div className="counter-container">
            <div>Number: {count}</div>

            <button onClick={set_number}>Click</button>

            <hr/>
            <div>Name: {name}</div>
        </div>
    );
}

export default Counter;