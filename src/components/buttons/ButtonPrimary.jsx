import React from 'react'

const ButtonPrimary = (props) => {
    return (
        <button className='bg-primary text-white font-bold text-xl uppercase p-4 rounded-2xl' type={props.type}>
            {props.children}
        </button>
    )
}

export default ButtonPrimary