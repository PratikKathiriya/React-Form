import React, { useState } from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        Email: '',
        Password: '',
        ConformPassword: '',
        RollNo: '',
        Age: '',
        DateOfBirth: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: '',
            Email: '',
            Password: '',
            ConformPassword: '',
            RollNo: '',
            Age: '',
            DateOfBirth: '',
        });
    };

    return (
        <>

            <form onSubmit={handleSubmit}>

                <div>
                    <h1>Student Regristrion Form</h1>
                </div>

                <div>
                    <input type="text" name="name" placeholder='Enter your Name' value={formData.name} onChange={handleChange} required />
                </div>

                <div>
                    <input type="email" name="Email" placeholder='Enter your E-mail' value={formData.Email} onChange={handleChange} required />
                </div>

                <div>
                    <input type="Password" name="Password" placeholder='Enter Your password' value={formData.Password} onChange={handleChange} required />
                </div>

                <div>
                    <input type="Password" name="ConformPassword" placeholder='Enter Your  Conform password' value={formData.ConformPassword} onChange={handleChange} required />
                </div>

                <div>
                    <input type="number" name="RollNo" placeholder='Enter your Roll No' value={formData.RollNo} onChange={handleChange} required />
                </div>

                <div>
                    <input type="number" name="Age" placeholder='Enter your Age' value={formData.Age} onChange={handleChange} required />
                </div>

                <div>
                    <input type="Date" name="DateOfBirth" value={formData.DateOfBirth} onChange={handleChange} required />
                </div>

                <button type="submit" >Submit</button>
            </form>
        </>

    );
};

export default Form;

