import SkillTestCard from "../../../../components/SkillTestCard/SkillTestCard";
import Modal from "./components/Modal";
import { useContext, useState } from "react";
import { Bin } from '../../../../assets/SVG/profile/index';
import { AuthContext } from "../../../../Context/AuthContext";
import { decodeToken } from "react-jwt";


const TestsSkills = ({ tests, testsLoading }) => {

    const [openModal, setOpenModal] = useState(false);
    const [modal, setModal] = useState('');
    const { token } = useContext(AuthContext);
    const user = decodeToken(token)


    const handleOpenModal = () => {
        setOpenModal(false);
    }

    return (
        <>
            {user.isAdmin &&
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
                        className='bg-[#AC231B] text-white rounded p-2 flex items-center'
                        onClick={() => {
                            setOpenModal(!openModal)
                            setModal('delTest')
                        }}>
                        <img src={Bin} alt='del' className='pr-2 h-4' />
                        Eliminar prueba
                    </button>
                </div>
            }
            <ul className="flex flex-row flex-wrap w-[100%] gap-4">
                {
                    testsLoading ? (
                        <li className='text-black'>Loading...</li>
                    ) : (
                        tests?.map(test => test.deleted === false && <SkillTestCard key={test.name} test={test} />)
                    )
                }
            </ul>
            {
                openModal && <Modal setOpenModal={setOpenModal} handleOpenModal={handleOpenModal} modal={modal} />
            }
        </>
    );
}

export default TestsSkills;