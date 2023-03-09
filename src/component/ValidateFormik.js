import React, {useState} from 'react';

function ValidateFormik(props) {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    const [form, setForm] = useState({})
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    function handleValidate(){
        const error = {}
        if(!form.email){

        }
    }
    return (
        <div>

        </div>
    );
}

export default ValidateFormik;
