import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../../../assets/images/error.png';

const Error404 = () => {
    return (
        <>
            <div className="w-screen h-screen flex flex-col items-center justify-center">
                <img className="w-1/2" src={Error} alt="Error 404" />
                <Link to="/">|
                    <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10">
                        Volver al inicio
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Error404;