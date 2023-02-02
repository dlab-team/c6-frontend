import React from 'react'

const ButtonPrimary = (props) => {
    return (
        <button className='py-2 px-3 rounded-md bg-blue-600 text-white w-64' type={props.type}>
            {props.children}
        </button>
    )
}

export default ButtonPrimary