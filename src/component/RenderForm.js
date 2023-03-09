import React, { useState } from "react";
import {useLocation} from "react-router-dom";

function MyForm() {
    const { state } = useLocation()

    const [username, setUsername] = useState("");
    const handleChange = event => setUsername(event.target.value);
    let header;
    if (username) {
        header = <h1>Hello {username}</h1>;
    } else header = "";
    console.log(state)
    return (
        <div>
            <form>
                <h1>{state.password}</h1>
                {header}
                <p>Enter your name:</p>
                <input type="text" value={username} onChange={handleChange} />
            </form>
        </div>
    );
}

export default MyForm;