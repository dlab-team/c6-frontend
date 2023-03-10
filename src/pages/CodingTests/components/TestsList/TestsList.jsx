import SkillTestCard from "../../../../components/SkillTestCard/SkillTestCard";
import Modal from "./components/Modal";
import { useState } from "react";
import {
    Edit,
    Bin
} from '../../../../assets/SVG/profile/index';

const TestsSkills = ({ tests, testsLoading }) => {

    const [openModal, setOpenModal] = useState(false);
    const [modal, setModal] = useState('')

    const handleOpenModal = () => {
        setOpenModal(false);
    }

    return (
        <>
            <div className="flex justify-end gap-2 mb-3">
                <button
                    className='bg-[#89CFD9] text-black rounded p-2'
                    onClick={() => {
                        setOpenModal(!openModal)
                        setModal('addTest')
                    }}
                >
                    + Agregar prueba
                </button>
                <button
                    className='bg-[#89CFD9] text-black rounded p-2 flex items-center'
                    onClick={() => {
                        setOpenModal(!openModal)
                        setModal('editTest')
                    }}
                >
                    <img src={Edit} alt='edit' className='pr-2 h-4' />
                    Modificar prueba
                </button>
                <button
                    className='bg-[#AC231B] text-white rounded p-2 flex items-center'
                    onClick={() => {
                        setOpenModal(!openModal)
                        setModal('delTest')
                    }}>
                    <img src={Bin} alt='del' className='pr-2 h-4' />
                    Eliminar prueba
                </button>
            </div>
            <ul className="flex flex-row flex-wrap w-[100%] gap-4">
                {
                    testsLoading ? (
                        <li className='text-black'>Loading...</li>
                    ) : (
                        tests?.map(test => <SkillTestCard key={test.name} test={test} />)
                    )
                }
            </ul>
            {
                openModal && <Modal setOpenModal={setOpenModal} handleOpenModal={handleOpenModal} modal={modal}/>
            }
        </>
    );
}

export default TestsSkills;