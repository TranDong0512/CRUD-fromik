import React, { useState } from "react";

function Form() {
    const [state, setState] = useState({
        username: "",
        age: ''
    });
    const handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "age") {
            if (!Number(+val)) {
                setState(
                    {
                        username: '',
                        age: ""
                    }
                )
                alert("Your age must be a number");

            }
        }
        setState({ ...state, [nam]: val });
    };

    return (
        <form>
            <h1>
                Hello {state.username} {state.age}
            </h1>
            <p>Enter your name:</p>
            <input type="text" name="username"value={state.username} onChange={handleChange} />
            <p>Enter your age:</p>
            <input type="number" name="age" value={state.age} onChange={handleChange} />
        </form>
    );
}

export default Form;