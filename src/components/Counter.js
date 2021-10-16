import React, {useState, useEffect} from 'react';
import "./Counter.css"


function Counter(props) {
    const [count, set_count] = useState(0)
    const [name, set_name] = useState("")

    const set_number = () => {
        set_count(count + 1)
    }

    useEffect(() => {
        if(count > 10){
            set_name("Robert")
        }
    }, [count])

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