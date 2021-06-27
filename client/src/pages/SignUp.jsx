import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


export default function SıgnUp() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleRegisterUser = (name, email, password) => {
        axios.post("/api/users/register",
            {
                name: name,
                email: email,
                password: password
            })
            .then((res) => {
                console.log(res.data.message);
                window.location.assign('/login');
            }).catch((err) => {
                console.log(err.response.data.message);
                alert(err.response.data.message)
            })
    };

    useEffect(() => {
    }, [])
    return (
        <div className="home">
            Sign Up
        </div>
    );
};