import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function FormLogin(props) {
    const [form, setForm] = useState({})
    let navigate = useNavigate();
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        navigate('/crudFormik',{state:{nameUser: e.target.value}})
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Sign up</h1>
            <form>
                <div className="custom-input">
                    <label>Username </label>
                    <input
                        name="username"
                        value={form.username || ""}
                        onChange={handleChange}
                        required=""
                    />
                </div>
                <div className="custom-input">
                    <label>Email </label>
                    <input
                        name="email"
                        value={form.email || ""}
                        onChange={handleChange}
                        required=""

                    />
                </div>
                <div className="custom-input">
                    <label>Password </label>
                    <input
                        type="password"
                        name="password"
                        value={form.password || ""}
                        onChange={handleChange}
                        required=""

                    />
                </div>
                <div className="custom-input">
                    <label>Confirm password </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword || ""}
                        onChange={handleChange}
                        required=""

                    />
                </div>
                <button type="button" value="" onClick={(e)=>{handleSubmit(e)}}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormLogin;