import React from 'react'
import './InputSearch.css'

const InputSearch = ({
    value,
    onChange,
    placeholder,
    type
}) => {
    return (
        <input value={value} onCange={onChange} placeholder={placeholder} id='input_search' type={type}></input>
    )
}

export default InputSearch