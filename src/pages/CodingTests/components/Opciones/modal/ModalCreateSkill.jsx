import React from 'react';
import CreateSkillForm from '../form/CreateSkillForm';


const ModalCreateSkill = ({ setOpenModal, handleCloseModal }) => {
    return (
        <div>
            <div
                id='modal-backdrop'
                className='absolute inset-0 w-screen h-screen'
                onClick={(e) => {
                    if (e.target.id === 'modal-backdrop') {
                        setOpenModal(false);
                    }
                }}
            >
                <div
                    onClick={handleCloseModal}
                    className='fixed top-0 left-0 w-full h-full bg-opacity-50 bg-[#252424cc] z-50'
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[27rem] border-stone-500 bg-sky-100 rounded-md'
                    >
                        <div className='flex flex-col items-center justify-center h-full text-black'>
                            <button
                            className='absolute top-4 right-4 text-black font-bold'
                            type='button'
                            onClick={handleCloseModal}
                            >
                                X
                            </button>
                            <h1 className='static text-2xl font-semibold -mt-20'>
                                Crear Test
                            </h1>
                            <CreateSkillForm setOpenModal={setOpenModal}></CreateSkillForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCreateSkill;
