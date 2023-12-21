import React from 'react'
import './Input.css'

const Input = ({
    value,
    onChange,
    placeholder,
    type
}) => {
    return (
        <input value={value} onCange={onChange} placeholder={placeholder} id='input' type={type}></input>
    )
}

export default Input