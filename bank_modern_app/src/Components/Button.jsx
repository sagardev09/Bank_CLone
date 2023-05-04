import React from 'react'

const Button = ({ styles, name }) => {
    return (
        <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium outline-none text-primary 
        text-[18px] ${styles}`}>
            {name}
        </button>
    )
}

export default Button
